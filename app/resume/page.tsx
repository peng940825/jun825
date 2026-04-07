import Header from "./_components/header";
import Skills from "./_components/skills";
import WorkExperience from "./_components/work-experience";
import Education from "./_components/education";

export const metadata = {
  title: "Resume | Jun",
  description:
    "5 年前端開發經驗，專注 React 與 Vue 生態系，具備電商、醫療、SaaS 等多產業開發背景",
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
