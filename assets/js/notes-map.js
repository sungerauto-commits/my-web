(() => {
  const root = document.querySelector('[data-note-graph]');
  if (!root) return;
  const tabs = [...root.querySelectorAll('[data-notes-view]')];
  const course = root.querySelector('[data-note-course]');
  const chapter = root.querySelector('[data-map-chapter]');
  const problems = root.querySelector('[data-map-problems]');
  const search = root.querySelector('[data-note-query]');
  const detail = root.querySelector('[data-map-detail]');
  const svgElement = root.querySelector('[data-study-map]');
  if (!svgElement || !course) return;
  root.dataset.view = 'map';
  const setView = mode => {
    root.dataset.view = mode;
    tabs.forEach(tab => {
      const active = tab.dataset.notesView === mode;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
    root.dispatchEvent(new Event('notes:view'));
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setView(tab.dataset.notesView));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + 1) % tabs.length;
      setView(tabs[next].dataset.notesView);
      tabs[next].focus();
    });
  });
  root.addEventListener('notes:data', event => {
    const {study, nodes: notes} = event.detail;
    const d3 = window.d3;
    const catalog = study?.nodes || [];
    const byId = new Map(catalog.map(node => [node.id, node]));
    const groups = study?.groups || {};
    const colors = d3.scaleOrdinal(['电路', '大学物理', '概率论', '综合'], ['#236e75', '#9a3b59', '#686097', '#906f27']);
    [...new Set(notes.map(node => node.course))].forEach(value => course.add(new Option(value, value)));
    const svg = d3.select(svgElement);
    const defs = svg.append('defs');
    defs.append('marker').attr('id', 'study-arrow').attr('viewBox', '0 -5 10 10')
      .attr('refX', 9).attr('refY', 0).attr('markerWidth', 7).attr('markerHeight', 7)
      .attr('orient', 'auto').append('path').attr('d', 'M0,-4L9,0L0,4').attr('fill', '#6a8380');
    const world = svg.append('g');
    let visible = [];
    let positions = new Map();
    let focused = null;
    let edges = 0;
    let columns = 3;
    const W = 230, H = 91, GAP = 44;
    const zoom = d3.zoom().scaleExtent([.12, 3]).on('zoom', event => world.attr('transform', event.transform));
    svg.call(zoom).on('dblclick.zoom', null);
    const fit = (overview = false) => {
      if (root.dataset.view !== 'map' || !visible.length) return;
      const width = svgElement.clientWidth, height = svgElement.clientHeight;
      if (!width || !height) return;
      const xs = [...positions.values()].map(p => p.x), ys = [...positions.values()].map(p => p.y);
      const x = Math.min(...xs), y = Math.min(...ys) - 28;
      const bw = Math.max(...xs) + W - x, bh = Math.max(...ys) + H - y;
      const scale = Math.min(1.15, (width - 48) / bw, (height - 70) / bh);
      if (width < 600 && overview !== true) {
        const readable = Math.max(.85, scale);
        const focus = positions.get(focused);
        const centerY = focus ? focus.y + H / 2 : y + (height - 42) / readable / 2;
        svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(readable).translate(-x - bw / 2, -centerY));
      } else svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(scale).translate(-x - bw / 2, -y - bh / 2));
    };
    const select = node => {
      focused = node.id;
      world.selectAll('.study-node').classed('is-selected', item => item.id === node.id).attr('aria-pressed', item => String(item.id === node.id));
      world.selectAll('.study-edge').classed('is-related', item => item.source === node.id || item.target === node.id);
      detail.hidden = false;
      detail.querySelector('[data-map-title]').textContent = `${node.id} · ${node.title}`;
      detail.querySelector('[data-map-cue]').textContent = node.cue;
      const list = detail.querySelector('[data-map-prerequisites]');
      list.replaceChildren();
      if (node.prerequisites.length) {
        list.append('先学：');
        node.prerequisites.forEach(id => {
          const button = document.createElement('button');
          button.type = 'button';
          button.textContent = `${id} ${byId.get(id).title}`;
          button.addEventListener('click', () => locate(byId.get(id)));
          list.append(button);
        });
      }
      detail.querySelector('[data-map-open]').href = node.url;
    };
    const updateStatus = () => {
      if (root.dataset.view === 'map') root.querySelector('[data-graph-status]').textContent = `${visible.length} 个节点 · ${edges} 条学习路径`;
    };
    const render = () => {
      world.selectAll('*').remove();
      positions = new Map();
      const query = search.value.trim().normalize('NFKC').toLocaleLowerCase();
      const courses = course.value ? [course.value] : Object.keys(groups);
      const selectedGroups = courses.flatMap(name => (groups[name] || []).filter(([title]) => !chapter.value || title === chapter.value).map(([title, ids]) => ({course: name, title, ids})));
      const concepts = new Set(selectedGroups.flatMap(group => group.ids));
      visible = catalog.filter(node => courses.includes(node.course) && (node.type === 'concept' ? concepts.has(node.id) : problems.checked && node.prerequisites.some(id => concepts.has(id))));
      columns = (svgElement.clientWidth || innerWidth) < 600 ? 1 : 3;
      let row = 0;
      selectedGroups.forEach(group => {
        const members = visible.filter(node => group.ids.includes(node.id));
        if (!members.length) return;
        const y = row;
        world.append('text').attr('class', 'study-chapter').attr('x', 0).attr('y', y).text(`${group.course} / ${group.title}`);
        members.forEach((node, index) => positions.set(node.id, {x: (index % columns) * (W + GAP), y: y + 28 + Math.floor(index / columns) * (H + GAP)}));
        row += 28 + Math.ceil(members.length / columns) * (H + GAP) + 32;
      });
      visible.filter(node => node.type === 'problem').forEach((node, index) => positions.set(node.id, {x: (index % columns) * (W + GAP), y: row + Math.floor(index / columns) * (H + GAP)}));
      const ids = new Set(visible.map(node => node.id));
      const paths = visible.flatMap(node => node.prerequisites.filter(id => ids.has(id)).map(id => ({source: id, target: node.id})));
      edges = paths.length;
      world.selectAll('.study-edge').data(paths).join('path').attr('class', 'study-edge').attr('marker-end', 'url(#study-arrow)').attr('d', edge => {
        const a = positions.get(edge.source), b = positions.get(edge.target);
        const sameRow = Math.abs(a.y - b.y) < 10;
        const sx = sameRow ? a.x + W : a.x + W / 2, sy = sameRow ? a.y + H / 2 : a.y + H;
        const tx = sameRow ? b.x : b.x + W / 2, ty = sameRow ? b.y + H / 2 : b.y;
        return sameRow ? `M${sx},${sy} C${(sx + tx) / 2},${sy} ${(sx + tx) / 2},${ty} ${tx},${ty}` : `M${sx},${sy} C${sx},${(sy + ty) / 2} ${tx},${(sy + ty) / 2} ${tx},${ty}`;
      });
      const items = world.selectAll('.study-node').data(visible).join('g').attr('class', node => `study-node${node.type === 'problem' ? ' is-problem' : ''}`)
        .attr('transform', node => { const p = positions.get(node.id); return `translate(${p.x},${p.y})`; })
        .attr('tabindex', 0).attr('role', 'button').attr('aria-label', node => `${node.id} ${node.title}`)
        .attr('data-study-id', node => node.id).style('--node-color', node => colors(node.course))
        .classed('is-muted', node => query && !`${node.id} ${node.title} ${node.cue}`.normalize('NFKC').toLocaleLowerCase().includes(query))
        .on('click', (_, node) => select(node)).on('keydown', (event, node) => {
          if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(node); }
        });
      items.append('rect').attr('width', W).attr('height', H).attr('rx', 4);
      items.append('text').attr('class', 'study-node-code').attr('x', 14).attr('y', 22).text(node => node.id + (node.type === 'problem' ? ' · 原题' : ''));
      items.each(function(node) {
        const chars = Array.from(node.title);
        for (let line = 0; line < 2; line++) d3.select(this).append('text').attr('x', 14).attr('y', 45 + line * 22).text(chars.slice(line * 12, (line + 1) * 12).join('') + (line === 1 && chars.length > 24 ? '...' : ''));
        d3.select(this).append('title').text(`${node.title}\n${node.cue}`);
      });
      if (!visible.length) world.append('text').attr('x', 20).attr('y', 50).text('此课程暂无知识地图');
      detail.hidden = true;
      if (focused && ids.has(focused)) select(byId.get(focused));
      fit();
      updateStatus();
    };
    const chapters = () => {
      chapter.replaceChildren(new Option(course.value ? '课程全貌' : '全部章节', ''));
      (groups[course.value] || []).forEach(([name]) => chapter.add(new Option(name, name)));
    };
    const locate = node => {
      course.value = node.course;
      chapters();
      chapter.value = node.chapter;
      if (node.type === 'problem') problems.checked = true;
      focused = node.id;
      course.dispatchEvent(new Event('change'));
      chapter.value = node.chapter;
      render();
    };
    course.addEventListener('change', () => { chapters(); render(); });
    chapter.addEventListener('change', render);
    problems.addEventListener('change', render);
    search.addEventListener('input', render);
    root.addEventListener('notes:view', () => { fit(); updateStatus(); });
    root.querySelector('[data-graph-fit]').addEventListener('click', () => fit(true));
    root.querySelectorAll('[data-graph-zoom]').forEach(button => button.addEventListener('click', () => {
      if (root.dataset.view === 'map') svg.call(zoom.scaleBy, button.dataset.graphZoom === 'in' ? 1.25 : .8);
    }));
    new ResizeObserver(() => {
      if (!svgElement.clientWidth) return;
      if ((svgElement.clientWidth < 600 ? 1 : 3) !== columns) render();
      else fit();
    }).observe(svgElement);
    chapters();
    const requested = new URLSearchParams(location.search).get('map');
    if (byId.has(requested)) locate(byId.get(requested));
    else {
      if (groups['概率论']) { course.value = '概率论'; chapters(); chapter.value = (groups['概率论'][0] || [''])[0]; }
      render();
      course.dispatchEvent(new Event('change'));
      if (groups['概率论']) { chapter.value = groups['概率论'][0][0]; render(); }
    }
  });
})();
