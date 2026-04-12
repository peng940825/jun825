import Header from "./_components/header";
import Skills from "./_components/skills";
import WorkExperience from "./_components/work-experience";
import Education from "./_components/education";

export const metadata = {
  title: "Resume | Jun",
  description:
    "彭靖鈞，五年前端工程師，專注 React 與 Vue 生態系，橫跨電商、醫療、SaaS 等多元產業。擅長在既有專案中推動架構現代化，具備多次大型系統從舊技術棧遷移至現代化架構的實戰經驗",
};

const Resume = () => {
  return (
    <main className="mx-auto max-w-5xl md:p-8">
      <div className="bg-card space-y-8 py-8 pr-6 pl-4 md:rounded-sm md:border md:pr-16 md:pl-8">
        <Header />
        <Skills />
        <WorkExperience />
        <Education />
      </div>
    </main>
  );
};

export default Resume;
