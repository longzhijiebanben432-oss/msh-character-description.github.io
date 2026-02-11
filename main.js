document.getElementById("calc").addEventListener("click", function () {
  const select = document.getElementById("chara");
  const img = document.getElementById("chara-img");
  const value = select.value;

  // フェードアウト
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = `images/${value}.png`;
    img.classList.remove("fade-out");
  }, 400);
});

// ページ読み込み時のローディング演出
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1500); // 2秒後にフェードアウト
});
