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
        [-.04, -.01, 285, .00, -.18], [.07, .02, 275, .04, .22], [.18, -.03, 290, .07, -.36],
        [.29, .00, 275, .10, .30], [.40, -.04, 285, .13, -.12], [.51, -.01, 270, .16, .40],
        [.60, .03, 285, .12, -.32], [.70, .08, 300, .15, .16], [.80, .02, 285, .18, -.22],
        [.90, .07, 300, .21, .34], [1.00, .01, 285, .24, -.28], [1.08, .08, 290, .27, .12],
        [.93, .25, 295, .26, -.38], [.96, .39, 300, .29, .26], [.92, .53, 305, .32, -.10],
        [.96, .67, 295, .35, .38], [.91, .81, 300, .38, -.24], [.94, .95, 300, .41, .18],
        [.96, .98, 270, .32, -.34], [.79, 1.02, 275, .35, .28], [.62, 1.06, 260, .38, -.14],
        [.45, 1.08, 270, .41, .36], [.28, 1.08, 260, .44, -.30], [.11, 1.08, 270, .47, .20]
      ];
      const tints = [];
      let cssWidth = 1;
      let cssHeight = 1;
      let pixelRatio = 1;
      let currentProgress = 0;
      let complete = false;
      let lastPaint = 0;
      let startTime = 0;

      const smoothstep = (value) => value * value * (3 - 2 * value);

      const makeTints = () => {
        const size = 280;
        palette.forEach((color) => {
          const tint = document.createElement("canvas");
          const tintContext = tint.getContext("2d", { alpha: true });
          tint.width = size;
          tint.height = size;
          tintContext.drawImage(mask, 0, 0, size, size);
          const pixels = tintContext.getImageData(0, 0, size, size);
          const red = parseInt(color.slice(1, 3), 16);
          const green = parseInt(color.slice(3, 5), 16);
          const blue = parseInt(color.slice(5, 7), 16);
          for (let pixel = 0; pixel < pixels.data.length; pixel += 4) {
            if (!pixels.data[pixel + 3]) continue;
            const lightness = (pixels.data[pixel] + pixels.data[pixel + 1] + pixels.data[pixel + 2]) / 765;
            pixels.data[pixel] = red;
            pixels.data[pixel + 1] = green;
            pixels.data[pixel + 2] = blue;
            pixels.data[pixel + 3] *= .28 + .72 * (1 - lightness);
          }
          tintContext.putImageData(pixels, 0, 0);
          tints.push(tint);
        });
      };

      const traceWetEdge = (x, y, radius, index, phase) => {
        context.beginPath();
        for (let point = 0; point <= 96; point += 1) {
          const angle = point * Math.PI / 48;
          const grain = 1
            + .095 * Math.sin(angle * 5 + index * 1.37 + phase)
            + .052 * Math.sin(angle * 11 - index * .83 - phase * .6)
            + .026 * Math.sin(angle * 23 + index * 2.11)
            + .014 * Math.sin(angle * 47 - index * 1.73 + phase);
          const px = x + Math.cos(angle) * radius * grain;
          const py = y + Math.sin(angle) * radius * grain;
          if (point === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        context.closePath();
      };

      const paint = (progress) => {
        currentProgress = progress;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, watercolorField.width, watercolorField.height);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        layout.forEach((bloom, index) => {
          const local = Math.max(0, Math.min(1, (progress - bloom[3]) / .5));
          if (!local) return;

          const spread = smoothstep(local);
          const diameter = bloom[2] * 1.62 * Math.min(1.18, Math.max(.68, cssWidth / 1180));
          const radius = diameter * (.012 + .95 * spread);
          let centerX = bloom[0] * cssWidth;
          let centerY = bloom[1] * cssHeight;
          if (cssWidth < 700) {
            if (index < 12) {
              centerX = (-.08 + index * .105) * cssWidth;
              centerY = (index % 3 === 0 ? .09 : -.01) * cssHeight;
            } else if (index < 18) {
              centerX = cssWidth * 1.04;
              centerY = (.20 + (index - 12) * .15) * cssHeight;
            } else {
              centerX = (1.02 - (index - 18) * .2) * cssWidth;
              centerY = (.98 + (index % 2) * .04) * cssHeight;
            }
          }
          const tint = tints[index];

          const drawWash = (edgeScale, opacity, phase) => {
            context.save();
            traceWetEdge(centerX, centerY, radius * edgeScale, index, phase);
            context.clip();
            context.globalAlpha = opacity;
            context.translate(centerX, centerY);
            context.rotate(bloom[4]);
            context.drawImage(tint, -diameter / 2, -diameter / 2, diameter, diameter);
            context.restore();
          };

          context.globalCompositeOperation = "multiply";
          const strength = index >= 12 && index < 18 ? .8 : 1;
          drawWash(1.1, .16 * strength, .5);
          drawWash(.88, .25 * strength, 0);
          drawWash(.64, .12 * strength, -.3);
          context.globalCompositeOperation = "source-over";
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
        const progress = Math.min(1, (timestamp - startTime) / 2800);

        if (timestamp - lastPaint >= 42 || progress === 1) {
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
