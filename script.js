const container = document.getElementById("fallingDonuts");

// ドーナツ画像を複数用意（質感を変化させたいとき）
const donutImages = [
  "images/donut_chocolate.png",
  "images/donut_strawberry_light.png",
  "images/donut_strawberry.png"
];

function createDonut() {
  const donut = document.createElement("img");
  donut.classList.add("donut");

  // ランダム画像
  donut.src = donutImages[Math.floor(Math.random() * donutImages.length)];

  // ランダム X 座標
  donut.style.left = Math.random() * 100 + "vw";

  // サイズランダム
  const size = 60 + Math.random() * 50;
  donut.style.width = size + "px";

  // 落下時間ランダム
  const duration = 5 + Math.random() * 6;
  donut.style.animationDuration = duration + "s";

  container.appendChild(donut);

  // アニメーションが終わったら DOM から削除
  setTimeout(() => {
    donut.remove();
  }, duration * 1000);
}

// 0.6秒ごとにドーナツ生成
setInterval(createDonut, 600);

// ========= Scroll Reveal Animation =========

// 対象を取得
const revealItems = document.querySelectorAll(".function_item");

// スクロール監視
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

// 監視スタート
revealItems.forEach(item => observer.observe(item));
