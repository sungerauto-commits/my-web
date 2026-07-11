(function () {
  var library = null;
  var openButton = document.getElementById('open-library');
  var status = document.getElementById('upload-status');
  var result = document.getElementById('upload-result');
  var urlInput = document.getElementById('video-url');
  var copyButton = document.getElementById('copy-url');

  openButton.disabled = false;
  openButton.textContent = '打开视频库';

  function setStatus(message, success) {
    status.textContent = message;
    status.classList.toggle('is-success', Boolean(success));
  }

  function copyURL(url) {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return Promise.reject(new Error('Clipboard API unavailable'));
    }

    return navigator.clipboard.writeText(url);
  }

  function handleSelection(data) {
    var asset = data && data.assets && data.assets[0];

    if (!asset || asset.resource_type !== 'video' || !asset.secure_url) {
      setStatus('请选择一个视频文件。', false);
      return;
    }

    var url = asset.secure_url;

    urlInput.value = url;
    result.hidden = false;
    setStatus('上传完成，视频地址已回填到后台。', true);

    if (window.opener) {
      window.opener.postMessage({ type: 'sunger-video-selected', url: url }, window.location.origin);
    }

    copyURL(url).catch(function () {});
  }

  function getLibrary() {
    if (library) {
      return library;
    }

    if (!window.cloudinary || typeof window.cloudinary.createMediaLibrary !== 'function') {
      throw new Error('Cloudinary 视频库加载失败');
    }

    library = window.cloudinary.createMediaLibrary(
      {
        cloud_name: 'dgoqzxprh',
        api_key: '575487189727376',
        multiple: false,
        max_files: 1,
        insert_caption: '使用这个视频',
        folder: { path: '', resource_type: 'video' }
      },
      {
        insertHandler: handleSelection,
        showHandler: function () { setStatus('视频库已打开', false); },
        hideHandler: function () {
          if (!urlInput.value) {
            setStatus('准备就绪', false);
          }
        }
      }
    );

    return library;
  }

  openButton.addEventListener('click', function () {
    try {
      getLibrary().show({
        multiple: false,
        max_files: 1,
        folder: { path: '', resource_type: 'video' }
      });
    } catch (error) {
      setStatus(error.message || '视频库加载失败，请刷新后重试。', false);
    }
  });

  copyButton.addEventListener('click', function () {
    copyURL(urlInput.value).then(function () {
      setStatus('视频地址已复制。', true);
    }).catch(function () {
      urlInput.focus();
      urlInput.select();
      setStatus('请手动复制视频地址。', false);
    });
  });
})();
