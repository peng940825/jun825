import WorkExperienceItem from "./work-experience-item";

const WorkExperience = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Work Experience</h2>

      <div className="grid gap-8">
        <WorkExperienceItem
          logo="/images/resume/veda.webp"
          company="微達軟體有限公司"
          period="2025/10 - 至今"
          description="韓國博弈論壇平台，提供用戶社群討論與內容聚合服務，接手前人專案進行前端效能優化與技術債清理"
          highlights={[
            "依據 Ahrefs 健康分析報告，修正重複頁面缺少 canonical 標籤、title 缺失及無對外連結等問題，將全站 SEO 健康分數從 55 提升至 100",
            "以全站樣式改版為起點從零重建首頁，採 Layout-agnostic 元件設計原則，透過單一 Composable 集中資料邏輯，將 UI 與業務邏輯完全解耦，降低後續維護成本",
            "將第三方腳本統一以 Plugin 機制管理，推遲至使用者互動後才開始下載與執行，確保首屏渲染不受外部腳本干擾，TBT 從 140ms 降至 20ms",
            "針對 SSR 渲染行為調整資料預取策略，確保伺服器端內容完整輸出，FCP 從 2.4s 降至 0.8s、LCP 從 4.7s 降至 1.4s，Performance 分數從 57 提升至 88；並就 CSR 導航情境實作 Skeleton Screen，消除過渡期的視覺斷層",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/new-digit.webp"
          company="新數字有限公司"
          period="2025/4 - 2025/10"
          description="提供多品牌白標部署解決方案的 SaaS 服務商，核心產品支援高度客製化樣式與版型配置"
          highlights={[
            "於 SSR 階段實作 Configuration-driven 元件映射機制，達成 Single Codebase 支援多品牌與多版型分發之高擴充性架構",
            "採用 Zod 與 React Hook Form 建立 Schema 驗證機制，確保複雜業務場景下的資料正確性",
            "負責閃兌交易、多幣種資產管理等核心功能開發，處理幣種換算邏輯與資產狀態的同步管理",
            "實作 WebSocket 即時聊天室，支援頻道切換與多人對話，整合 Exponential Backoff 重連策略與 heartbeat watchdog 機制，確保連線穩定性",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/axiom.webp"
          company="艾克森科技有限公司"
          period="2024/5 - 2025/3"
          description="博弈系統開發商，產品涵蓋真人視訊遊戲前台、大型後台管理系統及多元金融服務模組"
          highlights={[
            "開發互動模組並導入 Virtual Scroll 優化渲染效能，降低行動端渲染大量 DOM 節點的效能負擔，提升列表互動流暢度",
            "參與後台管理系統重構，將既有 JS 程式碼全面遷移至 TS，透過定義明確的資料結構強化專案重構時的程式碼可預測性與型別安全性",
            "於同專案導入 Vue3 與 Pinia，以 Composition API 將碎片化的 Options API 按功能模組重新整合，提升程式碼的內聚性與可維護性",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/lctech.webp"
          company="雷麒科技有限公司"
          period="2021/7 - 2024/5"
          description="JVID 數位內容電商平台，提供創作者上傳影音作品並販售給消費者之交易服務"
          highlights={[
            "負責將既有 PHP 專案重構為前後端分離架構，並執行 Nuxt 2 升級至 Nuxt 3 的遷移任務，處理跨版本外掛相容性與路由重構",
            "接手並優化 Video.js 的播放體驗，修正列表頁預先載入影片資源導致行動端記憶體溢出的 crash 問題，改為用戶觸發播放時才載入；並整合自動畫質調整機制，依據網路狀況動態切換串流品質",
            "導入 GA4 埋點機制，建立用戶行為數據追蹤架構，為產品迭代提供量化決策依據",
            "設計活動網站多框架共存架構，以獨立資料夾隔離各活動專案，透過 Node.js 路由層統一分發靜態資源，並將共用 Header 封裝為 Web Component 供各技術棧引用",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/verdant-sparks.webp"
          company="台灣蘢想有限公司"
          period="2020/3 - 2020/8"
          description="跨平台寵物醫療資訊系統 (HIS)，支援多裝置應用以提升院所資訊化效率"
          highlights={[
            "使用 Vue Native 與 Electron 開發跨平台應用，整合 API 實現多端數據同步，覆蓋行動端與桌面端的操作情境",
            "導入 TypeScript 與 Jest 撰寫單元測試，以強型別約束降低執行期錯誤，並透過自動化測試覆蓋核心業務邏輯",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/advmeds.webp"
          company="先進醫資股份有限公司"
          period="2019/3 - 2020/3"
          description="雲端醫療資訊平台 (HIS)，支援多院所跨機構協作與客製化需求模組"
          highlights={[
            "主動提出將前端模組打包為靜態資源嵌入 C# 專案的整合方案，獨立開發診間叫號與問卷等功能模組，實現前後端技術棧的低耦合整合",
          ]}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
