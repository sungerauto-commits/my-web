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


  const bloomCanvases = document.querySelectorAll("[data-watercolor-bloom]");

  if (!reduce && !saveData && bloomCanvases.length) {
    const bloomPalette = [
      "#0f4e60", "#19788a", "#2aa0a0", "#3365ae", "#5f4d9d", "#975faa",
      "#c15c92", "#d76278", "#e47650", "#ec9d3b", "#efc74c", "#afa746",
      "#779e57", "#3d8d68", "#1c8b82", "#1a6275", "#064562", "#3a2c52",
      "#803b57", "#ad4e43", "#c68238", "#d7cf62", "#91bda0", "#91c4d0"
    ];

    const seeded = (value, salt) => {
      const result = Math.sin((value + 1) * 127.1 + salt * 311.7) * 43758.5453123;
      return result - Math.floor(result);
    };
    const easeOut = (value) => 1 - Math.pow(1 - value, 3);
    const maskSource = bloomCanvases[0].dataset.maskSrc;

    if (maskSource) {
      const mask = new Image();
      mask.decoding = "async";

      const createTint = (color) => {
        const tint = document.createElement("canvas");
        const tintContext = tint.getContext("2d", { alpha: true });
        const size = 320;

        tint.width = size;
        tint.height = size;
        tintContext.drawImage(mask, 0, 0, size, size);
        tintContext.globalCompositeOperation = "source-in";
        tintContext.fillStyle = color;
        tintContext.fillRect(0, 0, size, size);
        tintContext.globalCompositeOperation = "source-over";
        return tint;
      };

      const initialize = () => {
        const tintPool = bloomPalette.map(createTint);

        bloomCanvases.forEach((canvas, canvasIndex) => {
          const context = canvas.getContext("2d", { alpha: true });

          if (!context) {
            return;
          }

          const hero = canvas.dataset.bloomVariant === "hero";
          const count = hero ? 6 : 10;
          const xInset = hero ? .38 : .06;
          const xRange = hero ? .54 : .88;
          const blooms = Array.from({ length: count }, (_, index) => {
            const seedIndex = index + canvasIndex * 17;
            return {
              x: xInset + seeded(seedIndex, 1) * xRange,
              y: .1 + seeded(seedIndex, 2) * .8,
              size: (hero ? 230 : 150) + seeded(seedIndex, 3) * (hero ? 130 : 110),
              rotation: (seeded(seedIndex, 4) - .5) * Math.PI,
              delay: seeded(seedIndex, 5) * .34,
              colorIndex: (index * 5 + canvasIndex * 7) % tintPool.length,
              opacity: (hero ? .15 : .11) + seeded(seedIndex, 6) * .09
            };
          });

          let cssWidth = 1;
          let cssHeight = 1;
          let pixelRatio = 1;
          let inView = false;
          let started = false;
          let progress = 0;
          let startTime = 0;
          let lastPaint = 0;

          const resize = () => {
            const bounds = canvas.getBoundingClientRect();
            cssWidth = Math.max(1, bounds.width);
            cssHeight = Math.max(1, bounds.height);
            pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
            canvas.width = Math.round(cssWidth * pixelRatio);
            canvas.height = Math.round(cssHeight * pixelRatio);
            if (started) {
              paint(progress);
            }
          };

          const drawBloom = (bloom, value) => {
            const local = Math.max(0, Math.min(1, (value - bloom.delay) / (1 - bloom.delay)));

            if (!local) {
              return;
            }

            const spread = .14 + .86 * easeOut(local);
            const diameter = bloom.size * spread;
            const alpha = bloom.opacity * (.18 + .82 * easeOut(local));
            const tint = tintPool[bloom.colorIndex];
            const drawLayer = (scale, opacity, rotation) => {
              const size = diameter * scale;
              context.save();
              context.globalAlpha = alpha * opacity;
              context.translate(bloom.x * cssWidth, bloom.y * cssHeight);
              context.rotate(bloom.rotation + rotation);
              context.drawImage(tint, -size / 2, -size / 2, size, size);
              context.restore();
            };

            drawLayer(1.18, .26, -.24);
            drawLayer(1, .92, 0);
            drawLayer(.62, .34, .31);
          };

          const paint = (value) => {
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            blooms.forEach((bloom) => drawBloom(bloom, value));
          };

          const animate = (timestamp) => {
            if (!startTime) {
              startTime = timestamp;
            }

            const next = Math.min(1, (timestamp - startTime) / 1900);
            if (timestamp - lastPaint >= 42 || next === 1) {
              progress = next;
              lastPaint = timestamp;
              paint(progress);
            }

            if (next < 1) {
              window.requestAnimationFrame(animate);
            }
          };

          const start = () => {
            if (started || !inView || document.hidden) {
              return;
            }

            started = true;
            window.requestAnimationFrame(animate);
          };

          resize();
          window.addEventListener("resize", resize, { passive: true });
          document.addEventListener("visibilitychange", start);

          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
              inView = entries.some((entry) => entry.isIntersecting);
              if (inView) {
                start();
                observer.disconnect();
              }
            }, { threshold: .12 });
            observer.observe(canvas);
          } else {
            inView = true;
            start();
          }
        });
      };

      if (mask.complete && mask.naturalWidth) {
        initialize();
      } else {
        mask.addEventListener("load", initialize, { once: true });
      }
      mask.src = maskSource;
    }
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
