"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { useState, useEffect, startTransition } from "react";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  return (
    mounted && (
      <Button
        size="icon"
        variant="secondary"
        className="fixed right-4 bottom-4"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? <MoonStar /> : <Sun />}
      </Button>
    )
  );
};

export default ThemeToggle;
