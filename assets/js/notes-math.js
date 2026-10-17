(() => {
  const content = document.querySelector('.story--notes .story-content');
  if (!content || !window.renderMathInElement) return;
  window.renderMathInElement(content, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '\\[', right: '\\]', display: true},
      {left: '\\(', right: '\\)', display: false},
      {left: '$', right: '$', display: false}
    ],
    throwOnError: false,
    trust: false,
    strict: 'ignore'
  });
  content.querySelectorAll('blockquote').forEach(quote => {
    const paragraph = quote.querySelector('p');
    if (!paragraph) return;
    const text = paragraph.firstChild;
    if (text?.nodeType === Node.TEXT_NODE) text.textContent = text.textContent.replace(/^\[!(?:tip|note|info|warning|example|important|abstract|question|success)\]\s*/i, '');
  });
})();
