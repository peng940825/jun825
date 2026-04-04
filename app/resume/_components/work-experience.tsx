import WorkExperienceItem from "./work-experience-item";

const WorkExperience = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Work Experience</h2>

      <div className="grid gap-8">
        <WorkExperienceItem
          logo="/images/resume/new-digit.webp"
          company="新數字有限公司"
          period="2025/4 - 2025/10"
          description="iGaming SaaS 解決方案提供商，核心產品為支援多品牌部署與高度自定義樣式之包網平台系統"
          highlights={[
            "於 SSR 階段實作 Configuration-driven 元件映射機制，達成 Single Codebase 支援多品牌與多版型分發之高擴充性架構",
            "採用 Zod 與 React Hook Form 建立 Schema 驗證機制，強化前端資料流之一致性與複雜業務表單之驗證精準度",
            "負責閃兌交易、多幣種資產管理等功能開發；並導入 Husky 建立 Git Hooks 自動化流程，確保團隊程式碼提交品質",
            "使用 lottie-react 實作向量動態 UI 元件並搭配自定義音效腳本，針對不同品牌需求打造具備感官反饋之微交互效果",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/axiom.webp"
          company="艾克森科技有限公司"
          period="2024/5 - 2025/3"
          description="博弈系統開發商，產品涵蓋真人視訊遊戲、包網服務平台及大型後台管理系統"
          highlights={[
            "維護 H5 遊戲前台並開發籌碼盒等互動模組，透過 Virtual Scroll 優化渲染效能，有效降低行動端渲染大量 DOM 節點的硬體負荷，大幅提升列表互動的流暢度",
            "參與後台管理系統重構，將既有 JS 程式碼全面遷移至 TS，透過定義明確的資料結構強化專案重構時的程式碼可預測性與型別安全性",
            "於同專案導入 Vue3 與 Pinia，利用 Composition API 將碎片化的 Options API 按功能模組重新編排，達成高度的關注點分離原則",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/lctech.webp"
          company="雷麒科技有限公司"
          period="2021/7 - 2024/5"
          description="JVID (JKF 旗下) 數位內容電商平台，提供創作者上傳影音與寫真作品並販售給消費者之交易服務"
          highlights={[
            "參與將既有 PHP 專案重構為前後端分離架構，並於後續執行 Nuxt 2 升級至 Nuxt 3 的轉型任務，處理跨版本外掛相容性與路由重構",
            "開發 WebSocket 即時聊天室與優化 Video.js 播放控制流程以提升觀影體驗；並負責導入 GA4 埋點機制，透過數據監控提供產品優化依據",
            "利用 Windi CSS 建立原子化樣式規範並落實跨裝置 RWD 佈局優化，確保主站介面呈現之一致性與開發維護效率",
            "實作行銷活動專案解耦架構，利用 Node.js 分發機制結合 Web Components 封裝通用元件，實現跨技術堆疊的元件複用與核心功能共享",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/verdant-sparks.webp"
          company="台灣蘢想有限公司"
          period="2020/3 - 2020/8"
          description="跨平台寵物醫療資訊系統 (HIS)，支援多裝置應用以提升院所資訊化效率"
          highlights={[
            "使用 Vue Native 與 Electron 開發跨平台應用，並整合 API 實現多端數據同步，滿足行動端作業與桌面端管理之需求",
            "導入 TypeScript 與 Jest 撰寫單元測試，透過強型別約束與自動化測試確保醫療系統功能穩定性，提升程式碼可維護性與開發品質",
            "執行 Adobe XD 介面設計並定義通用元件規格，從前端開發視角優化 UI 流程，並實現高複用性元件庫以加速多端介面之整合開發",
          ]}
        />

        <WorkExperienceItem
          logo="/images/resume/advmeds.webp"
          company="先進醫資股份有限公司"
          period="2019/3 - 2020/3"
          description="雲端醫療資訊平台 (HIS)，支援多院所跨機構協作與客製化需求模組"
          highlights={[
            "使用 Vue 2 與 SASS 開發高複用性前端元件，並整合 API 實現診間叫號與問卷系統，產出靜態資源供後端系統整合",
            "與設計師協作實現 RWD 佈局，並解決跨瀏覽器相容性問題，確保醫療系統在不同硬體環境下的操作穩定性",
          ]}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
