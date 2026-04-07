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
          <li>
            5 年前端開發經驗，專注 React 與 Vue 生態系，具備電商、醫療、SaaS
            等多產業開發背景
          </li>
          <li>
            擅長跨框架重構與系統遷移，累積多次大型專案由舊架構轉型至現代化技術棧的實戰經驗
          </li>
          <li>
            重視程式碼可維護性與擴充彈性，能在業務快速迭代的環境下持續交付穩定品質
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
