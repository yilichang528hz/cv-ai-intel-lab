
const state = { lang: localStorage.getItem('cv-lang') || 'zh', themeIndex: Number(localStorage.getItem('cv-theme') || 0) };
const langs = ['zh','en','ja'];
const themes = ['theme-a','theme-b','theme-c','theme-d'];

function i18nValue(obj){ return (obj && obj[state.lang]) || obj?.zh || ''; }
function qs(name){ return new URLSearchParams(location.search).get(name); }

function setThemeLang(){
  document.body.dataset.theme = themes[state.themeIndex];
  document.getElementById('langBtn').textContent = state.lang.toUpperCase();
  document.getElementById('themeBtn').textContent = String.fromCharCode(65 + state.themeIndex);
  localStorage.setItem('cv-lang', state.lang);
  localStorage.setItem('cv-theme', String(state.themeIndex));
}

function t(key){
  const dict = {
    zh:{inputs:'輸入資料', outputs:'輸出成果', cases:'情境式商品企劃案例', all:'全部業務模組'},
    en:{inputs:'Inputs', outputs:'Outputs', cases:'Scenario Product Planning Cases', all:'All Business Modules'},
    ja:{inputs:'入力情報', outputs:'成果物', cases:'シナリオ型商品企画事例', all:'全業務モジュール'}
  };
  return dict[state.lang][key];
}

function render(){
  setThemeLang();
  const id = qs('id') || SITE_DATA.businessModules[0].id;
  const module = SITE_DATA.businessModules.find(m => m.id === id) || SITE_DATA.businessModules[0];

  document.getElementById('detailTitle').textContent = i18nValue(module.title);
  document.getElementById('detailGoal').textContent = i18nValue(module.goal);
  document.getElementById('inputsTitle').textContent = t('inputs');
  document.getElementById('outputsTitle').textContent = t('outputs');
  document.getElementById('casesTitle').textContent = t('cases');
  document.getElementById('allModulesTitle').textContent = t('all');

  document.getElementById('detailInputs').innerHTML = module.inputs.map(x => `<span>${x}</span>`).join('');
  document.getElementById('detailOutputs').innerHTML = module.outputs[state.lang].map(x => `<li>${x}</li>`).join('');
  document.getElementById('detailKpi').textContent = i18nValue(module.kpi);

  document.getElementById('relatedCases').innerHTML = SITE_DATA.caseStudies.map(c => `
    <article class="case-card">
      <h3>${i18nValue(c.title)}</h3>
      <p><strong>Scenario</strong> ${i18nValue(c.scenario)}</p>
      <p><strong>Insight</strong> ${i18nValue(c.insight)}</p>
      <p><strong>Product</strong> ${i18nValue(c.product)}</p>
      <p><strong>KPI</strong> ${i18nValue(c.kpi)}</p>
    </article>
  `).join('');

  document.getElementById('moduleList').innerHTML = SITE_DATA.businessModules.map(m => `
    <article class="source-card">
      <span class="badge">${m.id}</span>
      <h3>${i18nValue(m.title)}</h3>
      <p>${i18nValue(m.goal)}</p>
      <a href="module-detail.html?id=${m.id}">Open detail</a>
    </article>
  `).join('');
}

document.getElementById('langBtn').onclick = () => { state.lang = langs[(langs.indexOf(state.lang)+1)%langs.length]; render(); };
document.getElementById('themeBtn').onclick = () => { state.themeIndex = (state.themeIndex + 1) % themes.length; render(); };
document.getElementById('topBtn').onclick = () => scrollTo({top:0, behavior:'smooth'});
render();
