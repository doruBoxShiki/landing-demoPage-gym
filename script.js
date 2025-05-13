document.addEventListener("DOMContentLoaded", function () {
  // フォームバリデーション
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email) {
      alert("お名前とメールアドレスは必須です。");
      e.preventDefault();
      return;
    }

    if (!confirm("この内容で送信してよろしいですか？")) {
      e.preventDefault();
    }
  });

  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // セクションのフェードイン
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-section");
    observer.observe(section);
  });

  // FAQ開閉アニメ
  document.querySelectorAll(".qa-item h3").forEach(header => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("open");
    });
  });
});