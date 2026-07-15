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

  const openingWash = document.querySelector("[data-opening-wash]");

  if (openingWash) {
    const finishOpening = (immediate = false) => {
      if (openingWash.dataset.finished === "true") return;

      openingWash.dataset.finished = "true";
      document.body.classList.remove("opening-pending");

      if (immediate) {
        openingWash.hidden = true;
        document.body.classList.add("opening-complete");
        return;
      }

      document.body.classList.add("opening-reveal");
      openingWash.classList.add("is-revealing");

      window.setTimeout(() => {
        openingWash.hidden = true;
        document.body.classList.remove("opening-reveal");
        document.body.classList.add("opening-complete");
      }, 960);
    };

    if (reduce || saveData) {
      finishOpening(true);
    } else {
      const canvas = openingWash.querySelector("[data-opening-wash-canvas]");
      const maskSource = openingWash.dataset.maskSrc;

      if (!canvas || !maskSource) {
        finishOpening(true);
      } else {
        const mask = new Image();
        const palette = [
          "#123d48", "#1d6670", "#478d85", "#83b39b",
          "#dce4ad", "#e4c666", "#ce8c35", "#a95435",
          "#7d3030", "#873d63", "#645592", "#7eacd0",
          "#e6a69a", "#d67186", "#afa0d2", "#d7e6d4"
        ];
        const openingLayout = [
          [.04, .10, 470, 0, .02], [.16, .62, 520, 5, .10], [.29, .20, 430, 9, .18],
          [.42, .78, 560, 12, .05], [.53, .10, 450, 3, .22], [.66, .50, 540, 7, .13],
          [.79, .16, 470, 10, .27], [.93, .68, 510, 14, .07], [.10, .91, 440, 1, .25],
          [.31, .47, 380, 6, .33], [.57, .87, 490, 11, .16], [.88, .40, 410, 4, .30]
        ];
        const tintPool = [];
        let width = 0;
        let height = 0;
        let scale = 1;
        let lastPaint = 0;
        let startTime = 0;
        let lastProgress = 0;

        const easeOut = (value) => 1 - Math.pow(1 - value, 3);

        const makeTints = () => {
          const tintSize = 340;
          palette.forEach((color) => {
            const tint = document.createElement("canvas");
            const tintContext = tint.getContext("2d");
            tint.width = tintSize;
            tint.height = tintSize;
            tintContext.drawImage(mask, 0, 0, tintSize, tintSize);
            tintContext.globalCompositeOperation = "source-in";
            tintContext.fillStyle = color;
            tintContext.fillRect(0, 0, tintSize, tintSize);
            tintContext.globalCompositeOperation = "source-over";
            tintPool.push(tint);
          });
        };

        const paint = (progress) => {
          const context = canvas.getContext("2d");
          context.clearRect(0, 0, width, height);

          openingLayout.forEach((bloom, index) => {
            const local = Math.max(0, Math.min(1, (progress - bloom[4]) / .58));
            if (local <= 0) return;

            const eased = easeOut(local);
            const radius = bloom[2] * scale * (.20 + .84 * eased);
            const alpha = (.16 + .08 * (bloom[3] % 3)) * (.18 + .82 * eased);
            const tint = tintPool[index % tintPool.length];

            context.globalAlpha = alpha;
            context.drawImage(tint, width * bloom[0] - radius, height * bloom[1] - radius, radius * 2, radius * 2);
          });

          context.globalAlpha = 1;
        };

        const resize = () => {
          const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.15);
          width = Math.max(1, Math.round(window.innerWidth * pixelRatio));
          height = Math.max(1, Math.round(window.innerHeight * pixelRatio));
          canvas.width = width;
          canvas.height = height;
          scale = Math.min(1.1, Math.max(.72, width / 1240));
          if (tintPool.length) paint(lastProgress);
        };

        const onResize = () => resize();

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min(1, (timestamp - startTime) / 1700);
          lastProgress = progress;

          if (timestamp - lastPaint >= 50 || progress === 1) {
            paint(progress);
            lastPaint = timestamp;
          }

          if (progress >= .72) finishOpening();

          if (progress < 1) {
            window.requestAnimationFrame(animate);
          } else {
            window.removeEventListener("resize", onResize);
          }
        };

        const initializeOpening = () => {
          makeTints();
          resize();
          window.addEventListener("resize", onResize, { passive: true });
          window.requestAnimationFrame(animate);
        };

        mask.addEventListener("load", initializeOpening, { once: true });
        mask.addEventListener("error", () => finishOpening(), { once: true });
        mask.src = maskSource;
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
    const bloomLayouts = {
      hero: [
        [.05, .12], [.16, .53], [.28, .86], [.37, .24], [.48, .66], [.59, .08],
        [.67, .45], [.78, .82], [.9, .23], [.97, .62], [.06, .88], [.25, .38],
        [.42, .96], [.61, .29], [.82, .57], [.95, .94], [.12, .3], [.5, .4]
      ],
      archive: [
        [.03, .07], [.14, .22], [.27, .09], [.4, .3], [.55, .08], [.68, .25],
        [.82, .08], [.96, .35], [.06, .55], [.18, .72], [.32, .52], [.45, .83],
        [.58, .59], [.71, .76], [.86, .53], [.98, .84], [.08, .94], [.24, .39],
        [.37, .95], [.51, .43], [.64, .96], [.78, .36], [.91, .7], [.02, .82],
        [.17, .06], [.34, .72], [.48, .17], [.61, .7], [.74, .05], [.9, .94]
      ]
    };

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
          const layout = hero ? bloomLayouts.hero : bloomLayouts.archive;
          const blooms = layout.map(([x, y], index) => {
            const seedIndex = index + canvasIndex * 17;
            return {
              x: Math.min(.98, Math.max(.02, x + (seeded(seedIndex, 1) - .5) * (hero ? .055 : .045))),
              y: Math.min(.98, Math.max(.02, y + (seeded(seedIndex, 2) - .5) * (hero ? .055 : .045))),
              size: (hero ? 300 : 220) + seeded(seedIndex, 3) * (hero ? 240 : 180),
              rotation: (seeded(seedIndex, 4) - .5) * Math.PI,
              delay: seeded(seedIndex, 5) * .28,
              colorIndex: (index * 7 + canvasIndex * 5) % tintPool.length,
              opacity: (hero ? .17 : .14) + seeded(seedIndex, 6) * (hero ? .11 : .09)
            };
          });

          let cssWidth = 1;
          let cssHeight = 1;
          let pixelRatio = 1;
          let canvasScale = 1;
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
            canvasScale = Math.min(1.08, Math.max(.68, cssWidth / 1180));
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
            const diameter = bloom.size * canvasScale * spread;
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
