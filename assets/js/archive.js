(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(connection && connection.saveData);

  const toggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector(".site-navigation");

  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "关闭" : "菜单";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "菜单";
      });
    });
  }

  const heroVideo = document.querySelector("[data-hero-video]");

  if (heroVideo) {
    if (reduce || saveData) {
      heroVideo.pause();
      heroVideo.querySelectorAll("source").forEach((source) => source.removeAttribute("src"));
      heroVideo.load();
    } else {
      const showVideo = () => heroVideo.classList.add("is-ready");

      if (heroVideo.readyState >= 2) {
        showVideo();
      } else {
        heroVideo.addEventListener("loadeddata", showVideo, { once: true });
      }

      const playback = heroVideo.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {});
      }
    }
  }

  const revealItems = document.querySelectorAll("[data-reveal]");

  if (reduce || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!reduce && finePointer) {
    const hero = document.querySelector("[data-hero]");

    if (hero) {
      let heroFrame = 0;

      hero.addEventListener("pointermove", (event) => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        window.cancelAnimationFrame(heroFrame);
        heroFrame = window.requestAnimationFrame(() => {
          hero.style.setProperty("--hero-x", (x * -10).toFixed(2) + "px");
          hero.style.setProperty("--hero-y", (y * -6).toFixed(2) + "px");
        });
      }, { passive: true });

      hero.addEventListener("pointerleave", () => {
        window.cancelAnimationFrame(heroFrame);
        hero.style.setProperty("--hero-x", "0px");
        hero.style.setProperty("--hero-y", "0px");
      });
    }

    document.querySelectorAll("[data-preview-video]").forEach((video) => {
      const tile = video.closest(".record-link");

      if (!tile) {
        return;
      }

      tile.addEventListener("pointerenter", () => {
        const playback = video.play();
        if (playback && typeof playback.catch === "function") {
          playback.catch(() => {});
        }
      });

      tile.addEventListener("pointerleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }


  const bloomCanvases = document.querySelectorAll("[data-watercolor-blooms]");

  if (!reduce && !saveData && bloomCanvases.length) {
    const bloomPalette = [
      "#0f4e60", "#19788a", "#2aa0a0", "#3365ae", "#5f4d9d", "#975faa",
      "#c15c92", "#d76278", "#e47650", "#ec9d3b", "#efc74c", "#afa746",
      "#779e57", "#3d8d68", "#1c8b82", "#1a6275", "#064562", "#3a2c52",
      "#803b57", "#ad4e43", "#c68238", "#d7cf62", "#91bda0", "#91c4d0"
    ];

    const seeded = (index, salt) => {
      const value = Math.sin((index + 1) * 127.1 + salt * 311.7) * 43758.5453123;
      return value - Math.floor(value);
    };

    const easeOut = (value) => 1 - Math.pow(1 - value, 3);

    const makeTint = (mask, color) => {
      const size = 360;
      const tint = document.createElement("canvas");
      const tintContext = tint.getContext("2d", { alpha: true });

      tint.width = size;
      tint.height = size;

      tintContext.drawImage(mask, 0, 0, size, size);
      tintContext.globalCompositeOperation = "source-in";
      tintContext.fillStyle = color;
      tintContext.fillRect(0, 0, size, size);
      tintContext.globalCompositeOperation = "source-over";

      return tint;
    };

    const initializeBloomCanvas = (canvas, canvasIndex) => {
      const source = canvas.dataset.maskSrc;

      if (!source) {
        return;
      }

      const mask = new Image();
      mask.decoding = "async";

      const start = () => {
        const context = canvas.getContext("2d", { alpha: true });

        if (!context) {
          return;
        }

        const variant = canvas.dataset.bloomVariant || "archive";
        const count = variant === "archive" ? bloomPalette.length : 12;
        const tintPool = bloomPalette.map((color) => makeTint(mask, color));
        const blooms = Array.from({ length: count }, (_, index) => {
          const seedIndex = index + canvasIndex * 29;
          const isArchive = variant === "archive";
          const xInset = isArchive ? .05 : .09;
          const yInset = isArchive ? .08 : .16;

          return {
            x: xInset + seeded(seedIndex, 1) * (1 - xInset * 2),
            y: yInset + seeded(seedIndex, 2) * (1 - yInset * 2),
            size: (isArchive ? 128 : 154) + seeded(seedIndex, 3) * (isArchive ? 130 : 185),
            colorIndex: (index * 5 + canvasIndex * 7) % tintPool.length,
            rotation: (seeded(seedIndex, 4) - .5) * Math.PI,
            duration: 9100 + seeded(seedIndex, 5) * 6200,
            delay: -seeded(seedIndex, 6) * 12200,
            opacity: (isArchive ? .17 : .14) + seeded(seedIndex, 7) * .14
          };
        });

        let cssWidth = 1;
        let cssHeight = 1;
        let pixelRatio = 1;
        let animationFrame = 0;
        let visible = true;

        const resize = () => {
          const bounds = canvas.getBoundingClientRect();
          cssWidth = Math.max(1, bounds.width);
          cssHeight = Math.max(1, bounds.height);
          pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
          canvas.width = Math.round(cssWidth * pixelRatio);
          canvas.height = Math.round(cssHeight * pixelRatio);
        };

        const drawBloom = (bloom, timestamp) => {
          const phase = ((timestamp + bloom.delay) % bloom.duration) / bloom.duration;
          const soak = Math.min(1, phase / .48);
          const dry = phase > .84 ? 1 - (phase - .84) / .16 : 1;
          const spread = .18 + .88 * easeOut(soak);
          const diameter = bloom.size * spread;
          const alpha = bloom.opacity * dry * (.24 + soak * .76);
          const tint = tintPool[bloom.colorIndex];

          context.save();
          context.translate(bloom.x * cssWidth, bloom.y * cssHeight);
          context.rotate(bloom.rotation);

          context.globalAlpha = alpha * .46;
          context.filter = "blur(" + Math.max(.25, 7 * (1 - soak)) + "px)";
          context.drawImage(tint, -diameter * .57, -diameter * .57, diameter * 1.14, diameter * 1.14);

          context.globalAlpha = alpha;
          context.rotate(.24);
          context.filter = "blur(" + Math.max(0, 2.5 * (1 - soak)) + "px)";
          context.drawImage(tint, -diameter / 2, -diameter / 2, diameter, diameter);

          context.globalAlpha = alpha * .32 * soak;
          context.rotate(-.62);
          context.filter = "blur(0px)";
          context.drawImage(tint, -diameter * .31, -diameter * .31, diameter * .62, diameter * .62);
          context.restore();
        };

        const render = (timestamp) => {
          animationFrame = 0;

          if (!visible || document.hidden) {
            return;
          }

          context.setTransform(1, 0, 0, 1, 0, 0);
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          blooms.forEach((bloom) => drawBloom(bloom, timestamp));
          animationFrame = window.requestAnimationFrame(render);
        };

        const resume = () => {
          if (visible && !document.hidden && !animationFrame) {
            animationFrame = window.requestAnimationFrame(render);
          }
        };

        resize();

        if ("ResizeObserver" in window) {
          const resizeObserver = new ResizeObserver(resize);
          resizeObserver.observe(canvas);
        } else {
          window.addEventListener("resize", resize, { passive: true });
        }

        if ("IntersectionObserver" in window) {
          const visibilityObserver = new IntersectionObserver((entries) => {
            visible = entries.some((entry) => entry.isIntersecting);

            if (!visible && animationFrame) {
              window.cancelAnimationFrame(animationFrame);
              animationFrame = 0;
            }

            resume();
          }, { threshold: .02 });

          visibilityObserver.observe(canvas);
        }

        document.addEventListener("visibilitychange", resume);
        resume();
      };

      if (mask.complete && mask.naturalWidth) {
        start();
      } else {
        mask.addEventListener("load", start, { once: true });
      }

      mask.src = source;
    };

    bloomCanvases.forEach(initializeBloomCanvas);
  }

  const searchRoot = document.querySelector("[data-search]");

  if (!searchRoot) {
    return;
  }

  const input = searchRoot.querySelector("[data-search-input]");
  const status = searchRoot.querySelector("[data-search-status]");
  const results = searchRoot.querySelector("[data-search-results]");
  const indexUrl = searchRoot.dataset.indexUrl;
  let archiveIndex = null;

  const sectionLabels = {
    posts: "文章",
    photos: "照片",
    videos: "视频"
  };

  const plainText = (value) => {
    const element = document.createElement("div");
    element.innerHTML = value || "";
    return (element.textContent || "").replace(/\s+/g, " ").trim();
  };

  const makeResult = (entry) => {
    const link = document.createElement("a");
    const meta = document.createElement("span");
    const title = document.createElement("strong");
    const excerpt = document.createElement("p");

    link.className = "search-result";
    link.href = entry.permalink;
    meta.className = "search-result-meta";
    meta.textContent = sectionLabels[entry.section] || "记录";
    title.textContent = entry.title;
    excerpt.textContent = plainText(entry.summary || entry.content || "");

    link.append(meta, title, excerpt);
    return link;
  };

  const renderResults = (query) => {
    results.replaceChildren();

    if (!query) {
      status.textContent = "输入关键词开始搜索。";
      return;
    }

    const normalized = query.toLocaleLowerCase();
    const matches = archiveIndex.filter((entry) => {
      const text = [entry.title, entry.summary, entry.content].filter(Boolean).join(" ").toLocaleLowerCase();
      return text.includes(normalized);
    }).slice(0, 12);

    status.textContent = matches.length ? "找到 " + matches.length + " 条结果。" : "没有找到相关内容。";
    matches.forEach((entry) => results.appendChild(makeResult(entry)));
  };

  const loadIndex = async () => {
    if (archiveIndex) {
      return archiveIndex;
    }

    try {
      const response = await fetch(indexUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) {
        throw new Error("Unable to load index");
      }

      archiveIndex = await response.json();
      return archiveIndex;
    } catch {
      status.textContent = "搜索索引暂时无法加载。";
      archiveIndex = [];
      return archiveIndex;
    }
  };

  input.addEventListener("input", async () => {
    const query = input.value.trim();

    if (!query) {
      results.replaceChildren();
      status.textContent = "输入关键词开始搜索。";
      return;
    }

    status.textContent = "正在搜索。";
    await loadIndex();
    renderResults(query);
  });
})();
