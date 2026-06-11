const langTexts = {
  zh:{
    browseSources:'瀏覽來源', viewWorkflow:'查看 AI 工作流', heroPlaceholder:'首頁插圖預留區', heroPromptHint:'提示詞檔位於 prompts/homepage-hero-prompt.txt',
    navMotivation:'創作動機', navSources:'資料來源', navWorkflow:'AI 工作流', navDeliverables:'AI 產出', navAgents:'AI Agent', navRubric:'可信度分級', navCanvas:'分析畫布', navTools:'決策工具', navCases:'企劃案例', navPlaybooks:'Playbooks', navBusiness:'業務深化', navDomains:'業務應用', navGlossary:'術語表', navAbout:'架構說明',
    motivationTitle:'創作動機', sourcesTitle:'商用車資料來源分類', workflowTitle:'商用車情報 × AI 工作流', deliverablesTitle:'AI 產出與交付物', agentsTitle:'AI Agent 分工架構', rubricTitle:'資料來源可信度分級', canvasTitle:'互動式商業分析畫布', toolsTitle:'商用車決策工具', casesTitle:'情境式商品企劃案例', playbooksTitle:'商用車業務 Playbooks', businessTitle:'商用車產品企劃業務深化流程', domainsTitle:'業務轉化模組', glossaryTitle:'商用車關鍵術語表', aboutTitle:'網站架構與製作說明', drawerTitle:'快速導覽',
    arch1Title:'三語與四版型', arch1Text:'支援中文、英文、日文切換，並以 A/B/C/D 四種視覺版型切換；適合作品集、研究展示與企業簡報情境。',
    arch2Title:'資料導向內容', arch2Text:'所有來源、分類、工作流、交付物與業務模組皆由 data.js 驅動，後續只需擴充資料即可持續更新網站內容。',
    arch3Title:'SVG 動態視覺', arch3Text:'首頁與工作流區使用原生 SVG、CSS 動畫與純前端互動，不依賴外部框架，適合 GitHub Pages 靜態部署。',
    arch4Title:'Deferred Image Pipeline', arch4Text:'本批先保留首頁 16:9 圖片區與提示詞檔；未來可依 prompt 生成正式 JPG 後直接替換檔案路徑。',
    allCategories:'全部分類', sourceCount:'資料筆數', searchPlaceholder:'搜尋網站、組織或資料庫',
    statSources:'來源', statCategories:'分類', statWorkflow:'工作流步驟', statTerms:'術語',
    detailBtn:'查看定義', categoryCount:'來源數', tcoToolTitle:'TCO 決策試算器', tcoToolText:'比較柴油、電動與氫能商用車的五年總持有成本。', moduleToolTitle:'業務模組詳情頁', moduleToolText:'查看教育訓練、工程、維修、法規、行銷與財務等模組。', openTool:'開啟工具', openDetail:'查看詳情'
  },
  en:{
    browseSources:'Browse Sources', viewWorkflow:'View AI Workflow', heroPlaceholder:'Homepage hero placeholder', heroPromptHint:'Prompt file: prompts/homepage-hero-prompt.txt',
    navMotivation:'Motivation', navSources:'Sources', navWorkflow:'AI Workflow', navDeliverables:'AI Outputs', navAgents:'AI Agents', navRubric:'Evidence Rubric', navCanvas:'Analysis Canvas', navTools:'Decision Tools', navCases:'Planning Cases', navPlaybooks:'Playbooks', navBusiness:'Business Deep Dive', navDomains:'Applications', navGlossary:'Glossary', navAbout:'Architecture',
    motivationTitle:'Creative Motivation', sourcesTitle:'Commercial Vehicle Source Directory', workflowTitle:'Commercial Vehicle Intelligence × AI Workflow', deliverablesTitle:'AI Outputs & Deliverables', agentsTitle:'AI Agent Role Architecture', rubricTitle:'Source Credibility Rubric', canvasTitle:'Interactive Business Analysis Canvases', toolsTitle:'Commercial Vehicle Decision Tools', casesTitle:'Scenario Product Planning Cases', playbooksTitle:'Commercial Vehicle Playbooks', businessTitle:'Commercial Vehicle Business Deep Dive', domainsTitle:'Business Application Modules', glossaryTitle:'Commercial Vehicle Glossary', aboutTitle:'Site Architecture Notes', drawerTitle:'Quick Navigation',
    arch1Title:'Trilingual + Four Themes', arch1Text:'Switch between Chinese, English, and Japanese with four visual themes A/B/C/D for portfolio, research, and business presentation use cases.',
    arch2Title:'Data-Driven Content', arch2Text:'Sources, categories, workflow steps, deliverables, and application modules are powered by data.js, making future expansion easy and consistent.',
    arch3Title:'Animated SVG Visuals', arch3Text:'Hero and workflow sections use native SVG and CSS animation with no external framework, keeping the site GitHub Pages friendly.',
    arch4Title:'Deferred Image Pipeline', arch4Text:'This batch keeps a 16:9 hero image slot and a prompt file; later you can generate the final JPG and replace the path directly.',
    allCategories:'All categories', sourceCount:'Sources', searchPlaceholder:'Search websites, organizations, or databases',
    statSources:'Sources', statCategories:'Categories', statWorkflow:'Workflow steps', statTerms:'Terms', detailBtn:'View definition', categoryCount:'Items', tcoToolTitle:'TCO Decision Simulator', tcoToolText:'Compare five-year total cost across diesel, battery-electric, and hydrogen vehicles.', moduleToolTitle:'Business Module Detail Page', moduleToolText:'Explore training, engineering, maintenance, compliance, marketing, and finance modules.', openTool:'Open tool', openDetail:'Open detail'
  },
  ja:{
    browseSources:'情報源を見る', viewWorkflow:'AIワークフローを見る', heroPlaceholder:'トップ画像の予約枠', heroPromptHint:'プロンプト: prompts/homepage-hero-prompt.txt',
    navMotivation:'制作動機', navSources:'情報源', navWorkflow:'AIワークフロー', navDeliverables:'AI成果物', navAgents:'AI Agent', navRubric:'信頼度分類', navCanvas:'分析キャンバス', navTools:'意思決定ツール', navCases:'企画事例', navPlaybooks:'プレイブック', navBusiness:'業務深掘り', navDomains:'業務応用', navGlossary:'用語集', navAbout:'構成説明',
    motivationTitle:'制作動機', sourcesTitle:'商用車情報源ディレクトリ', workflowTitle:'商用車インテリジェンス × AIワークフロー', deliverablesTitle:'AI成果物とアウトプット', agentsTitle:'AI Agent 分担構成', rubricTitle:'情報源の信頼度分類', canvasTitle:'インタラクティブ分析キャンバス', toolsTitle:'商用車意思決定ツール', casesTitle:'シナリオ型商品企画事例', playbooksTitle:'商用車プレイブック', businessTitle:'商用車商品企画の業務深掘り', domainsTitle:'業務変換モジュール', glossaryTitle:'商用車キーワード用語集', aboutTitle:'サイト構成メモ', drawerTitle:'クイックナビ',
    arch1Title:'3言語＋4テーマ', arch1Text:'中国語・英語・日本語の切替と、A/B/C/D の4テーマを搭載。ポートフォリオ、研究、提案資料に適します。',
    arch2Title:'データ駆動コンテンツ', arch2Text:'情報源、分類、ワークフロー、成果物、業務モジュールは data.js で管理し、後続更新を容易にします。',
    arch3Title:'SVG アニメーション', arch3Text:'トップとワークフローはネイティブ SVG と CSS アニメーションで構成し、外部フレームワーク不要です。',
    arch4Title:'Deferred Image Pipeline', arch4Text:'今回は16:9画像枠とプロンプトのみ保持し、後続で正式 JPG を生成して差し替えます。',
    allCategories:'全分類', sourceCount:'件数', searchPlaceholder:'サイト・組織・DBを検索',
    statSources:'情報源', statCategories:'分類', statWorkflow:'工程数', statTerms:'用語', detailBtn:'定義を見る', categoryCount:'件数', tcoToolTitle:'TCO意思決定ツール', tcoToolText:'ディーゼル、EV、水素商用車の5年総保有コストを比較。', moduleToolTitle:'業務モジュール詳細ページ', moduleToolText:'教育、技術、整備、法規、販促、財務モジュールを確認。', openTool:'ツールを開く', openDetail:'詳細を見る'
  }
};

