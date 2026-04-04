import Header from "./_components/header";
import Skills from "./_components/skills";
import WorkExperience from "./_components/work-experience";
import Education from "./_components/education";

export const metadata = {
  title: "Resume | Jun",
  description:
    "彭靖鈞，5 年前端開發經驗，深耕 React 與 Vue 現代化生態系。具備博弈、醫療、數位內容電商等開發背景。",
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
