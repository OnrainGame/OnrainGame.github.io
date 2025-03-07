// random-categories.js
const categories = [
  { name: "アクションゲーム 💥", link: "/category/action.html" },
  { name: "アドベンチャーゲーム 🏞️", link: "/category/adventure.html" },
  { name: "すべてのゲーム 🎮", link: "/category/all.html" },
  { name: "車ゲーム 🚗", link: "/category/car.html" },
  { name: "クリックゲーム 🖱️", link: "/category/clicker.html" },
  { name: "ファイトゲーム 🥊", link: "/category/fighting.html" },
  { name: "ハロウィンゲーム 🎃", link: "/category/halloween.html" },
  { name: "ioゲーム 🌐", link: "/category/io.html" },
  { name: "キッズゲーム 🧸", link: "/category/kids.html" },
  { name: "マルチプレイヤーゲーム 🕹️", link: "/category/multiplayer.html" },
  { name: "新しいゲーム 🎮", link: "/category/new.html" },
  { name: "パークールゲーム 🏃‍♂️", link: "/category/parkour.html" },
  { name: "プラットフォームゲーム 🎮", link: "/category/platform.html" },
  { name: "パズルゲーム 🧩", link: "/category/puzzle.html" },
  { name: "レーシングゲーム 🏎️", link: "/category/racing.html" },
  { name: "ランニングゲーム 🏃", link: "/category/running.html" },
  { name: "学校ゲーム 🏫", link: "/category/school.html" },
  { name: "シューティングゲーム 🔫", link: "/category/shooting.html" },
  { name: "スキルゲーム 🎯", link: "/category/skill.html" },
  { name: "サッカーゲーム ⚽", link: "/category/soccer.html" },
  { name: "スネークゲーム 🐍", link: "/category/snake.html" },
  { name: "スポーツゲーム 🏅", link: "/category/sport.html" },
  { name: "スティックマンゲーム 👤", link: "/category/stickman.html" },
  { name: "ストラテジーゲーム ♟️", link: "/category/strategy.html" },
  { name: "2人用ゲーム 👯‍♂️", link: "/category/two-player.html" },
  { name: "トレンドゲーム 🔥", link: "/category/trending.html" },
];

// Rastgele iki kategori seç
const randomCategories = [];
while (randomCategories.length < 2) {
  const randomIndex = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomIndex];
  if (!randomCategories.includes(randomCategory)) {
    randomCategories.push(randomCategory);
  }
}

// Seçilen kategorileri HTML içine ekle
document.addEventListener("DOMContentLoaded", function () {
  const categoryBtn = document.getElementById("category-btn");

  if (categoryBtn) {
    randomCategories.forEach((category) => {
      const categoryLink = document.createElement("a");
      categoryLink.href = category.link;
      categoryLink.textContent = category.name;
      categoryBtn.appendChild(categoryLink);
    });
  } else {
    console.error("category-btn element not found.");
  }
});
