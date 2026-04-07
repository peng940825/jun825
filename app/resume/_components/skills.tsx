import SkillGroup from "./skill-group";

const Skills = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <SkillGroup
          title="Development"
          items={[
            "TypeScript / JavaScript (ES6+)",
            "React / Next.js (App Router, API Routes)",
            "Vue / Nuxt 2 & 3 (Migration)",
            "Zustand / Pinia",
            "Vite",
          ]}
        />

        <SkillGroup
          title="Engineering"
          items={[
            "Git Flow & CI (GitHub Actions / GitLab CI)",
            "Husky / lint-staged",
            "Unit Testing (Jest / Vitest)",
          ]}
        />

        <SkillGroup
          title="UI & Integration"
          items={["Tailwind CSS / shadcn/ui", "WebSocket"]}
        />

        <SkillGroup
          title="Architecture & Optimization"
          items={[
            "Zod / React Hook Form / React Query",
            "Technical SEO",
            "Dynamic Multi-brand Configuration Architecture",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
