(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(connection && connection.saveData);

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  const closeNavigation = () => {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "打开菜单");
    }
  };

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        closeNavigation();
        navToggle.focus();
      }
    });
  }

  const backdropVideo = document.querySelector("[data-backdrop-video]");
  const backdropToggle = document.querySelector("[data-backdrop-toggle]");

  if (backdropVideo) {
    let userPaused = reduce || saveData;
    let resumeAfterVisibility = false;

    const updateBackdropState = () => {
      backdropVideo.classList.toggle("is-ready", backdropVideo.readyState >= 2);
      if (backdropToggle) {
        backdropToggle.classList.toggle("is-paused", backdropVideo.paused);
        backdropToggle.setAttribute("aria-label", backdropVideo.paused ? "播放背景视频" : "暂停背景视频");
      }
    };

    const playBackdrop = () => {
      const playback = backdropVideo.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(updateBackdropState);
      }
    };

    if (backdropVideo.readyState >= 2) {
      updateBackdropState();
    } else {
      backdropVideo.addEventListener("loadeddata", updateBackdropState, { once: true });
    }

    backdropVideo.addEventListener("play", updateBackdropState);
    backdropVideo.addEventListener("pause", updateBackdropState);

    if (userPaused) {
      backdropVideo.autoplay = false;
      backdropVideo.pause();
      updateBackdropState();
    } else {
      playBackdrop();
    }

    if (backdropToggle) {
      backdropToggle.addEventListener("click", () => {
        if (backdropVideo.paused) {
          userPaused = false;
          playBackdrop();
        } else {
          userPaused = true;
          backdropVideo.pause();
        }
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        resumeAfterVisibility = !backdropVideo.paused;
        backdropVideo.pause();
      } else if (resumeAfterVisibility && !userPaused) {
        resumeAfterVisibility = false;
        playBackdrop();
      }
    });
  }

  const watercolorField = document.querySelector("[data-watercolor-field]");

  if (watercolorField) {
    const maskSource = watercolorField.dataset.maskSrc;
    const context = watercolorField.getContext("2d", { alpha: true });

    if (maskSource && context) {
      const mask = new Image();
      mask.decoding = "async";
      const palette = [
        "#0f4e60", "#19788a", "#2aa0a0", "#3365ae", "#5f4d9d", "#975faa",
        "#c15c92", "#d76278", "#e47650", "#ec9d3b", "#efc74c", "#afa746",
        "#779e57", "#3d8d68", "#1c8b82", "#1a6275", "#064562", "#3a2c52",
        "#803b57", "#ad4e43", "#c68238", "#d7cf62", "#91bda0", "#91c4d0"
      ];
      const layout = [
        [.02, .12, 360, .00, -.18], [.10, .72, 430, .08, .22], [.18, .28, 330, .14, -.36],
        [.27, .88, 390, .04, .30], [.35, .08, 350, .18, -.12], [.42, .56, 430, .10, .40],
        [.50, .92, 380, .22, -.32], [.56, .20, 400, .06, .16], [.63, .67, 470, .16, -.22],
        [.70, .04, 340, .12, .34], [.77, .42, 420, .02, -.28], [.84, .86, 380, .20, .12],
        [.92, .18, 390, .09, -.38], [.98, .63, 440, .15, .26], [.05, .94, 320, .24, -.10],
        [.15, .48, 360, .05, .38], [.25, .04, 300, .17, -.24], [.33, .70, 370, .11, .18],
        [.46, .34, 390, .01, -.34], [.58, .82, 430, .19, .28], [.68, .28, 350, .07, -.14],
        [.79, .66, 410, .13, .36], [.89, .98, 340, .23, -.30], [.96, .38, 370, .03, .20]
      ];
      const tints = [];
      let cssWidth = 1;
      let cssHeight = 1;
      let pixelRatio = 1;
      let currentProgress = 0;
      let complete = false;
      let lastPaint = 0;
      let startTime = 0;

      const easeOut = (value) => 1 - Math.pow(1 - value, 3);

      const makeTints = () => {
        const size = 280;
        palette.forEach((color) => {
          const tint = document.createElement("canvas");
          const tintContext = tint.getContext("2d", { alpha: true });
          tint.width = size;
          tint.height = size;
          tintContext.drawImage(mask, 0, 0, size, size);
          tintContext.globalCompositeOperation = "source-in";
          tintContext.fillStyle = color;
          tintContext.fillRect(0, 0, size, size);
          tintContext.globalCompositeOperation = "source-over";
          tints.push(tint);
        });
      };

      const paint = (progress) => {
        currentProgress = progress;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, watercolorField.width, watercolorField.height);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        layout.forEach((bloom, index) => {
          const local = Math.max(0, Math.min(1, (progress - bloom[3]) / .62));
          if (!local) return;

          const eased = easeOut(local);
          const diameter = bloom[2] * (.2 + 1.02 * eased) * Math.min(1.18, Math.max(.78, cssWidth / 1180));
          const baseAlpha = (.1 + (index % 4) * .023) * (.26 + .74 * eased);
          const tint = tints[index];

          const drawLayer = (scale, opacity, rotation) => {
            const size = diameter * scale;
            context.save();
            context.globalAlpha = baseAlpha * opacity;
            context.translate(bloom[0] * cssWidth, bloom[1] * cssHeight);
            context.rotate(bloom[4] + rotation);
            context.drawImage(tint, -size / 2, -size / 2, size, size);
            context.restore();
          };

          drawLayer(1.26, .36, -.16);
          drawLayer(1, 1, 0);
          drawLayer(.62, .48, .21);
        });

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalAlpha = 1;
      };

      const resize = () => {
        const bounds = watercolorField.getBoundingClientRect();
        cssWidth = Math.max(1, bounds.width);
        cssHeight = Math.max(1, bounds.height);
        pixelRatio = Math.min(window.devicePixelRatio || 1, 1.15);
        watercolorField.width = Math.round(cssWidth * pixelRatio);
        watercolorField.height = Math.round(cssHeight * pixelRatio);
        if (tints.length) paint(complete ? 1 : currentProgress);
      };

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / 1750);

        if (timestamp - lastPaint >= 55 || progress === 1) {
          paint(progress);
          lastPaint = timestamp;
        }

        if (progress < 1) {
          window.requestAnimationFrame(animate);
        } else {
          complete = true;
        }
      };

      const initialize = () => {
        makeTints();
        resize();
        if (reduce || saveData) {
          complete = true;
          paint(1);
        } else {
          window.requestAnimationFrame(animate);
        }
        window.addEventListener("resize", resize, { passive: true });
      };

      mask.addEventListener("load", initialize, { once: true });
      mask.src = maskSource;
    }
  }

  const filters = document.querySelector("[data-record-filters]");
  const archiveGrid = document.querySelector("[data-archive-grid]");
  const filterStatus = document.querySelector("[data-filter-status]");

  if (filters && archiveGrid) {
    const buttons = Array.from(filters.querySelectorAll("[data-record-filter]"));
    const records = Array.from(archiveGrid.querySelectorAll("[data-archive-piece]"));
    const labels = { all: "全部", posts: "文章", photos: "照片", videos: "视频" };

    const applyFilter = (filter) => {
      let visible = 0;
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.recordFilter === filter));
      });
      records.forEach((record) => {
        const show = filter === "all" || record.dataset.recordKind === filter;
        record.hidden = !show;
        if (show) visible += 1;
      });
      archiveGrid.dataset.activeFilter = filter;
      if (filterStatus) {
        filterStatus.textContent = labels[filter] + "，显示 " + visible + " 条记录。";
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.recordFilter));
    });

    applyFilter("all");
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!reduce && finePointer) {
    document.querySelectorAll("[data-preview-video]").forEach((video) => {
      const link = video.closest(".piece-link");
      if (!link) return;

      const play = () => {
        const playback = video.play();
        if (playback && typeof playback.catch === "function") playback.catch(() => {});
      };
      const stop = () => {
        video.pause();
        video.currentTime = 0;
      };

      link.addEventListener("pointerenter", play);
      link.addEventListener("pointerleave", stop);
      link.addEventListener("focusin", play);
      link.addEventListener("focusout", stop);
    });
  }

  const searchRoot = document.querySelector("[data-search]");
  if (!searchRoot) return;

  const input = searchRoot.querySelector("[data-search-input]");
  const status = searchRoot.querySelector("[data-search-status]");
  const results = searchRoot.querySelector("[data-search-results]");
  const indexUrl = searchRoot.dataset.indexUrl;
  let archiveIndex = null;

  if (!input || !status || !results || !indexUrl) return;

  const sectionLabels = { posts: "文章", photos: "照片", videos: "视频" };

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

  const loadIndex = async () => {
    if (archiveIndex) return archiveIndex;

    try {
      const response = await fetch(indexUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Unable to load index");
      archiveIndex = await response.json();
    } catch {
      archiveIndex = [];
      status.textContent = "搜索索引暂时无法加载。";
    }
    return archiveIndex;
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