const state = { lang:'zh', themeIndex:0, category:'fleet', query:'', activeStep:0 };
const themes = ['theme-a','theme-b','theme-c','theme-d'];
const langs = ['zh','en','ja'];

function t(key){ return langTexts[state.lang][key] || key; }
function i18nValue(obj){ return (obj && obj[state.lang]) || obj?.zh || ''; }

function setStaticTexts(){
  const set = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };
  set('[data-i18n="siteTitle"]', i18nValue(SITE_DATA.ui.siteTitle));
  set('[data-i18n="siteSubtitle"]', i18nValue(SITE_DATA.ui.siteSubtitle));
  set('[data-i18n="intro"]', i18nValue(SITE_DATA.ui.intro));
  set('[data-i18n="motivationText"]', i18nValue(SITE_DATA.ui.motivationText));
  set('[data-i18n-copyright]', SITE_DATA.ui.copyright);
  document.querySelectorAll('[data-lang-text]').forEach(el=>{el.textContent=t(el.dataset.langText)});
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');
  document.getElementById('langBtn').textContent = state.lang.toUpperCase();
  document.getElementById('themeBtn').textContent = String.fromCharCode(65 + state.themeIndex);
}

function renderHeroStats(){
  document.getElementById('heroStats').innerHTML = `
    <span class="stat-pill">${t('statSources')}: ${SITE_DATA.sources.length}</span>
    <span class="stat-pill">${t('statCategories')}: ${Object.keys(SITE_DATA.categories).length}</span>
    <span class="stat-pill">${t('statWorkflow')}: ${SITE_DATA.workflow.length}</span>
    <span class="stat-pill">${t('statTerms')}: ${SITE_DATA.glossary.length}</span>`;
}

