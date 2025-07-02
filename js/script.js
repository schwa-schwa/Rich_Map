const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const pageContent = document.getElementById('pageContent');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

function navigate(page) {
  let html = '';
  switch (page) {
    case 'home':
      html = `
        <div class="card">
          <h2>おすすめスポット</h2>
          <p>近くのスポットを探してスタンプを集めよう！</p>
          <a href="#" class="button" onclick="navigate('stamps')">スタンプ画面へ</a>
        </div>
        <div class="coupon-area" onclick="navigate('coupons')">🎁 今日のクーポンを見る</div>
      `;
      break;

    case 'coupons':
      html = `
        <div class="card">
          <h2>今日のクーポン</h2>
          <p>🍰 カフェ「Sora」10% OFF</p>
          <p>🍜 ラーメン「Takumi」無料トッピング</p>
          <a href="#" class="button" onclick="navigate('home')">戻る</a>
        </div>
      `;
      break;

    case 'stamps':
      html = `
        <div class="card">
          <h2>スタンプラリー</h2>
          <ul>
            <li>📍 観光案内所</li>
            <li>📍 展望スポット</li>
            <li>📍 カフェテリア</li>
          </ul>
          <a href="#" class="button" onclick="navigate('home')">戻る</a>
        </div>
      `;
      break;

    case 'feedback':
      html = `
        <div class="card">
          <h2>アンケート</h2>
          <p>このスポットの満足度は？</p>
          <button class="button">👍 良い</button>
          <button class="button">😐 普通</button>
          <button class="button">👎 よくない</button>
          <a href="#" class="button" onclick="navigate('home')">戻る</a>
        </div>
      `;
      break;

    default:
      html = '<p>ページが見つかりません。</p>';
  }

  pageContent.innerHTML = html;
  navMenu.classList.remove('active');
}
