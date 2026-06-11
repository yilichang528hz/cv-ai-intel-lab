const SITE_DATA = {
  "ui": {
    "siteTitle": {
      "zh": "商用車全球情報與 AI 商品企劃實驗室",
      "en": "Commercial Vehicle Intelligence & AI Planning Lab",
      "ja": "商用車グローバル情報＆AI企画ラボ"
    },
    "siteSubtitle": {
      "zh": "三語版 · 四種版型 · 靜態互動式知識網站",
      "en": "Trilingual · Four themes · Static interactive knowledge site",
      "ja": "3言語対応・4テーマ・静的インタラクティブ知識サイト"
    },
    "copyright": "著作權所有 © 2026 張義豊 (Yi-Li Chang) 保留所有權利",
    "intro": {
      "zh": "本網站整理本對話中提及的商用車情報來源，並以 AI 工作流展示如何從情報蒐集、資料治理、分析到商品企劃與業務應用。",
      "en": "This site organizes the commercial-vehicle information sources mentioned in this conversation and shows an AI workflow that transforms intelligence into planning and business actions.",
      "ja": "本サイトは本対話で挙がった商用車情報源を整理し、AIワークフローで情報収集から商品企画・業務活用までを可視化します。"
    },
    "motivationText": {
      "zh": "本網站以台灣商用車市場的物流密度、能源轉型、駕駛安全與車隊成本為觀察起點，連結歐美日等國際資料來源，建立可追溯的情報分類與分析流程。在產品企劃工作中，市場需求、法規限制、維修服務、財務條件與客戶營運情境需被放在同一框架中檢視，分散資訊才較可能轉化為可執行的產品規格、通路策略與投資判斷；其後續價值仍取決於資料品質、情境假設與跨部門協作的持續校準，以降低決策落差。",
      "en": "This site begins with Taiwan’s dense logistics environment, energy transition, driver safety, and fleet-cost pressures, then connects them with international commercial-vehicle sources from Europe, North America, and Japan. Product planning decisions are treated as conditional analyses across market demand, regulation, maintenance, finance, and customer operations, so fragmented information can be converted into specifications, channel strategy, and investment judgment with clearer evidence boundaries.",
      "ja": "本サイトは、台湾商用車市場の物流密度、エネルギー転換、運転者安全、車隊コストを起点に、欧米日などの国際情報源と接続する。商品企画では、市場需要、法規制、整備サービス、財務条件、顧客運用を同一の分析枠組みで確認し、分散した情報を仕様、販路戦略、投資判断へ変換する。その価値は、資料品質、前提条件、部門間調整の継続的な検証に依存する。"
    }
  },
  "categories": {
    "media": {
      "zh": "專業媒體",
      "en": "Media",
      "ja": "専門メディア"
    },
    "market": {
      "zh": "市場統計",
      "en": "Market Data",
      "ja": "市場統計"
    },
    "logistics": {
      "zh": "物流與貨運",
      "en": "Logistics",
      "ja": "物流・貨物"
    },
    "zev": {
      "zh": "零排放與能源",
      "en": "ZEV & Energy",
      "ja": "ゼロエミ・エネルギー"
    },
    "regulation": {
      "zh": "法規與安全",
      "en": "Regulation",
      "ja": "法規・安全"
    },
    "engineering": {
      "zh": "工程與維修",
      "en": "Engineering",
      "ja": "技術・整備"
    },
    "association": {
      "zh": "協會與教育",
      "en": "Associations",
      "ja": "協会・教育"
    },
    "academic": {
      "zh": "學術研究",
      "en": "Academic",
      "ja": "学術研究"
    },
    "fleet": {
      "zh": "車隊與TCO",
      "en": "Fleet & TCO",
      "ja": "フリート・TCO"
    }
  },
  "sources": [
    {
      "name": "FleetOwner",
      "url": "https://www.fleetowner.com/",
      "category": "media",
      "desc": "美國車隊營運、法規與維修媒體"
    },
    {
      "name": "Heavy Duty Trucking",
      "url": "https://www.truckinginfo.com/",
      "category": "media",
      "desc": "重卡、測試、法規與車隊資訊"
    },
    {
      "name": "Work Truck Online",
      "url": "https://www.worktruckonline.com/",
      "category": "media",
      "desc": "工作車、廂型車與用車管理資訊"
    },
    {
      "name": "CCJ",
      "url": "https://www.ccjdigital.com/",
      "category": "media",
      "desc": "卡車產業與大型車隊經營媒體"
    },
    {
      "name": "Fleet Equipment",
      "url": "https://www.fleetequipmentmag.com/",
      "category": "media",
      "desc": "商用車設備、零件與技術媒體"
    },
    {
      "name": "Fleet Maintenance",
      "url": "https://www.fleetmaintenance.com/",
      "category": "media",
      "desc": "維修、診斷、保養與停機管理"
    },
    {
      "name": "Transport Topics",
      "url": "https://www.ttnews.com/",
      "category": "media",
      "desc": "美國運輸物流政策與產業新聞"
    },
    {
      "name": "FreightWaves",
      "url": "https://www.freightwaves.com/",
      "category": "media",
      "desc": "貨運景氣、運價與供應鏈情報"
    },
    {
      "name": "Truck & Bus Builder",
      "url": "https://truckandbusbuilder.com/",
      "category": "media",
      "desc": "全球商用車製造與銷售分析"
    },
    {
      "name": "Commercial Motor",
      "url": "https://www.commercialmotor.com/",
      "category": "media",
      "desc": "英國卡車物流與產品測試媒體"
    },
    {
      "name": "Motor Transport",
      "url": "https://motortransport.co.uk/",
      "category": "media",
      "desc": "物流業者、卡車營運與市場消息"
    },
    {
      "name": "Sustainable Bus",
      "url": "https://www.sustainable-bus.com/",
      "category": "media",
      "desc": "電動巴士與零排放公共運輸資訊"
    },
    {
      "name": "METRO Magazine",
      "url": "https://www.metro-magazine.com/",
      "category": "media",
      "desc": "巴士車隊與公共運輸專業媒體"
    },
    {
      "name": "トラックニュース",
      "url": "https://www.trucknews.biz/",
      "category": "media",
      "desc": "日本卡車業界專門新聞網站"
    },
    {
      "name": "フルロード",
      "url": "https://fullload.bestcarweb.jp/",
      "category": "media",
      "desc": "日本卡車總合資訊與試駕報導"
    },
    {
      "name": "トラックNEXT",
      "url": "https://www.truck-next.com/",
      "category": "media",
      "desc": "架裝、安全設備與商用車資訊"
    },
    {
      "name": "LNEWS",
      "url": "https://www.lnews.jp/",
      "category": "media",
      "desc": "日本物流、SCM 與產業新聞"
    },
    {
      "name": "LOGISTICS TODAY",
      "url": "https://www.logi-today.com/",
      "category": "media",
      "desc": "日本物流、貨運與 DX 情報"
    },
    {
      "name": "物流ニッポン",
      "url": "https://logistics.jp/",
      "category": "media",
      "desc": "日本運輸物流與卡車業界新聞"
    },
    {
      "name": "Response トラック",
      "url": "https://response.jp/",
      "category": "media",
      "desc": "日本商用車與汽車產業新聞"
    },
    {
      "name": "eurotransport",
      "url": "https://www.eurotransport.de/",
      "category": "media",
      "desc": "德語商用車、測試與物流媒體"
    },
    {
      "name": "VerkehrsRundschau",
      "url": "https://www.verkehrsrundschau.de/",
      "category": "media",
      "desc": "德國物流、法規與車隊媒體"
    },
    {
      "name": "TRUCKER",
      "url": "https://www.trucker.de/",
      "category": "media",
      "desc": "德國卡車與道路運輸媒體"
    },
    {
      "name": "LOGISTRA",
      "url": "https://logistra.de/",
      "category": "media",
      "desc": "德語車隊、物流與倉儲媒體"
    },
    {
      "name": "Blickpunkt LKW+BUS",
      "url": "https://www.blickpunkt-lkw-bus.com/",
      "category": "media",
      "desc": "奧地利 Lkw 與 Bus 專業媒體"
    },
    {
      "name": "OICA",
      "url": "https://www.oica.net/",
      "category": "market",
      "desc": "全球汽車與商用車產量統計"
    },
    {
      "name": "ACEA Intelligence",
      "url": "https://www.aceaintelligence.eu/",
      "category": "market",
      "desc": "歐洲商用車登錄、保有量資料"
    },
    {
      "name": "SMMT Vehicle Data",
      "url": "https://www.smmt.co.uk/vehicle-data/",
      "category": "market",
      "desc": "英國商用車登錄、製造與出口"
    },
    {
      "name": "JAMA Statistics",
      "url": "https://www.jama.or.jp/english/statistics/",
      "category": "market",
      "desc": "日本汽車生產、銷售與出口統計"
    },
    {
      "name": "JAIA Statistics",
      "url": "https://www.jaia-jp.org/en/statistics/",
      "category": "market",
      "desc": "日本進口車含貨車巴士統計"
    },
    {
      "name": "KBA",
      "url": "https://www.kba.de/",
      "category": "market",
      "desc": "德國車輛登錄、保有量與燃料別"
    },
    {
      "name": "CAAM",
      "url": "https://www.caam.org.cn/",
      "category": "market",
      "desc": "中國商用車產銷與新能源資料"
    },
    {
      "name": "SIAM",
      "url": "https://www.siam.in/",
      "category": "market",
      "desc": "印度商用車產銷與出口統計"
    },
    {
      "name": "ANFAVEA",
      "url": "https://anfavea.com.br/",
      "category": "market",
      "desc": "巴西汽車與商用車市場資料"
    },
    {
      "name": "Eurostat Road Freight",
      "url": "https://ec.europa.eu/eurostat/",
      "category": "market",
      "desc": "歐盟道路貨運與運輸統計"
    },
    {
      "name": "EAFO",
      "url": "https://alternative-fuels-observatory.ec.europa.eu/",
      "category": "market",
      "desc": "歐洲替代燃料車與充電資料"
    },
    {
      "name": "S&P Global Mobility",
      "url": "https://www.spglobal.com/mobility/",
      "category": "market",
      "desc": "高價值市場、VIN 與車隊資料"
    },
    {
      "name": "ACT Research",
      "url": "https://www.actresearch.net/",
      "category": "market",
      "desc": "北美卡車、拖車與景氣循環分析"
    },
    {
      "name": "FTR Transportation Intelligence",
      "url": "https://www.ftrintel.com/",
      "category": "market",
      "desc": "北美貨運、訂單與運價預測"
    },
    {
      "name": "BTS Freight Analysis Framework",
      "url": "https://www.bts.gov/faf",
      "category": "logistics",
      "desc": "美國貨物流量、OD 與噸英里資料"
    },
    {
      "name": "Commodity Flow Survey",
      "url": "https://www.census.gov/programs-surveys/cfs.html",
      "category": "logistics",
      "desc": "美國商品流與產業物流調查"
    },
    {
      "name": "DAT Freight & Analytics",
      "url": "https://www.dat.com/industry-trends",
      "category": "logistics",
      "desc": "即期運價、車貨比與運輸市場"
    },
    {
      "name": "Truckstop",
      "url": "https://truckstop.com/",
      "category": "logistics",
      "desc": "貨運需求、運價與承運市場數據"
    },
    {
      "name": "World Bank LPI",
      "url": "https://lpi.worldbank.org/",
      "category": "logistics",
      "desc": "各國物流績效與基礎設施比較"
    },
    {
      "name": "UN Comtrade",
      "url": "https://comtradeplus.un.org/",
      "category": "logistics",
      "desc": "全球貿易流向與商品資料"
    },
    {
      "name": "Freightos Data",
      "url": "https://www.freightos.com/data/",
      "category": "logistics",
      "desc": "海運空運價格與物流市場資料"
    },
    {
      "name": "Drewry WCI",
      "url": "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
      "category": "logistics",
      "desc": "貨櫃運價與全球供應鏈景氣"
    },
    {
      "name": "IEA Global EV Outlook",
      "url": "https://www.iea.org/reports/global-ev-outlook-2024",
      "category": "zev",
      "desc": "電動卡車巴士與能源轉型報告"
    },
    {
      "name": "ICCT",
      "url": "https://theicct.org/",
      "category": "zev",
      "desc": "零排放商用車與排放法規研究"
    },
    {
      "name": "ZETI Data Explorer",
      "url": "https://globaldrivetozero.org/tools/zeti-data-explorer/",
      "category": "zev",
      "desc": "全球零排放卡車巴士車型庫"
    },
    {
      "name": "CALSTART Drive to Zero",
      "url": "https://globaldrivetozero.org/",
      "category": "zev",
      "desc": "零排放商用車國際倡議與報告"
    },
    {
      "name": "RMI ACT Dashboard",
      "url": "https://rmi.org/our-work/mobility-transformation/advanced-clean-trucks-dashboard/",
      "category": "zev",
      "desc": "卡車電動化、充電與電網儀表板"
    },
    {
      "name": "AFDC Maps and Data",
      "url": "https://afdc.energy.gov/data",
      "category": "zev",
      "desc": "替代燃料車、充電與能源資料"
    },
    {
      "name": "NREL Fleet DNA",
      "url": "https://www.nrel.gov/transportation/fleettest-fleet-dna.html",
      "category": "zev",
      "desc": "商用車實際運行與能耗資料"
    },
    {
      "name": "NREL T3CO",
      "url": "https://www.nrel.gov/transportation/t3co.html",
      "category": "zev",
      "desc": "商用車總持有成本模擬工具"
    },
    {
      "name": "Argonne GREET",
      "url": "https://greet.anl.gov/",
      "category": "zev",
      "desc": "燃料與車輛生命週期排放模型"
    },
    {
      "name": "CharIN",
      "url": "https://www.charin.global/",
      "category": "zev",
      "desc": "重卡大功率充電標準推進組織"
    },
    {
      "name": "Hydrogen Council",
      "url": "https://hydrogencouncil.com/",
      "category": "zev",
      "desc": "氫能重卡與基礎設施產業資訊"
    },
    {
      "name": "UNECE WP.29",
      "url": "https://unece.org/transport/vehicle-regulations",
      "category": "regulation",
      "desc": "全球車輛安全與環保法規平台"
    },
    {
      "name": "FMCSA",
      "url": "https://www.fmcsa.dot.gov/",
      "category": "regulation",
      "desc": "美國商用車營運與安全監理"
    },
    {
      "name": "CVSA",
      "url": "https://cvsa.org/",
      "category": "regulation",
      "desc": "北美商用車安全檢查與標準"
    },
    {
      "name": "EPA SmartWay",
      "url": "https://www.epa.gov/smartway",
      "category": "regulation",
      "desc": "貨運減排與承運商環保評估"
    },
    {
      "name": "NHTSA FARS",
      "url": "https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars",
      "category": "regulation",
      "desc": "交通死亡事故與重車安全資料"
    },
    {
      "name": "EUR-Lex Transport",
      "url": "https://eur-lex.europa.eu/",
      "category": "regulation",
      "desc": "歐盟運輸與商用車法規查詢"
    },
    {
      "name": "IRU",
      "url": "https://www.iru.org/",
      "category": "regulation",
      "desc": "全球道路運輸產業與政策倡議"
    },
    {
      "name": "ITF/OECD",
      "url": "https://www.itf-oecd.org/",
      "category": "regulation",
      "desc": "國際運輸政策、數據與研究"
    },
    {
      "name": "SAE International",
      "url": "https://www.sae.org/",
      "category": "engineering",
      "desc": "車輛工程標準、論文與技術社群"
    },
    {
      "name": "TMC",
      "url": "https://tmc.trucking.org/",
      "category": "engineering",
      "desc": "北美車隊維修技術與建議實務"
    },
    {
      "name": "NTEA",
      "url": "https://www.ntea.com/",
      "category": "engineering",
      "desc": "工作車與特裝車工程法規資源"
    },
    {
      "name": "Automotive World CV",
      "url": "https://www.automotiveworld.com/topics/commercial-vehicles/",
      "category": "engineering",
      "desc": "商用車技術與產業分析媒體"
    },
    {
      "name": "Motor-FanTECH",
      "url": "https://motor-fan.jp/tech/",
      "category": "engineering",
      "desc": "日本汽車與商用車技術資訊"
    },
    {
      "name": "DEKRA",
      "url": "https://www.dekra.com/en/",
      "category": "engineering",
      "desc": "檢驗、安全與維修相關研究"
    },
    {
      "name": "TÜV Report",
      "url": "https://www.tuv.com/",
      "category": "engineering",
      "desc": "德系車檢、可靠性與缺陷觀點"
    },
    {
      "name": "Fleetio Resources",
      "url": "https://www.fleetio.com/resources",
      "category": "engineering",
      "desc": "維修管理、工單與成本知識"
    },
    {
      "name": "IRU Academy",
      "url": "https://www.iru.org/what-we-do/academy",
      "category": "association",
      "desc": "道路運輸職能訓練與認證平台"
    },
    {
      "name": "APTA",
      "url": "https://www.apta.com/",
      "category": "association",
      "desc": "美國公共運輸協會與巴士研究"
    },
    {
      "name": "UITP",
      "url": "https://www.uitp.org/",
      "category": "association",
      "desc": "全球公共運輸與巴士知識平台"
    },
    {
      "name": "BGL",
      "url": "https://www.bgl-ev.de/",
      "category": "association",
      "desc": "德國貨運與物流協會資訊平台"
    },
    {
      "name": "JTA 全日本トラック協会",
      "url": "https://jta.or.jp/",
      "category": "association",
      "desc": "日本卡車運輸業協會與安全資訊"
    },
    {
      "name": "日本バス協会",
      "url": "https://www.bus.or.jp/",
      "category": "association",
      "desc": "日本巴士業界資訊與政策資料"
    },
    {
      "name": "FIATA",
      "url": "https://fiata.org/",
      "category": "association",
      "desc": "國際貨運承攬與物流代表組織"
    },
    {
      "name": "CLECAT",
      "url": "https://www.clecat.org/",
      "category": "association",
      "desc": "歐洲貨運與物流產業倡議平台"
    },
    {
      "name": "ALICE",
      "url": "https://www.etp-logistics.eu/",
      "category": "association",
      "desc": "歐洲物流創新與研究技術平台"
    },
    {
      "name": "ERTRAC",
      "url": "https://www.ertrac.org/",
      "category": "association",
      "desc": "道路運輸研究與創新路線圖平台"
    },
    {
      "name": "TRB",
      "url": "https://www.nationalacademies.org/trb/transportation-research-board",
      "category": "academic",
      "desc": "交通研究委員會與研究社群入口"
    },
    {
      "name": "TRID",
      "url": "https://trid.trb.org/",
      "category": "academic",
      "desc": "交通運輸研究文獻資料庫"
    },
    {
      "name": "Transportation Research Record",
      "url": "https://journals.sagepub.com/home/trr",
      "category": "academic",
      "desc": "交通工程與運輸研究期刊"
    },
    {
      "name": "Transportation Research Part E",
      "url": "https://www.sciencedirect.com/journal/transportation-research-part-e-logistics-and-transportation-review",
      "category": "academic",
      "desc": "物流、供應鏈與運輸管理期刊"
    },
    {
      "name": "Transportation Research Part D",
      "url": "https://www.sciencedirect.com/journal/transportation-research-part-d-transport-and-environment",
      "category": "academic",
      "desc": "運輸環境與排放研究期刊"
    },
    {
      "name": "RTBM",
      "url": "https://www.sciencedirect.com/journal/research-in-transportation-business-and-management",
      "category": "academic",
      "desc": "運輸商業模式與管理期刊"
    },
    {
      "name": "IEEE T-ITS",
      "url": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6979",
      "category": "academic",
      "desc": "智慧運輸、車聯網與自駕研究"
    },
    {
      "name": "Applied Energy",
      "url": "https://www.sciencedirect.com/journal/applied-energy",
      "category": "academic",
      "desc": "能源系統與電動商用車研究"
    },
    {
      "name": "Geotab",
      "url": "https://www.geotab.com/",
      "category": "fleet",
      "desc": "連網車隊、EV 與安全資料洞察"
    },
    {
      "name": "Samsara",
      "url": "https://www.samsara.com/",
      "category": "fleet",
      "desc": "車隊物聯網、營運與安全分析"
    },
    {
      "name": "Webfleet",
      "url": "https://www.webfleet.com/",
      "category": "fleet",
      "desc": "歐洲車隊管理與 EV 資源"
    },
    {
      "name": "Verizon Connect",
      "url": "https://www.verizonconnect.com/",
      "category": "fleet",
      "desc": "GPS 車隊管理與駕駛行為分析"
    },
    {
      "name": "Motive",
      "url": "https://gomotive.com/",
      "category": "fleet",
      "desc": "ELD、安全與車隊營運平台"
    },
    {
      "name": "Element Fleet",
      "url": "https://www.elementfleet.com/",
      "category": "fleet",
      "desc": "大型企業車隊 TCO 與租賃洞察"
    },
    {
      "name": "Ayvens",
      "url": "https://www.ayvens.com/",
      "category": "fleet",
      "desc": "全球車隊租賃與移動管理觀點"
    },
    {
      "name": "Arval Mobility Observatory",
      "url": "https://www.arval.com/en/arval-mobility-observatory",
      "category": "fleet",
      "desc": "歐洲企業車隊與能源轉型研究"
    },
    {
      "name": "Penske Transportation Solutions",
      "url": "https://www.pensketruckleasing.com/",
      "category": "fleet",
      "desc": "卡車租賃、維修與物流方案"
    },
    {
      "name": "DHL Trend Radar",
      "url": "https://www.dhl.com/global-en/home/insights-and-innovation/insights/logistics-trend-radar.html",
      "category": "fleet",
      "desc": "物流科技、商模與未來趨勢雷達"
    },
    {
      "name": "NACFE",
      "url": "https://nacfe.org/",
      "category": "fleet",
      "desc": "北美貨運效率與電動卡車研究"
    },
    {
      "name": "Run on Less",
      "url": "https://runonless.com/",
      "category": "fleet",
      "desc": "實車營運驗證與效率案例平台"
    },
    {
      "name": "Ryder Newsroom",
      "url": "https://news.ryder.com/",
      "category": "fleet",
      "desc": "物流、租賃與電動車試點資訊"
    },
    {
      "name": "DHL Logistics Trend Radar",
      "url": "https://www.dhl.com/global-en/home/insights-and-innovation/insights/logistics-trend-radar.html",
      "category": "fleet",
      "desc": "物流科技與商業模式趨勢雷達"
    },
    {
      "name": "TRATON Group",
      "url": "https://www.traton.com/en.html",
      "category": "market",
      "desc": "商用車集團策略、年報與市場資訊"
    },
    {
      "name": "Daimler Truck",
      "url": "https://www.daimlertruck.com/en",
      "category": "market",
      "desc": "卡車、巴士與零排放商用車資訊"
    },
    {
      "name": "Volvo Trucks News",
      "url": "https://www.volvotrucks.com/en-en/news.html",
      "category": "market",
      "desc": "卡車技術、服務與市場動向"
    },
    {
      "name": "PACCAR Investor",
      "url": "https://investors.paccar.com/",
      "category": "market",
      "desc": "商用車財報與產業景氣資訊"
    },
    {
      "name": "MAN Truck & Bus",
      "url": "https://www.man.eu/",
      "category": "market",
      "desc": "歐洲卡車、巴士與電動化資訊"
    },
    {
      "name": "Isuzu Newsroom",
      "url": "https://www.isuzu.co.jp/world/newsroom/",
      "category": "market",
      "desc": "五十鈴商用車產品與企業動向"
    },
    {
      "name": "Hino Global",
      "url": "https://www.hino-global.com/",
      "category": "market",
      "desc": "日野商用車全球產品與企業資訊"
    },
    {
      "name": "UD Trucks",
      "url": "https://www.udtrucks.com/",
      "category": "market",
      "desc": "UD 卡車產品、運輸與技術資訊"
    },
    {
      "name": "World Economic Forum Mobility",
      "url": "https://www.weforum.org/communities/shaping-the-future-of-mobility/",
      "category": "logistics",
      "desc": "全球移動、物流與政策討論平台"
    },
    {
      "name": "McKinsey Transportation & Logistics",
      "url": "https://www.mckinsey.com/industries/travel-logistics-and-infrastructure/how-we-help-clients/transportation-and-logistics",
      "category": "logistics",
      "desc": "物流與運輸商業分析洞察"
    },
    {
      "name": "BCG Automotive",
      "url": "https://www.bcg.com/industries/automotive/overview",
      "category": "market",
      "desc": "汽車與商用車策略分析洞察"
    },
    {
      "name": "Roland Berger Automotive",
      "url": "https://www.rolandberger.com/en/Insights/Global-Topics/Automotive/",
      "category": "market",
      "desc": "歐洲汽車與商用車顧問研究"
    },
    {
      "name": "KPMG Automotive Institute",
      "url": "https://kpmg.com/xx/en/our-insights/automotive.html",
      "category": "market",
      "desc": "汽車、供應鏈與電動化研究"
    },
    {
      "name": "PwC Autofacts",
      "url": "https://www.pwc.com/gx/en/industries/automotive.html",
      "category": "market",
      "desc": "汽車與商用車市場預測觀點"
    },
    {
      "name": "Autonomous Vehicle Engineering",
      "url": "https://www.autonomousvehicleinternational.com/",
      "category": "engineering",
      "desc": "自動駕駛與商用車工程媒體"
    },
    {
      "name": "Commercial Vehicle Workshop",
      "url": "https://www.commercialvehicleworkshop.com/",
      "category": "engineering",
      "desc": "商用車維修工坊與技術內容"
    },
    {
      "name": "Busworld Academy",
      "url": "https://www.busworld.org/academy",
      "category": "association",
      "desc": "巴士產業知識、趨勢與教育內容"
    },
    {
      "name": "NVIDIA Transportation",
      "url": "https://www.nvidia.com/en-us/industries/transportation/",
      "category": "engineering",
      "desc": "AI、AV 與車載運算技術內容"
    },
    {
      "name": "MIT CTL",
      "url": "https://ctl.mit.edu/",
      "category": "academic",
      "desc": "物流與供應鏈研究與教育平台"
    },
    {
      "name": "Google Dataset Search",
      "url": "https://datasetsearch.research.google.com/",
      "category": "academic",
      "desc": "搜尋公開交通與車隊資料集"
    },
    {
      "name": "Our World in Data CO2",
      "url": "https://ourworldindata.org/co2-and-greenhouse-gas-emissions",
      "category": "zev",
      "desc": "能源與排放視覺化資料參考"
    }
  ],
  "workflow": [
    {
      "id": "scan",
      "title": {
        "zh": "01 情報掃描",
        "en": "01 Signal Scanning",
        "ja": "01 シグナル探索"
      },
      "summary": {
        "zh": "以多語爬梳媒體、資料庫、法規與期刊。",
        "en": "Scan multilingual media, databases, regulations, and journals.",
        "ja": "多言語でメディア・DB・法規・論文を収集。"
      },
      "bullets": {
        "zh": [
          "主題監測：市場、物流、法規、電動化",
          "來源池：官方、協會、研究機構、媒體",
          "自動排程：日報、週報、月報"
        ],
        "en": [
          "Monitor markets, logistics, regulation, and electrification",
          "Pull from official, association, research, and media sources",
          "Schedule daily, weekly, and monthly collection"
        ],
        "ja": [
          "市場・物流・法規・電動化を監視",
          "公式・協会・研究・メディアを統合",
          "日次・週次・月次で自動収集"
        ]
      }
    },
    {
      "id": "govern",
      "title": {
        "zh": "02 資料治理",
        "en": "02 Data Governance",
        "ja": "02 データガバナンス"
      },
      "summary": {
        "zh": "清洗、去重、標記可信度與更新頻率。",
        "en": "Clean, deduplicate, and score source credibility and freshness.",
        "ja": "クレンジング・重複排除・信頼度評価。"
      },
      "bullets": {
        "zh": [
          "來源層級與授權標籤",
          "時間戳、地區、車種、主題標記",
          "異常值與重複內容處理"
        ],
        "en": [
          "Label source tier and access rights",
          "Tag time, region, vehicle type, and theme",
          "Handle duplicates and anomalies"
        ],
        "ja": [
          "ソース階層と権限を付与",
          "時間・地域・車種・主題をタグ付け",
          "重複と異常値を処理"
        ]
      }
    },
    {
      "id": "extract",
      "title": {
        "zh": "03 AI 萃取",
        "en": "03 AI Extraction",
        "ja": "03 AI抽出"
      },
      "summary": {
        "zh": "LLM 摘要、翻譯、實體辨識與事件偵測。",
        "en": "Use LLMs for summarization, translation, NER, and event detection.",
        "ja": "LLMで要約・翻訳・固有表現抽出を実施。"
      },
      "bullets": {
        "zh": [
          "英文、日文、德文同步處理",
          "關鍵詞、品牌、法規、技術實體抽取",
          "生成可檢索的標準化摘要"
        ],
        "en": [
          "Process English, Japanese, and German together",
          "Extract brands, regulations, and technology entities",
          "Generate normalized searchable summaries"
        ],
        "ja": [
          "英日独を同時処理",
          "ブランド・法規・技術を抽出",
          "検索可能な要約を生成"
        ]
      }
    },
    {
      "id": "graph",
      "title": {
        "zh": "04 知識圖譜 / RAG",
        "en": "04 Knowledge Graph / RAG",
        "ja": "04 ナレッジグラフ / RAG"
      },
      "summary": {
        "zh": "建立來源、法規、產品、車型與場景關聯。",
        "en": "Link sources, regulations, products, vehicle classes, and use cases.",
        "ja": "ソース・法規・製品・車種・用途を連結。"
      },
      "bullets": {
        "zh": [
          "產品—用途—客群—成本關係圖",
          "法規—市場—技術變動連結",
          "建立問答與證據引用基礎"
        ],
        "en": [
          "Map products, use cases, users, and costs",
          "Connect regulation, markets, and technology shifts",
          "Support evidence-grounded Q&A"
        ],
        "ja": [
          "製品・用途・顧客・コストを連結",
          "法規・市場・技術変化を統合",
          "根拠付きQAを支援"
        ]
      }
    },
    {
      "id": "analytics",
      "title": {
        "zh": "05 分析引擎",
        "en": "05 Analytics Engine",
        "ja": "05 分析エンジン"
      },
      "summary": {
        "zh": "產生商情、TCO、競品、需求與風險分析。",
        "en": "Generate insights for TCO, competitors, demand, and risk.",
        "ja": "TCO・競合・需要・リスクを分析。"
      },
      "bullets": {
        "zh": [
          "市場規模與區域熱點",
          "TCO、補助、油電氫比較",
          "競品功能、價格、規格與上市節點"
        ],
        "en": [
          "Size markets and rank regional hotspots",
          "Compare TCO, incentives, diesel, EV, and hydrogen",
          "Track specs, pricing, and launches"
        ],
        "ja": [
          "市場規模と地域機会を分析",
          "TCO・補助金・動力源を比較",
          "価格・仕様・投入時期を追跡"
        ]
      }
    },
    {
      "id": "transform",
      "title": {
        "zh": "06 業務轉化",
        "en": "06 Business Transformation",
        "ja": "06 業務変換"
      },
      "summary": {
        "zh": "把洞察轉為產品企劃與營運方案。",
        "en": "Turn insights into product planning and business actions.",
        "ja": "洞察を商品企画と実務へ転換。"
      },
      "bullets": {
        "zh": [
          "教育訓練：課程地圖、教材、測驗",
          "工程維修：故障知識庫、保養 SOP",
          "法規合規：清單、預警、比較表"
        ],
        "en": [
          "Training: curriculum maps, content, tests",
          "Engineering: fault libraries and maintenance SOPs",
          "Compliance: checklists, alerts, comparison sheets"
        ],
        "ja": [
          "教育：講座地図・教材・試験",
          "整備：故障DB・保守SOP",
          "法規：チェックリスト・警告・比較表"
        ]
      }
    },
    {
      "id": "decision",
      "title": {
        "zh": "07 決策駕駛艙",
        "en": "07 Decision Cockpit",
        "ja": "07 意思決定コクピット"
      },
      "summary": {
        "zh": "以儀表板管理商品、行銷、財務與專案。",
        "en": "Guide product, marketing, finance, and project decisions with dashboards.",
        "ja": "ダッシュボードで企画・財務・PJを管理。"
      },
      "bullets": {
        "zh": [
          "商品企劃：場景、規格、客群定義",
          "行銷企劃：內容主題、名單、活動優先序",
          "財務：收益模型、投資回收、敏感度分析"
        ],
        "en": [
          "Product: define scenarios, specs, and target users",
          "Marketing: rank content, leads, and campaign priorities",
          "Finance: model ROI and sensitivity"
        ],
        "ja": [
          "商品：用途・仕様・顧客を定義",
          "販促：テーマ・見込み客・施策を優先",
          "財務：ROIと感度分析を実施"
        ]
      }
    },
    {
      "id": "publish",
      "title": {
        "zh": "08 發布與回饋",
        "en": "08 Publish & Feedback",
        "ja": "08 公開と改善"
      },
      "summary": {
        "zh": "輸出網站、簡報、報告，並回收互動數據。",
        "en": "Publish reports, websites, and decks, then learn from engagement.",
        "ja": "サイト・報告・資料を公開し改善。"
      },
      "bullets": {
        "zh": [
          "週報、月報、專題頁、提案包",
          "追蹤點擊、搜尋、下載與詢問",
          "回寫資料庫持續優化模型"
        ],
        "en": [
          "Deliver weekly briefs, monthly reports, and proposal packs",
          "Track clicks, searches, downloads, and inquiries",
          "Feed usage signals back into the system"
        ],
        "ja": [
          "週報・月報・提案書を公開",
          "クリック・検索・DLを追跡",
          "利用結果を再学習に反映"
        ]
      }
    }
  ],
  "domains": [
    {
      "id": "education",
      "title": {
        "zh": "教育訓練",
        "en": "Training",
        "ja": "教育訓練"
      },
      "desc": "建立職能地圖、學習路徑、教材與題庫。"
    },
    {
      "id": "engineering",
      "title": {
        "zh": "車輛工程技術",
        "en": "Engineering",
        "ja": "車両工学"
      },
      "desc": "整理底盤、動力、電控、ADAS 知識。"
    },
    {
      "id": "maintenance",
      "title": {
        "zh": "維修保養",
        "en": "Maintenance",
        "ja": "整備保守"
      },
      "desc": "形成維修 SOP、故障樹與備件知識。"
    },
    {
      "id": "regulation",
      "title": {
        "zh": "法規與合規",
        "en": "Compliance",
        "ja": "法規・コンプライアンス"
      },
      "desc": "追蹤法規更新、稽核清單與證據。"
    },
    {
      "id": "health",
      "title": {
        "zh": "駕駛健康安全",
        "en": "Driver Health",
        "ja": "健康安全"
      },
      "desc": "整合疲勞、姿勢、工安與職業健康。"
    },
    {
      "id": "pm",
      "title": {
        "zh": "專案管理",
        "en": "Project Mgmt",
        "ja": "プロジェクト管理"
      },
      "desc": "需求、時程、風險、里程碑與跨部門協作。"
    },
    {
      "id": "planning",
      "title": {
        "zh": "商品企劃",
        "en": "Product Planning",
        "ja": "商品企画"
      },
      "desc": "把洞察轉成車型、配備、場景與服務。"
    },
    {
      "id": "marketing",
      "title": {
        "zh": "行銷與通路",
        "en": "Marketing",
        "ja": "マーケティング"
      },
      "desc": "建立內容、客群、銷售話術與活動規劃。"
    },
    {
      "id": "biz",
      "title": {
        "zh": "商業分析決策",
        "en": "Business Analytics",
        "ja": "事業分析"
      },
      "desc": "建立需求、競品、價格與趨勢儀表板。"
    },
    {
      "id": "finance",
      "title": {
        "zh": "財務經濟金融",
        "en": "Finance & Econ",
        "ja": "財務・経済"
      },
      "desc": "推估 TCO、收益、景氣、融資與保險。"
    }
  ],
  "glossary": [
    {
      "term": {
        "zh": "TCO",
        "en": "TCO",
        "ja": "TCO"
      },
      "def": {
        "zh": "總持有成本，含購車、油耗、維修、折舊與保險。",
        "en": "Total cost of ownership across acquisition, energy, maintenance, depreciation, and insurance.",
        "ja": "取得・燃料・整備・減価償却・保険を含む総保有コスト。"
      }
    },
    {
      "term": {
        "zh": "GVW",
        "en": "GVW",
        "ja": "GVW"
      },
      "def": {
        "zh": "車輛總重，用於區分商用車級距。",
        "en": "Gross vehicle weight, commonly used to classify commercial vehicles.",
        "ja": "車両総重量。商用車の区分に用いる。"
      }
    },
    {
      "term": {
        "zh": "LCV",
        "en": "LCV",
        "ja": "LCV"
      },
      "def": {
        "zh": "輕型商用車，如廂型車與小型貨車。",
        "en": "Light commercial vehicle such as a delivery van or small truck.",
        "ja": "小型商用車。バンや小型トラック。"
      }
    },
    {
      "term": {
        "zh": "MHDV",
        "en": "MHDV",
        "ja": "MHDV"
      },
      "def": {
        "zh": "中重型商用車，常見於貨運與客運場景。",
        "en": "Medium- and heavy-duty vehicles used in freight and transit.",
        "ja": "中大型商用車。貨物・旅客輸送で使用。"
      }
    },
    {
      "term": {
        "zh": "ZEV",
        "en": "ZEV",
        "ja": "ZEV"
      },
      "def": {
        "zh": "零排放車，包含電動與燃料電池車。",
        "en": "Zero-emission vehicle including battery-electric and fuel-cell vehicles.",
        "ja": "ゼロエミッション車。BEVやFCEVを含む。"
      }
    },
    {
      "term": {
        "zh": "ADAS",
        "en": "ADAS",
        "ja": "ADAS"
      },
      "def": {
        "zh": "先進駕駛輔助系統，如 AEB、LKA。",
        "en": "Advanced driver-assistance systems such as AEB and lane-keeping.",
        "ja": "先進運転支援システム。AEBやLKAなど。"
      }
    },
    {
      "term": {
        "zh": "RAG",
        "en": "RAG",
        "ja": "RAG"
      },
      "def": {
        "zh": "檢索增強生成，以資料庫證據輔助 LLM。",
        "en": "Retrieval-augmented generation using external evidence with LLMs.",
        "ja": "外部知識でLLMを補強する検索拡張生成。"
      }
    },
    {
      "term": {
        "zh": "Knowledge Graph",
        "en": "Knowledge Graph",
        "ja": "Knowledge Graph"
      },
      "def": {
        "zh": "串聯產品、法規、場景與客群的知識關聯網。",
        "en": "A graph linking products, regulation, use cases, and users.",
        "ja": "製品・法規・用途・顧客を結ぶ知識ネットワーク。"
      }
    },
    {
      "term": {
        "zh": "Fleet Telematics",
        "en": "Fleet Telematics",
        "ja": "Fleet Telematics"
      },
      "def": {
        "zh": "以 GPS、感測與雲端掌握車隊營運。",
        "en": "Using GPS, sensors, and cloud systems to manage fleet operations.",
        "ja": "GPS・センサー・クラウドで車隊を可視化管理。"
      }
    },
    {
      "term": {
        "zh": "Predictive Maintenance",
        "en": "Predictive Maintenance",
        "ja": "Predictive Maintenance"
      },
      "def": {
        "zh": "依據數據預測故障並提前保養。",
        "en": "Predict failures and service needs using operational data.",
        "ja": "運行データから故障を予測し予防整備を行う。"
      }
    },
    {
      "term": {
        "zh": "WP.29",
        "en": "WP.29",
        "ja": "WP.29"
      },
      "def": {
        "zh": "UNECE 車輛法規協調平台。",
        "en": "UNECE’s global forum for harmonizing vehicle regulations.",
        "ja": "UNECEの車両規則調和フォーラム。"
      }
    },
    {
      "term": {
        "zh": "SmartWay",
        "en": "SmartWay",
        "ja": "SmartWay"
      },
      "def": {
        "zh": "美國 EPA 貨運減排與承運商評估計畫。",
        "en": "EPA freight-efficiency and emissions partnership program.",
        "ja": "米EPAの貨物輸送効率化・排出削減制度。"
      }
    },
    {
      "term": {
        "zh": "TMS",
        "en": "TMS",
        "ja": "TMS"
      },
      "def": {
        "zh": "運輸管理系統，用於派車、運價與流程管理。",
        "en": "Transportation management system for planning and execution.",
        "ja": "輸送計画・実行を管理するシステム。"
      }
    },
    {
      "term": {
        "zh": "ELD",
        "en": "ELD",
        "ja": "ELD"
      },
      "def": {
        "zh": "電子行車紀錄裝置，用於工時與合規管理。",
        "en": "Electronic logging device for driver-hours compliance.",
        "ja": "運転時間管理用の電子記録装置。"
      }
    },
    {
      "term": {
        "zh": "AFIR",
        "en": "AFIR",
        "ja": "AFIR"
      },
      "def": {
        "zh": "歐盟替代燃料基礎設施規則。",
        "en": "EU Alternative Fuels Infrastructure Regulation.",
        "ja": "EU代替燃料インフラ規則。"
      }
    }
  ],
  "deliverables": [
    {
      "id": "briefing",
      "title": {
        "zh": "週報 / 月報",
        "en": "Weekly / Monthly Briefing",
        "ja": "週報・月報"
      },
      "desc": {
        "zh": "自動生成市場、法規、競品與物流快報。",
        "en": "Auto-generated briefs on markets, regulation, competitors, and logistics.",
        "ja": "市場・法規・競合・物流の自動レポート。"
      }
    },
    {
      "id": "tco",
      "title": {
        "zh": "TCO 決策板",
        "en": "TCO Decision Board",
        "ja": "TCO意思決定ボード"
      },
      "desc": {
        "zh": "比較柴油、電動、氫能商用車成本。",
        "en": "Compare diesel, battery-electric, and hydrogen vehicle economics.",
        "ja": "ディーゼル・EV・水素車のコスト比較。"
      }
    },
    {
      "id": "concept",
      "title": {
        "zh": "商品企劃卡",
        "en": "Product Concept Sheet",
        "ja": "商品企画シート"
      },
      "desc": {
        "zh": "輸出客群、場景、規格、服務與價值主張。",
        "en": "Generate use-case, customer, spec, service, and value proposition sheets.",
        "ja": "顧客・用途・仕様・サービス・価値提案を整理。"
      }
    },
    {
      "id": "training",
      "title": {
        "zh": "教育訓練包",
        "en": "Training Pack",
        "ja": "教育パック"
      },
      "desc": {
        "zh": "建立教材、測驗、學習路徑與教案。",
        "en": "Build content, quizzes, learning paths, and lesson plans.",
        "ja": "教材・テスト・学習経路を生成。"
      }
    },
    {
      "id": "maintenance",
      "title": {
        "zh": "維修知識庫",
        "en": "Maintenance Knowledge Base",
        "ja": "整備ナレッジベース"
      },
      "desc": {
        "zh": "彙整 SOP、故障樹、案例與零件建議。",
        "en": "Organize SOPs, fault trees, cases, and parts recommendations.",
        "ja": "SOP・故障樹・事例・部品提案を集約。"
      }
    },
    {
      "id": "compliance",
      "title": {
        "zh": "法規預警包",
        "en": "Compliance Alert Pack",
        "ja": "法規アラート"
      },
      "desc": {
        "zh": "追蹤法規變更並輸出清單與比較表。",
        "en": "Track regulation changes and generate checklists and comparisons.",
        "ja": "法規更新を監視し比較表を出力。"
      }
    },
    {
      "id": "marketing",
      "title": {
        "zh": "行銷內容包",
        "en": "Marketing Content Pack",
        "ja": "販促コンテンツ"
      },
      "desc": {
        "zh": "生成主題企劃、客群洞察與通路素材。",
        "en": "Generate themes, customer insights, and channel-ready assets.",
        "ja": "企画テーマ・顧客洞察・販促素材を生成。"
      }
    },
    {
      "id": "dashboard",
      "title": {
        "zh": "主管儀表板",
        "en": "Executive Dashboard",
        "ja": "経営ダッシュボード"
      },
      "desc": {
        "zh": "整合銷量、景氣、風險與投資報酬。",
        "en": "Integrate sales, cycle signals, risk, and ROI indicators.",
        "ja": "販売・景気・リスク・ROIを統合表示。"
      }
    }
  ],
  "businessModules": [
    {
      "id": "training",
      "title": {
        "zh": "教育訓練與知識管理",
        "en": "Training & Knowledge Management",
        "ja": "教育訓練・知識管理"
      },
      "goal": {
        "zh": "把國際商用車情報轉為銷售、維修、商品企劃與主管訓練教材。",
        "en": "Turn global commercial-vehicle intelligence into training for sales, maintenance, product planning, and management.",
        "ja": "国際商用車情報を営業・整備・商品企画・管理職向け教材へ変換。"
      },
      "inputs": [
        "IRU Academy",
        "SAE",
        "TMC",
        "NTEA",
        "OEM Newsroom",
        "TRB/TRID"
      ],
      "outputs": {
        "zh": [
          "課程地圖",
          "教材簡報",
          "題庫",
          "案例討論",
          "新人訓練包"
        ],
        "en": [
          "Curriculum map",
          "Slides",
          "Question bank",
          "Case discussion",
          "Onboarding pack"
        ],
        "ja": [
          "講座地図",
          "教材資料",
          "問題集",
          "事例討論",
          "新人研修パック"
        ]
      },
      "kpi": {
        "zh": "完成率、測驗分數、知識留存率、銷售轉化率",
        "en": "Completion, test scores, retention, sales conversion",
        "ja": "完了率、テスト点、知識定着、販売転換率"
      }
    },
    {
      "id": "engineering",
      "title": {
        "zh": "專業車輛工程知識",
        "en": "Vehicle Engineering Intelligence",
        "ja": "車両工学インテリジェンス"
      },
      "goal": {
        "zh": "整理底盤、動力、電控、ADAS、電動化與架裝技術，支援規格決策。",
        "en": "Organize chassis, powertrain, controls, ADAS, electrification, and body-building knowledge for spec decisions.",
        "ja": "シャシー・動力・電装・ADAS・電動化・架装技術を整理し仕様決定を支援。"
      },
      "inputs": [
        "SAE",
        "UNECE WP.29",
        "NTEA",
        "Motor-FanTECH",
        "Automotive World",
        "OEM Tech Papers"
      ],
      "outputs": {
        "zh": [
          "技術白皮書",
          "規格比較表",
          "架裝限制表",
          "ADAS 功能說明"
        ],
        "en": [
          "Technical briefs",
          "Spec comparison",
          "Upfit constraints",
          "ADAS explainers"
        ],
        "ja": [
          "技術ブリーフ",
          "仕様比較",
          "架装制約表",
          "ADAS説明"
        ]
      },
      "kpi": {
        "zh": "規格完整度、技術風險、開發成本、上市時程",
        "en": "Spec completeness, technical risk, development cost, time-to-market",
        "ja": "仕様完成度、技術リスク、開発費、投入時期"
      }
    },
    {
      "id": "maintenance",
      "title": {
        "zh": "維修保養與售後服務",
        "en": "Maintenance & Aftersales",
        "ja": "整備保守・アフターサービス"
      },
      "goal": {
        "zh": "將維修案例、零件資訊、檢驗規範與遠端診斷資料轉為售後知識庫。",
        "en": "Convert cases, parts, inspection rules, and telematics into an aftersales knowledge base.",
        "ja": "整備事例・部品・検査基準・テレマティクスをアフター知識庫へ変換。"
      },
      "inputs": [
        "TMC",
        "Fleet Maintenance",
        "Fleetio",
        "DEKRA",
        "TÜV",
        "Geotab"
      ],
      "outputs": {
        "zh": [
          "保養 SOP",
          "故障樹",
          "零件需求預測",
          "保固風險報告"
        ],
        "en": [
          "Maintenance SOPs",
          "Fault trees",
          "Parts demand forecast",
          "Warranty risk brief"
        ],
        "ja": [
          "整備SOP",
          "故障ツリー",
          "部品需要予測",
          "保証リスク報告"
        ]
      },
      "kpi": {
        "zh": "停機時間、首次修復率、零件週轉、保固成本",
        "en": "Downtime, first-time fix rate, parts turnover, warranty cost",
        "ja": "稼働停止時間、初回修理率、部品回転、保証費"
      }
    },
    {
      "id": "regulation",
      "title": {
        "zh": "法規、合規與政策預警",
        "en": "Regulation, Compliance & Policy Alerts",
        "ja": "法規・コンプライアンス・政策アラート"
      },
      "goal": {
        "zh": "追蹤安全、排放、充電、工時、職安與型式認證變動，轉成企劃約束條件。",
        "en": "Track safety, emissions, charging, hours, occupational safety, and type-approval changes as planning constraints.",
        "ja": "安全・排出・充電・労働時間・職安・認証変化を企画制約へ変換。"
      },
      "inputs": [
        "UNECE WP.29",
        "FMCSA",
        "CVSA",
        "EUR-Lex",
        "EPA SmartWay",
        "MLIT"
      ],
      "outputs": {
        "zh": [
          "法規雷達",
          "市場准入清單",
          "政策差異表",
          "合規風險矩陣"
        ],
        "en": [
          "Regulatory radar",
          "Market-entry checklist",
          "Policy comparison",
          "Compliance risk matrix"
        ],
        "ja": [
          "法規レーダー",
          "市場参入チェック",
          "政策比較",
          "コンプライアンスリスク表"
        ]
      },
      "kpi": {
        "zh": "法規風險、上市限制、認證成本、罰則暴露",
        "en": "Regulatory risk, launch constraints, certification cost, penalty exposure",
        "ja": "法規リスク、発売制約、認証費、罰則リスク"
      }
    },
    {
      "id": "health",
      "title": {
        "zh": "駕駛健康、工安與安全文化",
        "en": "Driver Health, Safety & Culture",
        "ja": "運転者健康・安全文化"
      },
      "goal": {
        "zh": "整合疲勞、姿勢、熱壓力、工傷與安全駕駛資訊，形成客戶關懷方案。",
        "en": "Integrate fatigue, posture, heat stress, injuries, and safe-driving data into customer-care programs.",
        "ja": "疲労・姿勢・熱ストレス・労災・安全運転を顧客ケア施策に統合。"
      },
      "inputs": [
        "FMCSA",
        "NHTSA",
        "CVSA",
        "TRB",
        "Geotab",
        "Samsara"
      ],
      "outputs": {
        "zh": [
          "健康風險地圖",
          "駕駛訓練",
          "安全宣導",
          "職安提案"
        ],
        "en": [
          "Health-risk map",
          "Driver training",
          "Safety campaign",
          "OHS proposal"
        ],
        "ja": [
          "健康リスク地図",
          "運転者教育",
          "安全啓発",
          "労安提案"
        ]
      },
      "kpi": {
        "zh": "事故率、疲勞事件、駕駛流失率、保險成本",
        "en": "Crash rate, fatigue events, driver turnover, insurance cost",
        "ja": "事故率、疲労事象、離職率、保険費"
      }
    },
    {
      "id": "planning",
      "title": {
        "zh": "商品企劃與場景型產品設計",
        "en": "Product Planning & Scenario Design",
        "ja": "商品企画・シナリオ設計"
      },
      "goal": {
        "zh": "將市場、物流、客戶、TCO、法規與技術洞察轉為車型與服務方案。",
        "en": "Transform market, logistics, customer, TCO, regulation, and technology insights into vehicle and service concepts.",
        "ja": "市場・物流・顧客・TCO・法規・技術洞察を車両・サービス案へ変換。"
      },
      "inputs": [
        "ACEA",
        "OICA",
        "S&P",
        "ACT",
        "BTS FAF",
        "ZETI"
      ],
      "outputs": {
        "zh": [
          "產品概念卡",
          "客群 Persona",
          "規格優先序",
          "服務包設計"
        ],
        "en": [
          "Concept sheet",
          "Customer personas",
          "Spec priorities",
          "Service package"
        ],
        "ja": [
          "コンセプトシート",
          "顧客ペルソナ",
          "仕様優先度",
          "サービスパック"
        ]
      },
      "kpi": {
        "zh": "市場機會、毛利、差異化、導入風險",
        "en": "Market opportunity, gross margin, differentiation, launch risk",
        "ja": "市場機会、粗利、差別化、導入リスク"
      }
    },
    {
      "id": "marketing",
      "title": {
        "zh": "行銷、通路與內容策略",
        "en": "Marketing, Channel & Content Strategy",
        "ja": "マーケティング・販路・コンテンツ戦略"
      },
      "goal": {
        "zh": "把技術、TCO、法規與客戶痛點轉為銷售話術、內容與通路活動。",
        "en": "Turn technology, TCO, regulation, and customer pain points into sales narratives, content, and channel programs.",
        "ja": "技術・TCO・法規・顧客課題を販売トーク・コンテンツ・販路施策に変換。"
      },
      "inputs": [
        "FleetOwner",
        "FreightWaves",
        "OEM News",
        "Geotab",
        "DHL Trend Radar",
        "Customer CRM"
      ],
      "outputs": {
        "zh": [
          "銷售話術",
          "短影音主題",
          "白皮書",
          "活動企劃",
          "名單分群"
        ],
        "en": [
          "Sales talk tracks",
          "Short-video themes",
          "White papers",
          "Campaign plan",
          "Lead segments"
        ],
        "ja": [
          "営業トーク",
          "短編動画テーマ",
          "白書",
          "施策計画",
          "見込み客分類"
        ]
      },
      "kpi": {
        "zh": "觸及、詢問、試乘、報價、成交率",
        "en": "Reach, inquiries, test drives, quotes, conversion",
        "ja": "接触、問い合わせ、試乗、見積、成約率"
      }
    },
    {
      "id": "finance",
      "title": {
        "zh": "財務、經濟與金融分析",
        "en": "Finance, Economics & Mobility Finance",
        "ja": "財務・経済・モビリティ金融"
      },
      "goal": {
        "zh": "整合利率、燃料、殘值、補助、保險與貨運景氣，支援租賃與金融商品。",
        "en": "Combine rates, fuel, residuals, incentives, insurance, and freight cycles for leasing and finance products.",
        "ja": "金利・燃料・残価・補助・保険・物流景気を金融商品設計へ統合。"
      },
      "inputs": [
        "Cass Index",
        "ACT",
        "FTR",
        "BNEF",
        "Company Filings",
        "World Bank"
      ],
      "outputs": {
        "zh": [
          "TCO 模型",
          "租賃方案",
          "敏感度分析",
          "投資回收期",
          "風險定價"
        ],
        "en": [
          "TCO model",
          "Lease plan",
          "Sensitivity analysis",
          "Payback period",
          "Risk pricing"
        ],
        "ja": [
          "TCOモデル",
          "リース案",
          "感度分析",
          "回収期間",
          "リスク価格"
        ]
      },
      "kpi": {
        "zh": "NPV、IRR、回收期、違約風險、保險成本",
        "en": "NPV, IRR, payback, default risk, insurance cost",
        "ja": "NPV、IRR、回収、信用リスク、保険費"
      }
    }
  ],
  "agentRoles": [
    {
      "id": "collector",
      "title": {
        "zh": "情報蒐集 Agent",
        "en": "Signal Collector Agent",
        "ja": "情報収集Agent"
      },
      "task": {
        "zh": "監測多語來源、更新頻率與重要事件。",
        "en": "Monitors multilingual sources, freshness, and important events.",
        "ja": "多言語ソース、更新頻度、重要イベントを監視。"
      }
    },
    {
      "id": "curator",
      "title": {
        "zh": "資料治理 Agent",
        "en": "Data Curator Agent",
        "ja": "データ管理Agent"
      },
      "task": {
        "zh": "去重、分類、標籤化並建立可信度分數。",
        "en": "Deduplicates, classifies, tags, and scores credibility.",
        "ja": "重複除去、分類、タグ付け、信頼度評価を実施。"
      }
    },
    {
      "id": "translator",
      "title": {
        "zh": "多語摘要 Agent",
        "en": "Multilingual Briefing Agent",
        "ja": "多言語要約Agent"
      },
      "task": {
        "zh": "將英文、日文、德文內容轉為三語摘要。",
        "en": "Converts English, Japanese, and German sources into trilingual briefs.",
        "ja": "英日独の情報を3言語要約へ変換。"
      }
    },
    {
      "id": "analyst",
      "title": {
        "zh": "商業分析 Agent",
        "en": "Business Analyst Agent",
        "ja": "事業分析Agent"
      },
      "task": {
        "zh": "建立市場、TCO、競品、需求與風險分析。",
        "en": "Builds market, TCO, competitor, demand, and risk analysis.",
        "ja": "市場、TCO、競合、需要、リスクを分析。"
      }
    },
    {
      "id": "engineer",
      "title": {
        "zh": "車輛工程 Agent",
        "en": "Vehicle Engineering Agent",
        "ja": "車両工学Agent"
      },
      "task": {
        "zh": "整理技術、維修、架裝與法規相容性。",
        "en": "Organizes technology, maintenance, upfit, and regulatory fit.",
        "ja": "技術、整備、架装、法規適合性を整理。"
      }
    },
    {
      "id": "planner",
      "title": {
        "zh": "商品企劃 Agent",
        "en": "Product Planning Agent",
        "ja": "商品企画Agent"
      },
      "task": {
        "zh": "將洞察轉化為產品概念、規格與服務包。",
        "en": "Turns insights into concepts, specs, and service packages.",
        "ja": "洞察をコンセプト、仕様、サービスへ変換。"
      }
    },
    {
      "id": "finance",
      "title": {
        "zh": "財務決策 Agent",
        "en": "Finance Decision Agent",
        "ja": "財務判断Agent"
      },
      "task": {
        "zh": "評估租賃、融資、保險、收益與敏感度。",
        "en": "Assesses leasing, finance, insurance, profit, and sensitivity.",
        "ja": "リース、金融、保険、収益、感度を評価。"
      }
    },
    {
      "id": "publisher",
      "title": {
        "zh": "發布回饋 Agent",
        "en": "Publishing & Feedback Agent",
        "ja": "公開・改善Agent"
      },
      "task": {
        "zh": "產出網站、報告、簡報並追蹤互動回饋。",
        "en": "Publishes sites, reports, and decks, then tracks feedback.",
        "ja": "サイト、報告、資料を公開し反応を追跡。"
      }
    }
  ],
  "sourceRubric": [
    {
      "level": "A",
      "title": {
        "zh": "官方／法規／統計",
        "en": "Official / Regulatory / Statistical",
        "ja": "公式・法規・統計"
      },
      "desc": {
        "zh": "政府、國際組織、法規平台、官方統計。",
        "en": "Government, international bodies, regulatory portals, official statistics.",
        "ja": "政府、国際機関、法規ポータル、公式統計。"
      }
    },
    {
      "level": "B",
      "title": {
        "zh": "協會／學會／研究機構",
        "en": "Associations / Academia / Research",
        "ja": "協会・学会・研究機関"
      },
      "desc": {
        "zh": "產業協會、學會、期刊、研究中心。",
        "en": "Industry associations, academic bodies, journals, and research centers.",
        "ja": "産業協会、学会、学術誌、研究センター。"
      }
    },
    {
      "level": "C",
      "title": {
        "zh": "專業媒體／企業報告",
        "en": "Professional Media / Corporate Reports",
        "ja": "専門メディア・企業資料"
      },
      "desc": {
        "zh": "專業媒體、OEM 年報、技術新聞與市場報導。",
        "en": "Trade media, OEM reports, technical news, and market coverage.",
        "ja": "専門メディア、OEM報告、技術ニュース、市場記事。"
      }
    },
    {
      "level": "D",
      "title": {
        "zh": "付費資料庫／顧問報告",
        "en": "Paid Databases / Consulting Reports",
        "ja": "有料DB・コンサル資料"
      },
      "desc": {
        "zh": "可補足規格、銷售、預測與競品資料，但需標示授權。",
        "en": "Useful for specs, sales, forecasts, and competitors; access rights must be tracked.",
        "ja": "仕様・販売・予測・競合に有用。利用権限の管理が必要。"
      }
    }
  ],
  "analysisCanvas": [
    {
      "id": "market-scan",
      "title": {
        "zh": "市場機會畫布",
        "en": "Market Opportunity Canvas",
        "ja": "市場機会キャンバス"
      },
      "summary": {
        "zh": "整合市場規模、區域熱點、競品與客群痛點，識別成長機會。",
        "en": "Combine market size, regional hotspots, competitors, and customer pain points to identify growth opportunities.",
        "ja": "市場規模・地域機会・競合・顧客課題を統合して成長機会を特定。"
      },
      "blocks": {
        "zh": [
          "市場規模 / CAGR",
          "客群分層",
          "競品地圖",
          "區域機會",
          "客戶痛點",
          "需求證據"
        ],
        "en": [
          "Market size / CAGR",
          "Customer segments",
          "Competitor map",
          "Regional opportunity",
          "Pain points",
          "Demand evidence"
        ],
        "ja": [
          "市場規模 / CAGR",
          "顧客セグメント",
          "競合マップ",
          "地域機会",
          "課題",
          "需要根拠"
        ]
      }
    },
    {
      "id": "tco-canvas",
      "title": {
        "zh": "TCO / 能源轉型畫布",
        "en": "TCO & Energy Transition Canvas",
        "ja": "TCO・エネルギー転換キャンバス"
      },
      "summary": {
        "zh": "比較柴油、電動與氫能之總持有成本、補助、基礎設施與回收期。",
        "en": "Compare diesel, battery-electric, and hydrogen total cost, incentives, infrastructure, and payback.",
        "ja": "ディーゼル・EV・水素の総保有コスト、補助、インフラ、回収期間を比較。"
      },
      "blocks": {
        "zh": [
          "購置成本",
          "能源成本",
          "維修成本",
          "殘值 / 保險",
          "充電 / 加氫",
          "回收期"
        ],
        "en": [
          "Acquisition",
          "Energy cost",
          "Maintenance cost",
          "Residual / insurance",
          "Charging / hydrogen",
          "Payback"
        ],
        "ja": [
          "取得費",
          "エネルギー費",
          "整備費",
          "残価 / 保険",
          "充電 / 水素",
          "回収期間"
        ]
      }
    },
    {
      "id": "compliance-canvas",
      "title": {
        "zh": "法規合規畫布",
        "en": "Compliance Canvas",
        "ja": "コンプライアンスキャンバス"
      },
      "summary": {
        "zh": "對應各市場排放、安全、駕駛工時與認證條件，降低上市風險。",
        "en": "Map emissions, safety, driver-hours, and type-approval requirements by market to reduce launch risk.",
        "ja": "市場別の排出・安全・労働時間・認証要件を整理し導入リスクを低減。"
      },
      "blocks": {
        "zh": [
          "排放要求",
          "安全要求",
          "車重 / 車型限制",
          "認證流程",
          "稽核節點",
          "預警事項"
        ],
        "en": [
          "Emissions",
          "Safety",
          "Vehicle-class limits",
          "Approval flow",
          "Audit checkpoints",
          "Alerts"
        ],
        "ja": [
          "排出要件",
          "安全要件",
          "車種制約",
          "認証フロー",
          "監査点",
          "警告事項"
        ]
      }
    },
    {
      "id": "service-canvas",
      "title": {
        "zh": "售後與維修畫布",
        "en": "Aftersales & Maintenance Canvas",
        "ja": "アフターサービス・整備キャンバス"
      },
      "summary": {
        "zh": "聚焦停機、零件、故障與保養資料，支援服務商品設計。",
        "en": "Focus on downtime, parts, failures, and maintenance data to design service offerings.",
        "ja": "停止時間・部品・故障・整備データからサービス商品を設計。"
      },
      "blocks": {
        "zh": [
          "高故障件",
          "保養週期",
          "維修能力",
          "零件供應",
          "遠端診斷",
          "服務商機"
        ],
        "en": [
          "Failure hotspots",
          "Service cycles",
          "Workshop capability",
          "Parts supply",
          "Remote diagnostics",
          "Service revenue"
        ],
        "ja": [
          "故障頻発部位",
          "整備周期",
          "工場能力",
          "部品供給",
          "遠隔診断",
          "収益機会"
        ]
      }
    },
    {
      "id": "go-to-market",
      "title": {
        "zh": "行銷通路畫布",
        "en": "Go-to-Market Canvas",
        "ja": "Go-to-Market キャンバス"
      },
      "summary": {
        "zh": "把客群、價值主張、通路與內容主題系統化，提升線索與成交。",
        "en": "Systematize users, value propositions, channels, and content themes to improve leads and conversion.",
        "ja": "顧客・価値提案・販路・コンテンツを体系化し成約を高める。"
      },
      "blocks": {
        "zh": [
          "目標客群",
          "價值主張",
          "通路角色",
          "內容主題",
          "活動節點",
          "KPI"
        ],
        "en": [
          "Target users",
          "Value proposition",
          "Channel roles",
          "Content themes",
          "Campaign moments",
          "KPIs"
        ],
        "ja": [
          "対象顧客",
          "価値提案",
          "販路役割",
          "コンテンツ",
          "施策時点",
          "KPI"
        ]
      }
    },
    {
      "id": "finance-risk",
      "title": {
        "zh": "財務與風險畫布",
        "en": "Finance & Risk Canvas",
        "ja": "財務・リスクキャンバス"
      },
      "summary": {
        "zh": "連結利率、殘值、保險、貨運景氣與租賃條件，支援投資決策。",
        "en": "Link rates, residuals, insurance, freight cycles, and lease conditions to support investment decisions.",
        "ja": "金利・残価・保険・物流景気・リース条件を接続して投資判断を支援。"
      },
      "blocks": {
        "zh": [
          "資本成本",
          "租賃條件",
          "保險風險",
          "殘值假設",
          "景氣循環",
          "敏感度分析"
        ],
        "en": [
          "Cost of capital",
          "Lease terms",
          "Insurance risk",
          "Residual assumptions",
          "Business cycle",
          "Sensitivity"
        ],
        "ja": [
          "資本コスト",
          "リース条件",
          "保険リスク",
          "残価仮定",
          "景気循環",
          "感度分析"
        ]
      }
    }
  ],
  "playbooks": [
    {
      "id": "sales-enablement",
      "title": {
        "zh": "銷售賦能 Playbook",
        "en": "Sales Enablement Playbook",
        "ja": "営業支援プレイブック"
      },
      "summary": {
        "zh": "從市場情報轉成銷售話術、FAQ、案例與競品比較。",
        "en": "Transform 市場情報轉成銷售話術、FAQ、案例 and 競品比較。",
        "ja": "営業支援プレイブックの概要"
      },
      "steps": {
        "zh": [
          "蒐集證據",
          "建立分析框架",
          "輸出模板",
          "交付內部團隊",
          "追蹤成效"
        ],
        "en": [
          "Collect evidence",
          "Build analysis frame",
          "Generate templates",
          "Deliver to internal teams",
          "Track outcomes"
        ],
        "ja": [
          "根拠収集",
          "分析枠組み作成",
          "テンプレート出力",
          "社内展開",
          "効果追跡"
        ]
      }
    },
    {
      "id": "training-ops",
      "title": {
        "zh": "教育訓練 Playbook",
        "en": "Training Operations Playbook",
        "ja": "教育運用プレイブック"
      },
      "summary": {
        "zh": "建立角色別課程地圖、教材、測驗與追蹤機制。",
        "en": "Build 角色別課程地圖、教材、測驗 and 追蹤機制。",
        "ja": "教育運用プレイブックの概要"
      },
      "steps": {
        "zh": [
          "蒐集證據",
          "建立分析框架",
          "輸出模板",
          "交付內部團隊",
          "追蹤成效"
        ],
        "en": [
          "Collect evidence",
          "Build analysis frame",
          "Generate templates",
          "Deliver to internal teams",
          "Track outcomes"
        ],
        "ja": [
          "根拠収集",
          "分析枠組み作成",
          "テンプレート出力",
          "社内展開",
          "効果追跡"
        ]
      }
    },
    {
      "id": "service-design",
      "title": {
        "zh": "售後服務設計 Playbook",
        "en": "Service Design Playbook",
        "ja": "アフター設計プレイブック"
      },
      "summary": {
        "zh": "依故障、零件與停機風險設計保養與服務方案。",
        "en": "Design 故障、零件 and 停機風險設計保養 and 服務方案。",
        "ja": "アフター設計プレイブックの概要"
      },
      "steps": {
        "zh": [
          "蒐集證據",
          "建立分析框架",
          "輸出模板",
          "交付內部團隊",
          "追蹤成效"
        ],
        "en": [
          "Collect evidence",
          "Build analysis frame",
          "Generate templates",
          "Deliver to internal teams",
          "Track outcomes"
        ],
        "ja": [
          "根拠収集",
          "分析枠組み作成",
          "テンプレート出力",
          "社内展開",
          "効果追跡"
        ]
      }
    },
    {
      "id": "ev-transition",
      "title": {
        "zh": "新能源轉型 Playbook",
        "en": "Energy Transition Playbook",
        "ja": "エネルギー転換プレイブック"
      },
      "summary": {
        "zh": "針對 EV / 氫能導入建立情境、成本與基礎設施分析。",
        "en": "Build  EV / 氫能導入Build 情境、成本 and 基礎設施分析。",
        "ja": "エネルギー転換プレイブックの概要"
      },
      "steps": {
        "zh": [
          "蒐集證據",
          "建立分析框架",
          "輸出模板",
          "交付內部團隊",
          "追蹤成效"
        ],
        "en": [
          "Collect evidence",
          "Build analysis frame",
          "Generate templates",
          "Deliver to internal teams",
          "Track outcomes"
        ],
        "ja": [
          "根拠収集",
          "分析枠組み作成",
          "テンプレート出力",
          "社内展開",
          "効果追跡"
        ]
      }
    },
    {
      "id": "compliance-watch",
      "title": {
        "zh": "法規監測 Playbook",
        "en": "Compliance Watch Playbook",
        "ja": "法規監視プレイブック"
      },
      "summary": {
        "zh": "將法規變更轉為市場准入與產品變更任務清單。",
        "en": "Turn 法規變更轉為市場准入 and 產品變更任務清單。",
        "ja": "法規監視プレイブックの概要"
      },
      "steps": {
        "zh": [
          "蒐集證據",
          "建立分析框架",
          "輸出模板",
          "交付內部團隊",
          "追蹤成效"
        ],
        "en": [
          "Collect evidence",
          "Build analysis frame",
          "Generate templates",
          "Deliver to internal teams",
          "Track outcomes"
        ],
        "ja": [
          "根拠収集",
          "分析枠組み作成",
          "テンプレート出力",
          "社内展開",
          "効果追跡"
        ]
      }
    },
    {
      "id": "finance-design",
      "title": {
        "zh": "金融商品設計 Playbook",
        "en": "Mobility Finance Playbook",
        "ja": "金融商品プレイブック"
      },
      "summary": {
        "zh": "將 TCO、殘值與風險轉化為租賃、保險與融資方案。",
        "en": "Turn  TCO、殘值 and 風險into 租賃、保險 and 融資方案。",
        "ja": "金融商品プレイブックの概要"
      },
      "steps": {
        "zh": [
          "蒐集證據",
          "建立分析框架",
          "輸出模板",
          "交付內部團隊",
          "追蹤成效"
        ],
        "en": [
          "Collect evidence",
          "Build analysis frame",
          "Generate templates",
          "Deliver to internal teams",
          "Track outcomes"
        ],
        "ja": [
          "根拠収集",
          "分析枠組み作成",
          "テンプレート出力",
          "社内展開",
          "効果追跡"
        ]
      }
    }
  ],
  "caseStudies": [
    {
      "id": "cold-chain-ev-van",
      "title": {
        "zh": "冷鏈電動廂型車企劃",
        "en": "Cold-Chain EV Van Concept",
        "ja": "コールドチェーンEVバン企画"
      },
      "scenario": {
        "zh": "都會生鮮、醫藥與低溫配送需要低噪音、低排放且可監控溫度的車隊。",
        "en": "Urban fresh food, pharma, and chilled delivery need low-noise, low-emission, temperature-monitored fleets.",
        "ja": "都市部の生鮮・医薬・低温配送には低騒音・低排出・温度監視が必要。"
      },
      "insight": {
        "zh": "結合城市物流、能源補助、冷鏈痛點與遠端監控資料。",
        "en": "Combines city logistics, incentives, cold-chain pain points, and telematics.",
        "ja": "都市物流、補助金、低温物流課題、テレマティクスを統合。"
      },
      "product": {
        "zh": "電動廂型車＋保冷箱體＋溫度 IoT＋保養租賃包。",
        "en": "EV van + insulated body + temperature IoT + maintenance lease package.",
        "ja": "EVバン＋保冷ボディ＋温度IoT＋整備リースパック。"
      },
      "kpi": {
        "zh": "配送準時率、溫控異常率、TCO、碳排下降。",
        "en": "On-time rate, temperature excursions, TCO, emissions reduction.",
        "ja": "定時率、温度逸脱、TCO、排出削減。"
      }
    },
    {
      "id": "urban-last-mile",
      "title": {
        "zh": "都會末端配送車隊方案",
        "en": "Urban Last-Mile Fleet Package",
        "ja": "都市ラストマイル車隊方案"
      },
      "scenario": {
        "zh": "電商與零售通路面臨高頻配送、停車困難與駕駛流失。",
        "en": "E-commerce and retail fleets face high-frequency delivery, curb constraints, and driver turnover.",
        "ja": "EC・小売車隊は高頻度配送、停車制約、運転者離職に直面。"
      },
      "insight": {
        "zh": "分析貨運需求、車格限制、路線密度與駕駛安全事件。",
        "en": "Analyzes freight demand, vehicle-size constraints, route density, and safety events.",
        "ja": "貨物需要、車格制約、ルート密度、安全事象を分析。"
      },
      "product": {
        "zh": "小型商用車＋路線最佳化＋ADAS 安全包＋駕駛訓練。",
        "en": "Compact commercial vehicle + routing + ADAS package + driver training.",
        "ja": "小型商用車＋ルート最適化＋ADAS安全パック＋運転教育。"
      },
      "kpi": {
        "zh": "單趟件數、事故率、油耗/電耗、駕駛留任。",
        "en": "Parcels per route, crash rate, energy use, driver retention.",
        "ja": "1便あたり個数、事故率、エネルギー、定着率。"
      }
    },
    {
      "id": "construction-materials",
      "title": {
        "zh": "工地建材運輸方案",
        "en": "Construction Materials Transport Plan",
        "ja": "建材輸送プラン"
      },
      "scenario": {
        "zh": "營建客戶需要高承載、耐用、維修便利與安全上裝整合。",
        "en": "Construction customers need payload, durability, easy service, and safe body integration.",
        "ja": "建設顧客は積載、耐久、整備性、安全な架装統合を重視。"
      },
      "insight": {
        "zh": "整合上裝法規、車重限制、維修停機與零件供應。",
        "en": "Integrates body regulations, weight limits, downtime, and parts supply.",
        "ja": "架装法規、重量制限、停止時間、部品供給を統合。"
      },
      "product": {
        "zh": "中型卡車＋強化底盤＋特裝合作商＋預防保養方案。",
        "en": "Medium-duty truck + reinforced chassis + upfit partner + preventive maintenance.",
        "ja": "中型トラック＋強化シャシー＋架装業者＋予防整備。"
      },
      "kpi": {
        "zh": "載重效率、停機天數、維修成本、工安事件。",
        "en": "Payload efficiency, downtime days, service cost, safety incidents.",
        "ja": "積載効率、停止日数、整備費、安全事象。"
      }
    },
    {
      "id": "long-haul-hydrogen",
      "title": {
        "zh": "長途幹線氫能重卡構想",
        "en": "Long-Haul Hydrogen Truck Concept",
        "ja": "長距離水素大型トラック構想"
      },
      "scenario": {
        "zh": "長距離幹線運輸重視續航、加注時間、載重與排放政策。",
        "en": "Line-haul logistics depend on range, refueling time, payload, and emissions policy.",
        "ja": "幹線輸送は航続距離、充填時間、積載、排出政策が重要。"
      },
      "insight": {
        "zh": "比較電動、氫能、柴油在路線、能源、補助與基礎設施差異。",
        "en": "Compares BEV, hydrogen, and diesel across routes, energy, incentives, and infrastructure.",
        "ja": "BEV・水素・ディーゼルを路線、エネルギー、補助、インフラで比較。"
      },
      "product": {
        "zh": "氫能重卡＋幹線試點＋加氫合作＋金融風險共擔方案。",
        "en": "Hydrogen truck + corridor pilot + refueling partnership + shared-risk finance.",
        "ja": "水素大型車＋幹線実証＋充填連携＋リスク共有金融。"
      },
      "kpi": {
        "zh": "續航可用率、能源成本、載重損失、碳費風險。",
        "en": "Range availability, energy cost, payload penalty, carbon-cost risk.",
        "ja": "航続利用率、エネルギー費、積載損失、炭素費リスク。"
      }
    },
    {
      "id": "municipal-ebus",
      "title": {
        "zh": "城市電動巴士更新企劃",
        "en": "Municipal Electric Bus Renewal Plan",
        "ja": "都市電動バス更新企画"
      },
      "scenario": {
        "zh": "地方政府與客運業者面對淨零、空污、補助與營運可靠度壓力。",
        "en": "Municipalities and operators face net-zero, air-quality, subsidy, and reliability pressures.",
        "ja": "自治体と事業者は脱炭素、空気質、補助、信頼性に直面。"
      },
      "insight": {
        "zh": "整合路線里程、班距、充電排程、電池壽命與補助條件。",
        "en": "Combines route distance, headway, charging schedules, battery life, and incentives.",
        "ja": "路線距離、運行間隔、充電計画、電池寿命、補助条件を統合。"
      },
      "product": {
        "zh": "電動巴士＋場站充電＋電池保固＋司機教育包。",
        "en": "E-bus + depot charging + battery warranty + driver training package.",
        "ja": "電動バス＋車庫充電＋電池保証＋運転教育パック。"
      },
      "kpi": {
        "zh": "準班率、能源成本、電池健康、乘客滿意度。",
        "en": "Schedule adherence, energy cost, battery health, passenger satisfaction.",
        "ja": "定時性、エネルギー費、電池健全性、乗客満足。"
      }
    },
    {
      "id": "mobile-service-truck",
      "title": {
        "zh": "行動維修服務車方案",
        "en": "Mobile Service Truck Program",
        "ja": "移動整備サービス車方案"
      },
      "scenario": {
        "zh": "車隊客戶需要降低進廠時間，提升現場快速修復能力。",
        "en": "Fleet customers need less workshop downtime and faster on-site repairs.",
        "ja": "車隊顧客は入庫時間を減らし現場修理力を高めたい。"
      },
      "insight": {
        "zh": "依據故障熱點、保養週期、零件周轉與區域服務密度設計。",
        "en": "Designed from failure hotspots, service cycles, parts turnover, and service density.",
        "ja": "故障頻発、整備周期、部品回転、地域サービス密度から設計。"
      },
      "product": {
        "zh": "行動維修車＋工具模組＋技師派工＋遠端診斷平台。",
        "en": "Mobile service truck + tool modules + technician dispatch + remote diagnostics.",
        "ja": "移動整備車＋工具モジュール＋技師派遣＋遠隔診断。"
      },
      "kpi": {
        "zh": "現場修復率、停機時間、服務收入、客戶續約。",
        "en": "On-site fix rate, downtime, service revenue, renewal rate.",
        "ja": "現場修理率、停止時間、サービス収益、契約更新。"
      }
    }
  ]
};