function renderCategoryFilter(){
  const sel = document.getElementById('categoryFilter');
  sel.innerHTML = `<option value="all">${t('allCategories')}</option>` + Object.entries(SITE_DATA.categories).map(([k,v])=>`<option value="${k}">${i18nValue(v)}</option>`).join('');
  sel.value = state.category;
  const chips = document.getElementById('categoryChips');
  chips.innerHTML = `<button class="chip ${state.category==='all'?'active':''}" data-cat="all">${t('allCategories')}</button>` + Object.entries(SITE_DATA.categories).map(([k,v])=>`<button class="chip ${state.category===k?'active':''}" data-cat="${k}">${i18nValue(v)}</button>`).join('');
  chips.querySelectorAll('.chip').forEach(btn=>btn.onclick=()=>{state.category=btn.dataset.cat; renderAll();});
}

function renderCategoryOverview(){
  const wrap = document.getElementById('categoryOverview');
  wrap.innerHTML = Object.entries(SITE_DATA.categories).map(([k,v])=>{
    const count = SITE_DATA.sources.filter(s=>s.category===k).length;
    return `<article class="overview-card"><strong>${count}</strong><span>${i18nValue(v)} · ${t('categoryCount')}</span></article>`;
  }).join('');
}

function filteredSources(){
  return SITE_DATA.sources.filter(s => (state.category==='all' || s.category===state.category) && (!state.query || (s.name+s.desc).toLowerCase().includes(state.query.toLowerCase())));
}

function renderSources(){
  const data = filteredSources();
  document.getElementById('sourceStats').textContent = `${t('sourceCount')}: ${data.length} / ${SITE_DATA.sources.length}`;
  document.getElementById('sourceGrid').innerHTML = data.map(s=>`
    <article class="source-card">
      <div class="source-meta"><span class="badge">${i18nValue(SITE_DATA.categories[s.category])}</span><span>↗</span></div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a href="${s.url}" target="_blank" rel="noopener">${s.url}</a>
    </article>
  `).join('');
}

