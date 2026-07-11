(function () {
  var lastVideoInput = null;
  var button = document.createElement('button');

  button.type = 'button';
  button.className = 'sunger-video-tool';
  button.textContent = '上传视频';
  button.setAttribute('aria-label', '打开 Cloudinary 视频上传工具');

  function isTextControl(element) {
    return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
  }

  function controlLooksLikeVideoField(element) {
    if (!isTextControl(element)) {
      return false;
    }

    var labels = Array.from(element.labels || []).map(function (label) {
      return label.textContent || '';
    });
    var ariaLabel = element.getAttribute('aria-label') || '';
    var labelledByText = (element.getAttribute('aria-labelledby') || '')
      .split(/\s+/)
      .filter(Boolean)
      .map(function (id) {
        var label = document.getElementById(id);
        return label ? label.textContent || '' : '';
      })
      .join(' ');

    return element.name === 'video' ||
      /video/i.test(element.id || '') ||
      labels.some(function (label) { return label.includes('视频地址'); }) ||
      ariaLabel.includes('视频地址') ||
      labelledByText.includes('视频地址');
  }

  function findVideoInput() {
    if (lastVideoInput && document.contains(lastVideoInput)) {
      return lastVideoInput;
    }

    return Array.from(document.querySelectorAll('input, textarea')).find(controlLooksLikeVideoField) || null;
  }

  function setControlValue(control, value) {
    var prototype = control instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;
    var descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');

    if (descriptor && descriptor.set) {
      descriptor.set.call(control, value);
    } else {
      control.value = value;
    }

    control.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    control.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    control.focus();
  }

  function showToast(message) {
    var existing = document.querySelector('.sunger-admin-toast');
    var toast = existing || document.createElement('div');

    toast.className = 'sunger-admin-toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;

    if (!existing) {
      document.body.appendChild(toast);
    }

    requestAnimationFrame(function () { toast.classList.add('is-visible'); });
    window.setTimeout(function () { toast.classList.remove('is-visible'); }, 3200);
  }

  document.addEventListener('focusin', function (event) {
    if (controlLooksLikeVideoField(event.target)) {
      lastVideoInput = event.target;
    }
  });

  button.addEventListener('pointerdown', function () {
    if (controlLooksLikeVideoField(document.activeElement)) {
      lastVideoInput = document.activeElement;
    }
  });

  button.addEventListener('click', function () {
    var uploaderURL = new URL('video/', window.location.href);
    var popup = window.open(
      uploaderURL.href,
      'sunger-video-uploader',
      'popup=yes,width=1180,height=820,resizable=yes,scrollbars=yes'
    );

    if (!popup) {
      showToast('浏览器阻止了上传窗口，请允许此网站打开弹窗。');
    }
  });

  window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin || !event.data || event.data.type !== 'sunger-video-selected') {
      return;
    }

    var url = event.data.url;
    var control = findVideoInput();

    if (control) {
      setControlValue(control, url);
      showToast('视频地址已自动填入。');
      return;
    }

    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      showToast('上传完成，请从上传窗口复制视频地址。');
      return;
    }

    navigator.clipboard.writeText(url).then(function () {
      showToast('视频地址已复制，请粘贴到「视频地址」字段。');
    }).catch(function () {
      showToast('上传完成，请从上传窗口复制视频地址。');
    });
  });

  document.body.appendChild(button);
})();
