
const state = { lang: localStorage.getItem('cv-lang') || 'zh', themeIndex: Number(localStorage.getItem('cv-theme') || 0) };
const langs = ['zh','en','ja'];
const themes = ['theme-a','theme-b','theme-c','theme-d'];

const text = {
  zh:{
    title:'商用車 TCO 決策試算器',
    intro:'比較柴油、電動與氫能商用車的五年總持有成本。',
    years:'使用年限', km:'每年里程 km', dieselPrice:'柴油單價 / L', electricity:'電價 / kWh', hydrogen:'氫價 / kg', subsidy:'新能源補助',
    purchase:'購置', energy:'能源', maintenance:'維修', total:'總成本', assumptions:'試算邏輯',
    dieselLogic:'假設柴油車購置成本較低、油耗 7 km/L、維修成本較高。',
    evLogic:'假設電動車購置成本較高、電耗 0.8 kWh/km、維修成本較低，扣除補助。',
    h2Logic:'假設氫能車購置成本最高、氫耗 0.08 kg/km、維修成本中高，扣除補助。',
    noteTitle:'注意', note:'此為前端示範模型，實務應接入實際報價、殘值、保險、稅費、充電設備與路線資料。'
  },
  en:{
    title:'Commercial Vehicle TCO Simulator',
    intro:'Compare five-year total cost of ownership across diesel, battery-electric, and hydrogen vehicles.',
    years:'Years', km:'Annual km', dieselPrice:'Diesel price / L', electricity:'Electricity / kWh', hydrogen:'Hydrogen / kg', subsidy:'ZEV subsidy',
    purchase:'Purchase', energy:'Energy', maintenance:'Maintenance', total:'Total', assumptions:'Assumptions',
    dieselLogic:'Diesel has lower acquisition cost, 7 km/L fuel economy, and higher maintenance.',
    evLogic:'EV has higher acquisition cost, 0.8 kWh/km energy use, lower maintenance, and ZEV subsidy.',
    h2Logic:'Hydrogen has the highest acquisition cost, 0.08 kg/km hydrogen use, mid-high maintenance, and subsidy.',
    noteTitle:'Note', note:'This is a front-end demo model. Real decisions require quotes, residuals, insurance, taxes, charging assets, and route data.'
  },
  ja:{
    title:'商用車 TCO 試算ツール',
    intro:'ディーゼル、EV、水素商用車の5年総保有コストを比較します。',
    years:'使用年数', km:'年間走行 km', dieselPrice:'軽油単価 / L', electricity:'電力単価 / kWh', hydrogen:'水素単価 / kg', subsidy:'ゼロエミ補助',
    purchase:'取得', energy:'エネルギー', maintenance:'整備', total:'総コスト', assumptions:'試算ロジック',
    dieselLogic:'ディーゼルは取得費が低く、燃費 7 km/L、整備費は高めと仮定。',
    evLogic:'EVは取得費が高く、電費 0.8 kWh/km、整備費は低め、補助を控除。',
    h2Logic:'水素は取得費が最も高く、水素消費 0.08 kg/km、整備費は中高、補助を控除。',
    noteTitle:'注意', note:'これはフロントエンドのデモモデルです。実務では見積、残価、保険、税、充電設備、路線データが必要です。'
  }
};

function money(n){ return Math.round(n).toLocaleString(); }
function val(name){ return Number(document.querySelector(`[name="${name}"]`).value || 0); }

function calc(){
  const years = val('years'), km = val('km'), dieselPrice = val('dieselPrice'), electricity = val('electricity'), hydrogen = val('hydrogen'), subsidy = val('subsidy');
  const models = [
    {id:'diesel', name:'Diesel', purchase:1800000, energy: km*years/7*dieselPrice, maintenance: km*years*2.6},
    {id:'ev', name:'EV', purchase:2800000 - subsidy, energy: km*years*0.8*electricity, maintenance: km*years*1.4},
    {id:'hydrogen', name:'Hydrogen', purchase:3600000 - subsidy, energy: km*years*0.08*hydrogen, maintenance: km*years*2.0}
  ].map(m => ({...m, total:m.purchase+m.energy+m.maintenance}));
  const max = Math.max(...models.map(m=>m.total));
  document.getElementById('resultCards').innerHTML = models.map(m => `
    <article class="deliverable-card">
      <span class="number-badge">${m.name}</span>
      <h3>${text[state.lang].total}: ${money(m.total)}</h3>
      <p>${text[state.lang].purchase}: ${money(m.purchase)}</p>
      <p>${text[state.lang].energy}: ${money(m.energy)}</p>
      <p>${text[state.lang].maintenance}: ${money(m.maintenance)}</p>
    </article>
  `).join('');
  [['barDiesel',models[0]],['barEv',models[1]],['barHydrogen',models[2]]].forEach(([id,m])=>{
    const h = Math.max(24, 230 * m.total / max);
    const bar = document.getElementById(id);
    bar.setAttribute('y', 300 - h);
    bar.setAttribute('height', h);
  });
}

function renderText(){
  const d = text[state.lang];
  document.body.dataset.theme = themes[state.themeIndex];
  document.getElementById('langBtn').textContent = state.lang.toUpperCase();
  document.getElementById('themeBtn').textContent = String.fromCharCode(65+state.themeIndex);
  document.getElementById('pageTitle').textContent = d.title;
  document.getElementById('pageIntro').textContent = d.intro;
  document.getElementById('labelYears').textContent = d.years;
  document.getElementById('labelKm').textContent = d.km;
  document.getElementById('labelDieselPrice').textContent = d.dieselPrice;
  document.getElementById('labelElectricity').textContent = d.electricity;
  document.getElementById('labelHydrogen').textContent = d.hydrogen;
  document.getElementById('labelSubsidy').textContent = d.subsidy;
  document.getElementById('assumptionTitle').textContent = d.assumptions;
  document.getElementById('dieselLogic').textContent = d.dieselLogic;
  document.getElementById('evLogic').textContent = d.evLogic;
  document.getElementById('h2Logic').textContent = d.h2Logic;
  document.getElementById('noteTitle').textContent = d.noteTitle;
  document.getElementById('noteText').textContent = d.note;
  localStorage.setItem('cv-lang', state.lang);
  localStorage.setItem('cv-theme', String(state.themeIndex));
  calc();
}

document.getElementById('tcoForm').addEventListener('input', calc);
document.getElementById('langBtn').onclick = () => { state.lang = langs[(langs.indexOf(state.lang)+1)%langs.length]; renderText(); };
document.getElementById('themeBtn').onclick = () => { state.themeIndex = (state.themeIndex+1)%themes.length; renderText(); };
document.getElementById('topBtn').onclick = () => scrollTo({top:0, behavior:'smooth'});
renderText();