function renderWorkflow(){
  document.getElementById('workflowCards').innerHTML = SITE_DATA.workflow.map((step,idx)=>`
    <article class="workflow-card ${idx===state.activeStep?'active':''}" data-step="${idx}">
      <h3>${i18nValue(step.title)}</h3>
      <p>${i18nValue(step.summary)}</p>
      <ul>${step.bullets[state.lang].map(x=>`<li>${x}</li>`).join('')}</ul>
    </article>
  `).join('');
  document.querySelectorAll('.workflow-card').forEach(card=>card.onclick=()=>{state.activeStep=Number(card.dataset.step); highlightWorkflow(); renderWorkflow();});
  highlightWorkflow();
}

function highlightWorkflow(){
  document.querySelectorAll('.workflow-svg circle').forEach(c=>c.classList.toggle('active', Number(c.dataset.step)===state.activeStep));
}

function renderDeliverables(){
  document.getElementById('deliverableGrid').innerHTML = SITE_DATA.deliverables.map((d,idx)=>`
    <article class="deliverable-card">
      <span class="number-badge">0${idx+1}</span>
      <h3>${i18nValue(d.title)}</h3>
      <p>${i18nValue(d.desc)}</p>
    </article>
  `).join('');
}

function renderDomains(){
  document.getElementById('domainGrid').innerHTML = SITE_DATA.domains.map(d=>`
    <article class="domain-card">
      <h3>${i18nValue(d.title)}</h3>
      <p>${d.desc}</p>
    </article>
  `).join('');
}

function openGlossary(term, def){
  document.getElementById('modalTerm').textContent = term;
  document.getElementById('modalDef').textContent = def;
  document.getElementById('glossaryModal').hidden = false;
}

function renderGlossary(){
  document.getElementById('glossaryGrid').innerHTML = SITE_DATA.glossary.map(item=>`
    <article class="glossary-card">
      <h3>${i18nValue(item.term)}</h3>
      <p>${i18nValue(item.def)}</p>
      <button data-term="${i18nValue(item.term).replace(/"/g,'&quot;')}" data-def="${i18nValue(item.def).replace(/"/g,'&quot;')}">${t('detailBtn')}</button>
    </article>
  `).join('');
  document.querySelectorAll('.glossary-card button').forEach(btn=>btn.onclick=()=>openGlossary(btn.dataset.term, btn.dataset.def));
}

function renderAgents(){
  document.getElementById('agentGrid').innerHTML = SITE_DATA.agentRoles.map((a,idx)=>`
    <article class="agent-card">
      <span class="number-badge">A${idx+1}</span>
      <h3>${i18nValue(a.title)}</h3>
      <p>${i18nValue(a.task)}</p>
    </article>
  `).join('');
}

function renderRubric(){
  document.getElementById('rubricGrid').innerHTML = SITE_DATA.sourceRubric.map(r=>`
    <article class="rubric-card level-${r.level}">
      <span class="rubric-level">${r.level}</span>
      <h3>${i18nValue(r.title)}</h3>
      <p>${i18nValue(r.desc)}</p>
    </article>
  `).join('');
}

function renderBusinessModules(){
  document.getElementById('businessModuleGrid').innerHTML = SITE_DATA.businessModules.map(m=>`
    <article class="business-card">
      <div class="business-head">
        <span class="badge">${m.id}</span>
        <h3>${i18nValue(m.title)}</h3>
      </div>
      <p>${i18nValue(m.goal)}</p>
      <div class="business-meta">
        <strong>Inputs</strong>
        <div class="mini-tags">${m.inputs.map(x=>`<span>${x}</span>`).join('')}</div>
      </div>
      <div class="business-meta">
        <strong>Outputs</strong>
        <ul>${m.outputs[state.lang].map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="kpi-box"><strong>KPI</strong><span>${i18nValue(m.kpi)}</span></div>
      <a class="btn ghost" href="module-detail.html?id=${m.id}">${t("openDetail")}</a>
    </article>
  `).join('');
}

