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
