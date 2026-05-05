
<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Permanent+Marker&display=swap');

.mg-wrap { font-family: 'Permanent Marker', cursive; color: var(--color-text-primary); }
.mg-wrap * { box-sizing: border-box; }

.mg-hero {
  position: relative;
  padding: 20px 0 14px;
  border-bottom: 2px solid var(--color-text-primary);
  margin-bottom: 20px;
  overflow: hidden;
}
.mg-hero-title {
  font-family: 'Bangers', cursive;
  font-size: 32px;
  letter-spacing: 3px;
  line-height: 1.1;
  color: var(--color-text-primary);
}
.mg-hero-sub {
  font-family: 'Permanent Marker', cursive;
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 4px;
  letter-spacing: 1px;
}
.sfx {
  position: absolute;
  right: 0; top: 50%;
  transform: translateY(-50%);
  font-family: 'Bangers', cursive;
  font-size: 52px;
  letter-spacing: 4px;
  color: var(--color-text-primary);
  opacity: 0.06;
  line-height: 1;
  pointer-events: none;
}

.mg-section { margin-bottom: 24px; }
.mg-section-title {
  font-family: 'Bangers', cursive;
  font-size: 18px;
  letter-spacing: 2px;
  color: var(--color-text-primary);
  border-bottom: 1.5px solid var(--color-border-secondary);
  padding-bottom: 4px;
  margin-bottom: 12px;
}

.mg-social-row { display: flex; gap: 10px; flex-wrap: wrap; }
.mg-social-btn {
  font-family: 'Permanent Marker', cursive;
  font-size: 13px;
  padding: 6px 16px;
  border: 2px solid var(--color-text-primary);
  border-radius: 0;
  color: var(--color-text-primary);
  background: var(--color-background-primary);
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: background 0.12s, color 0.12s;
}
.mg-social-btn::after {
  content: '';
  position: absolute;
  bottom: -4px; right: -4px;
  width: 100%; height: 100%;
  border: 2px solid var(--color-text-primary);
  z-index: -1;
}
.mg-social-btn:hover { background: var(--color-text-primary); color: var(--color-background-primary); }

.mg-badges { display: flex; gap: 8px; flex-wrap: wrap; }
.mg-badge {
  font-family: 'Bangers', cursive;
  font-size: 15px;
  letter-spacing: 1.5px;
  padding: 5px 14px;
  border: 2px solid var(--color-text-primary);
  color: var(--color-text-primary);
  background: var(--color-background-secondary);
  position: relative;
}
.mg-badge::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, currentColor 0.6px, transparent 0.6px);
  background-size: 5px 5px;
  opacity: 0.08;
}

.mg-stats-img {
  border: 2px solid var(--color-border-secondary);
  border-radius: 4px;
  width: 100%;
  max-width: 420px;
  display: block;
}
.mg-stats-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-start; }
.mg-stats-row img {
  border: 2px solid var(--color-border-secondary);
  border-radius: 4px;
  flex: 1;
  min-width: 180px;
  max-width: 100%;
}

.mg-activity-img {
  width: 100%;
  border: 2px solid var(--color-border-secondary);
  border-radius: 4px;
}

.mg-speech {
  display: inline-block;
  border: 2px solid var(--color-text-primary);
  border-radius: 14px 14px 14px 2px;
  padding: 6px 16px;
  font-family: 'Permanent Marker', cursive;
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
  background: var(--color-background-secondary);
}

.mg-divider {
  border: none;
  border-top: 1.5px solid var(--color-border-tertiary);
  margin: 20px 0;
}
</style>

<div class="mg-wrap">
  <div class="mg-hero">
    <div class="sfx">SCROLL!!</div>
    <div class="mg-hero-title">just scrolling<br>& take my repo</div>
    <div class="mg-hero-sub">// Empy-ai09</div>
  </div>

  <div class="mg-speech">いらっしゃいませ！ welcome to my github!</div>

  <div class="mg-section">
    <div class="mg-section-title">SOCIALS</div>
    <div class="mg-social-row">
      <a class="mg-social-btn" href="https://discord.com/users/zwanwrld" target="_blank">Discord — zwanwrld</a>
      <a class="mg-social-btn" href="https://instagram.com/stfu.kinna" target="_blank">Instagram — stfu.kinna</a>
    </div>
  </div>

  <hr class="mg-divider">

  <div class="mg-section">
    <div class="mg-section-title">TECH STACK</div>
    <div class="mg-badges">
      <span class="mg-badge">HTML5</span>
      <span class="mg-badge">JavaScript</span>
      <span class="mg-badge">PHP</span>
      <span class="mg-badge">CSS3</span>
    </div>
  </div>

  <hr class="mg-divider">

  <div class="mg-section">
    <div class="mg-section-title">GITHUB STATS</div>
    <div class="mg-stats-row">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Empy-ai09&theme=github" alt="most commit language" onerror="this.style.display='none'">
      <img src="https://github-readme-stats.vercel.app/api?username=Empy-ai09&show_icons=true&theme=default&hide_border=false" alt="github stats" onerror="this.style.display='none'">
    </div>
  </div>

  <hr class="mg-divider">

  <div class="mg-section">
    <div class="mg-section-title">ACTIVITY GRAPH</div>
    <img class="mg-activity-img" src="https://github-readme-activity-graph.vercel.app/graph?username=Empy-ai09&theme=minimal&hide_border=false" alt="activity graph" onerror="this.style.display='none'">
  </div>
</div>
