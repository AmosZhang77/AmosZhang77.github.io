document.addEventListener("DOMContentLoaded", function () {
  // 获取 URL 中的锚点
  let hash = window.location.hash;
  console.log("hash", hash);
  // 如果存在锚点，则滚动到该位置
  if (hash) {
    let targetElement = document.querySelector(hash);
    console.log("targetElement", targetElement);
    // holy-grail-layout
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  }
});
// console.log('custom static')