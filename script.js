// body
const body = document.body;
// ハンバーガーボタン
const hamburger = document.querySelector("#hamburger");
// メニュー
const headerMenu = document.querySelector(".navigation");

// ハンバーガー（三本線のマーク）がクリックされたら
hamburger.addEventListener("click", () => {
  // ヘッダーメニュー・ハンバーガーにactiveクラスをつける
  headerMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
  // 開かれたメニューの後ろをスクロールさせない
  body.classList.toggle("no-scroll");
  // aria-expandedの値を切り替える
  const isExpanded =
    hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !isExpanded);
});