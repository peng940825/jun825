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

        <p>
          五年前端工程師，熟悉 React 與 Vue 生態系，橫跨電商、醫療、SaaS
          等多元產業。擅長在既有專案中推動架構現代化，具備多次大型系統從舊技術棧遷移至現代化架構的實戰經驗，並對程式碼品質與系統可擴充性有高度要求，能在快速迭代的商業環境中持續交付高品質且穩定的產品。
        </p>

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
