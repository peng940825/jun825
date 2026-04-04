import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Image
        src="/images/resume/avatar.webp"
        className="self-center rounded-full md:self-start"
        width={96}
        height={96}
        priority
        alt="彭靖鈞"
      />

      <div className="min-w-0 flex-1 space-y-4">
        <div>
          <h1 className="text-3xl font-semibold">彭靖鈞 Jun</h1>
          <p className="text-muted-foreground">Front-End Engineer</p>
        </div>

        <ul className="list-disc pl-4">
          <li>5 年前端開發經驗，深耕 React 與 Vue 現代化生態系</li>
          <li>
            具備博弈、醫療、數位內容電商等開發背景，擅長處理複雜業務需求與重構任務
          </li>
          <li>
            追求高品質程式碼，以極簡邏輯確保系統易讀易維護，並藉由彈性設計支援業務擴張
          </li>
        </ul>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="shrink-0" size="16" />
            <span>Taipei City, Taiwan</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="shrink-0" size="16" />
            <a href="tel:+886916008657" className="hover:underline">
              +886 916 008 657
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="shrink-0" size="16" />
            <a href="mailto:peng940825@gmail.com" className="hover:underline">
              peng940825@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
