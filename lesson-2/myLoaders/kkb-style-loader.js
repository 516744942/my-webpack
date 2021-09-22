module.exports = function (source) {
  const result = `const e = document.createElement('style');
      e.innerHTML =  ${source};
      document.head.appendChild(e)
    `;
    return result
};