function renderCanvas(){
  document.getElementById('canvasGrid').innerHTML = SITE_DATA.analysisCanvas.map(c=>`
    <article class="canvas-card">
      <h3>${i18nValue(c.title)}</h3>
      <p>${i18nValue(c.summary)}</p>
      <div class="mini-tags">${c.blocks[state.lang].map(x=>`<span>${x}</span>`).join('')}</div>
    </article>
  `).join('');
}

function renderPlaybooks(){
  document.getElementById('playbookGrid').innerHTML = SITE_DATA.playbooks.map((p,idx)=>`
    <article class="playbook-card">
      <span class="number-badge">P${idx+1}</span>
      <h3>${i18nValue(p.title)}</h3>
      <p>${i18nValue(p.summary)}</p>
      <ol>${p.steps[state.lang].map(s=>`<li>${s}</li>`).join('')}</ol>
    </article>
  `).join('');
}

function renderCases(){
  const grid = document.getElementById('caseGrid');
  if(!grid) return;
  grid.innerHTML = SITE_DATA.caseStudies.map(c=>`
    <article class="case-card">
      <span class="badge">${c.id}</span>
      <h3>${i18nValue(c.title)}</h3>
      <p><strong>Scenario</strong> ${i18nValue(c.scenario)}</p>
      <p><strong>Insight</strong> ${i18nValue(c.insight)}</p>
      <p><strong>Product</strong> ${i18nValue(c.product)}</p>
      <p><strong>KPI</strong> ${i18nValue(c.kpi)}</p>
    </article>
  `).join('');
}

function renderAll(){
  setStaticTexts();
  renderHeroStats();
  renderCategoryFilter();
  renderCategoryOverview();
  renderSources();
  renderWorkflow();
  renderDeliverables();
  renderAgents();
  renderRubric();
  renderCanvas();
  renderCases();
  renderPlaybooks();
  renderBusinessModules();
  renderDomains();
  renderGlossary();
}

document.getElementById('categoryFilter').addEventListener('change', e=>{state.category=e.target.value; renderAll();});
document.getElementById('searchInput').addEventListener('input', e=>{state.query=e.target.value; renderSources();});
document.getElementById('langBtn').addEventListener('click', ()=>{state.lang = langs[(langs.indexOf(state.lang)+1)%langs.length]; renderAll();});
document.getElementById('themeBtn').addEventListener('click', ()=>{state.themeIndex=(state.themeIndex+1)%themes.length; document.body.dataset.theme=themes[state.themeIndex]; setStaticTexts(); renderHeroStats();});
document.getElementById('topBtn').addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
document.querySelectorAll('.workflow-svg circle').forEach(c=>c.addEventListener('click', ()=>{state.activeStep=Number(c.dataset.step); renderWorkflow();}));
const drawer = document.getElementById('tocDrawer');
document.getElementById('tocBtn').addEventListener('click', ()=> drawer.hidden = false);
document.getElementById('closeDrawer').addEventListener('click', ()=> drawer.hidden = true);
drawer.addEventListener('click', e=>{ if(e.target===drawer) drawer.hidden=true; });
document.querySelectorAll('.drawer-link').forEach(a=>a.addEventListener('click', ()=> drawer.hidden=true));
document.getElementById('glossaryBtn').addEventListener('click', ()=>document.getElementById('glossary').scrollIntoView({behavior:'smooth'}));
const glossaryModal=document.getElementById('glossaryModal');
document.getElementById('closeModal').addEventListener('click', ()=>glossaryModal.hidden=true);
glossaryModal.addEventListener('click', e=>{ if(e.target===glossaryModal) glossaryModal.hidden=true; });
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){drawer.hidden=true;glossaryModal.hidden=true;} });

renderAll();


// Defensive startup: ensure overlays are closed on first load.
document.addEventListener('DOMContentLoaded', () => {
  const startupDrawer = document.getElementById('tocDrawer');
  const startupModal = document.getElementById('glossaryModal');
  if (startupDrawer) startupDrawer.hidden = true;
  if (startupModal) startupModal.hidden = true;
});
