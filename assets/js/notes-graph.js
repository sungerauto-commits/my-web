(() => {
  const root = document.querySelector("[data-note-graph]");
  const canvas = root?.querySelector("[data-graph-canvas]");
  if (!root || !canvas) return;
  const context = canvas.getContext("2d");
  const message = root.querySelector("[data-graph-message]");
  const status = root.querySelector("[data-graph-status]");
  const tooltip = root.querySelector("[data-graph-tooltip]");
  const input = root.querySelector("[data-note-query]");
  const course = root.querySelector('[data-note-course]');
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const matches = (value, query) => value.normalize("NFKC").toLocaleLowerCase().includes(query);

  const queryText = () => input.value.trim().normalize("NFKC").toLocaleLowerCase();

  const initialize = ({ nodes, links }) => {
    const d3 = window.d3;
    if (!d3 || !context || !nodes.length) throw new Error("Graph unavailable");
    const colors = ["#236e75", "#9a3b59", "#686097", "#906f27"];
    const groups = d3.scaleOrdinal(['电路', '大学物理', '概率论', '综合'], colors);
    const connected = new Map(nodes.map(node => [node.id, new Set()]));
    links.forEach(link => {
      connected.get(link.source)?.add(link.target);
      connected.get(link.target)?.add(link.source);
    });
    nodes.forEach(node => {
      node.radius = 4 + Math.min(5, Math.sqrt(connected.get(node.id).size) * 1.6);
      node.color = groups(node.course || "");
    });
    const hubs = new Set([...nodes].sort((a, b) => connected.get(b.id).size - connected.get(a.id).size).slice(0, 5).map(node => node.id));
    let width = 1;
    let height = 1;
    let ratio = 1;
    let view = d3.zoomIdentity;
    let hovered = null;
    let query = "";
    let dragActive = false;
    const inCourse = node => !course.value || node.course === course.value;
    const findNode = (x, y, radius) => {
      let nearest = null, distance = radius * radius;
      nodes.forEach(node => {
        if (!inCourse(node)) return;
        const delta = (node.x - x) ** 2 + (node.y - y) ** 2;
        if (delta < distance) { nearest = node; distance = delta; }
      });
      return nearest;
    };
    const selected = d3.select(canvas);
    const simulation = d3.forceSimulation(nodes)
      .randomSource(d3.randomLcg(.42))
      .force("links", d3.forceLink(links).id(node => node.id).distance(130))
      .force("charge", d3.forceManyBody().strength(-220))
      .force("collision", d3.forceCollide(node => Math.min(70, Math.max(32, node.title.length * 3.5))))
      .force("x", d3.forceX(node => ({'电路': -440, '大学物理': 0, '概率论': 440}[node.course] || 0)).strength(.16))
      .force("y", d3.forceY().strength(.045))
      .alphaDecay(.035)
      .stop();

    const render = () => {
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.translate(view.x, view.y);
      context.scale(view.k, view.k);
      links.forEach(link => {
        if (!inCourse(link.source) || !inCourse(link.target)) return;
        const active = hovered && (link.source === hovered || link.target === hovered);
        context.strokeStyle = active ? "#9a3b59" : "#667978";
        context.globalAlpha = hovered ? (active ? .8 : .12) : .32;
        context.lineWidth = (active ? 1.6 : 1) / view.k;
        context.beginPath();
        context.moveTo(link.source.x, link.source.y);
        context.lineTo(link.target.x, link.target.y);
        context.stroke();
      });
      context.font = `${14 / view.k}px 'LXGW WenKai', KaiTi, serif`;
      context.textAlign = "center";
      const labels = [];
      nodes.forEach(node => {
        if (!inCourse(node)) return;
        const found = (!course.value || node.course === course.value) && (!query || matches(node.title + " " + node.tags.join(" "), query));
        const near = !hovered || node === hovered || connected.get(hovered.id).has(node.id);
        context.globalAlpha = found && near ? 1 : .17;
        context.fillStyle = node.color;
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
        if (node === hovered) {
          context.lineWidth = 1 / view.k;
          context.strokeStyle = node.color;
          context.beginPath();
          context.arc(node.x, node.y, node.radius + 4 / view.k, 0, Math.PI * 2);
          context.stroke();
        }
        if (node === hovered || (found && (nodes.length <= 30 || (query && found) || (hovered && near) || view.k > .85 || hubs.has(node.id)))) {
          context.fillStyle = "#132b2d";
          const limit = width < 600 ? 110 : 180;
          let label = node.title;
          while (label.length > 1 && context.measureText(label + "...").width * view.k > limit) label = label.slice(0, -1);
          if (label !== node.title) label += "...";
          labels.push({node, label, width: context.measureText(label).width * view.k, opacity: found && near ? 1 : .17});
        }
      });
      const boxes = [];
      labels.sort((a, b) => Number(b.node === hovered) - Number(a.node === hovered) || connected.get(b.node.id).size - connected.get(a.node.id).size).forEach(({node, label, width: labelWidth, opacity}) => {
        const [x, y] = view.apply([node.x, node.y + node.radius + 19 / view.k]);
        const box = {x: x - labelWidth / 2 - 3, y: y - 14, w: labelWidth + 6, h: 19};
        if (node !== hovered && boxes.some(other => box.x < other.x + other.w && box.x + box.w > other.x && box.y < other.y + other.h && box.y + box.h > other.y)) return;
        boxes.push(box);
        context.globalAlpha = opacity;
        context.fillStyle = '#132b2d';
        context.fillText(label, node.x, node.y + node.radius + 19 / view.k);
      });
      context.globalAlpha = 1;
    };
    const findAt = event => {
      const pointer = d3.pointer(event.touches?.[0] || event, canvas);
      const [x, y] = view.invert(pointer);
      return findNode(x, y, 18 / view.k);
    };
    const zoom = d3.zoom().scaleExtent([.2, 5])
      .filter(event => event.type === "wheel" || (event.touches?.length > 1) || !findAt(event))
      .on("zoom", event => { view = event.transform; render(); });
    selected.call(zoom).on("dblclick.zoom", null);
    selected.call(d3.drag().container(canvas)
      .subject(event => {
        const [x, y] = view.invert([event.x, event.y]);
        const node = findNode(x, y, 18 / view.k);
        return node ? { node, x: event.x, y: event.y } : null;
      })
      .on("start", event => {
        dragActive = true;
        tooltip.hidden = true;
        event.subject.node.fx = event.subject.node.x;
        event.subject.node.fy = event.subject.node.y;
        if (!reduce) simulation.alphaTarget(.12).restart();
      })
      .on("drag", event => {
        const node = event.subject.node;
        [node.fx, node.fy] = view.invert([event.x, event.y]);
        if (reduce) {
          node.x = node.fx;
          node.y = node.fy;
          render();
        }
      })
      .on("end", event => {
        dragActive = false;
        event.subject.node.fx = null;
        event.subject.node.fy = null;
        simulation.alphaTarget(0);
      }));

    const fit = () => {
      if (!width || !height || root.dataset.view !== 'graph') return;
      const visible = nodes.filter(inCourse);
      if (!visible.length) return;
      const minX = d3.min(visible, node => node.x);
      const maxX = d3.max(visible, node => node.x);
      const minY = d3.min(visible, node => node.y);
      const maxY = d3.max(visible, node => node.y);
      const margin = Math.min(width * .22, 110);
      const scale = Math.min(1.6, (width - margin * 2) / Math.max(80, maxX - minX), (height - 100) / Math.max(80, maxY - minY));
      selected.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2)
        .scale(scale).translate(-(minX + maxX) / 2, -(minY + maxY) / 2));
    };
    const resize = () => {
      const bounds = canvas.parentElement.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      // Bound backing pixels on large, high-density displays.
      ratio = Math.min(2, window.devicePixelRatio || 1, Math.sqrt(8000000 / (width * height)));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      fit();
    };
    canvas.addEventListener("pointermove", event => {
      if (dragActive || event.pointerType === "touch") return;
      hovered = findAt(event);
      canvas.style.cursor = hovered ? "pointer" : "grab";
      tooltip.hidden = !hovered;
      if (hovered) {
        tooltip.textContent = `${hovered.course} · ${hovered.title}`;
        tooltip.style.left = Math.max(8, Math.min(event.offsetX + 12, width - 220)) + "px";
        tooltip.style.top = Math.max(8, Math.min(event.offsetY + 16, height - 56)) + "px";
      }
      render();
    });
    canvas.addEventListener("pointerleave", () => { hovered = null; tooltip.hidden = true; render(); });
    const openNote = node => {
      if (!node) return;
      const url = new URL(node.url, window.location.href);
      if (url.origin === window.location.origin) window.location.assign(url.href);
    };
    canvas.addEventListener("click", event => {
      if (event.defaultPrevented) return;
      openNote(findAt(event));
    });
    canvas.addEventListener("keydown", event => {
      if (["+", "=", "-", "0"].includes(event.key)) {
        event.preventDefault();
        if (event.key === "0") fit();
        else selected.call(zoom.scaleBy, event.key === "-" ? .8 : 1.25);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        openNote(hovered);
      } else if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        const choices = nodes.filter(node => inCourse(node) && (!query || matches(node.title + ' ' + node.tags.join(' '), query)));
        if (!choices.length) return;
        const previous = choices.indexOf(hovered);
        const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
        const index = event.key === 'Home' ? 0 : event.key === 'End' ? choices.length - 1
          : previous < 0 ? (forward ? 0 : choices.length - 1) : (previous + (forward ? 1 : -1) + choices.length) % choices.length;
        hovered = choices[index];
        tooltip.hidden = false;
        tooltip.textContent = `${hovered.course} · ${hovered.title}`;
        tooltip.style.left = Math.max(8, Math.min(width / 2 + 12, width - 220)) + 'px';
        tooltip.style.top = Math.min(height / 2 + 16, height - 56) + 'px';
        selected.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2)
          .scale(Math.max(view.k, .8)).translate(-hovered.x, -hovered.y));
      }
    });
    root.querySelectorAll("[data-graph-zoom]").forEach(button => {
      button.addEventListener("click", () => { if (root.dataset.view === 'graph') selected.call(zoom.scaleBy, button.dataset.graphZoom === "in" ? 1.25 : .8); });
    });
    root.querySelector("[data-graph-fit]").addEventListener("click", fit);
    input.addEventListener("input", () => { query = queryText(); hovered = null; tooltip.hidden = true; render(); });
    const updateStatus = () => {
      if (root.dataset.view === 'graph') status.textContent = `${nodes.filter(inCourse).length} 篇笔记 · ${links.filter(link => inCourse(link.source) && inCourse(link.target)).length} 条双链关联`;
    };
    course.addEventListener('change', () => { hovered = null; tooltip.hidden = true; fit(); render(); updateStatus(); });
    root.addEventListener('notes:view', () => { resize(); updateStatus(); });
    simulation.on("tick", render).on("end", fit);
    simulation.tick(140);
    canvas.hidden = false;
    message.hidden = true;
    updateStatus();
    resize();
    if (!reduce) simulation.restart();
    new ResizeObserver(resize).observe(canvas.parentElement);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) simulation.stop();
      else if (!reduce && simulation.alpha() > .001) simulation.restart();
    });
  };
  fetch(root.dataset.graphSrc).then(response => {
    if (!response.ok) throw new Error("Graph request failed");
    return response.json();
  }).then(data => {
    initialize(data);
    root.dispatchEvent(new CustomEvent('notes:data', {detail: data}));
  }).catch(() => {
    canvas.hidden = true;
    message.hidden = false;
    message.textContent = "图谱暂时无法加载，请刷新页面后重试。";
    const error = root.querySelector('[data-map-error]');
    error.hidden = false;
    error.textContent = message.textContent;
  });
})();
