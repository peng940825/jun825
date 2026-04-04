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
          ]}
        />

        <SkillGroup
          title="Engineering"
          items={[
            "Git Flow & CI (GitHub Actions / GitLab CI)",
            "Vite / Husky / lint-staged",
            "Unit Testing (Jest)",
          ]}
        />

        <SkillGroup
          title="UI & Integration"
          items={[
            "Tailwind CSS / shadcn/ui",
            "Nuxt UI / Element UI",
            "Video Playback & Streaming Optimization",
            "Real-time Data Synchronization via WebSocket",
          ]}
        />

        <SkillGroup
          title="Architecture & Optimization"
          items={[
            "Zod / React Hook Form / TanStack Query",
            "Technical SEO (Ahrefs Health Score: 54 to 100)",
            "Dynamic Multi-brand Configuration Architecture",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
