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
          description="韓國博弈論壇平台，提供用戶社群討論與內容聚合服務"
          highlights={[
            "依據 Ahrefs 健康分析報告逐項修正技術問題，將全站 SEO 健康分數從 55 提升至 100",
            "以全站樣式改版為起點從零重建首頁，採 Layout-agnostic 元件設計原則，資料層透過單一 Composable 集中處理，達成 UI 與邏輯的關注點分離",
            "針對 SSR 渲染行為調整資料預取策略，確保伺服器端內容完整輸出以改善 FCP 與 LCP 指標；並就 CSR 導航情境實作 Skeleton Screen，提升導航過渡的視覺連續性",
            "將第三方腳本統一以 Plugin 機制管理，推遲至使用者互動後才開始下載與執行，確保首屏渲染不受外部腳本干擾，有效降低主執行緒阻塞時間",
            "透過系統性分析 Lighthouse 報告，將 Performance 分數從平均 60 提升至 80 以上",
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
            "負責閃兌交易、多幣種資產管理等核心功能開發，處理幣種換算邏輯與資產狀態同步管理",
            "導入 Husky 建立 Git Hooks 自動化流程，統一團隊程式碼提交規範與品質檢查機制",
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
            "開發 WebSocket 即時聊天室並優化 Video.js 播放控制流程，提升平台核心觀影與互動體驗",
            "導入 GA4 埋點機制，建立用戶行為數據追蹤架構，為產品迭代提供量化決策依據",
            "設計行銷活動模組的跨技術棧共享架構，以 Node.js 作為分發層結合 Web Components 封裝通用元件，實現核心邏輯在不同技術棧間的複用",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/verdant-sparks.webp"
          company="台灣蘢想有限公司"
          period="2020/3 - 2020/8"
          description="跨平台寵物醫療資訊系統 (HIS)，支援多裝置應用以提升院所資訊化效率"
          highlights={[
            "使用 Vue Native 與 Electron 開發跨平台應用，整合 API 實現多端數據同步，覆蓋行動端與桌面端的操作情境",
            "導入 TypeScript 與 Jest 撰寫單元測試，透過強型別約束與自動化測試確保醫療系統功能穩定性，提升程式碼可維護性與開發品質",
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
