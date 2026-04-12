import SkillGroup from "./skill-group";

const Skills = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <SkillGroup
          title="Languages & Frameworks"
          items={[
            "TypeScript / JavaScript (ES6+)",
            "React / Next.js (App Router, API Routes)",
            "Vue / Nuxt 2 & 3 (Migration)",
            "Zustand / Pinia",
            "Tailwind CSS / shadcn/ui",
          ]}
        />

        <SkillGroup
          title="Tooling & Workflow"
          items={[
            "Git Flow & CI (GitLab CI / GitHub Actions)",
            "Husky / lint-staged",
            "Unit Testing (Jest / Vitest)",
          ]}
        />

        <SkillGroup
          title="Architecture & Optimization"
          items={[
            "Zod / React Hook Form / React Query",
            "Multi-brand Architecture",
            "WebSocket",
            "Technical SEO",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
