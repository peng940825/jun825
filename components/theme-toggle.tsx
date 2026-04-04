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
        className="fixed right-3 bottom-3"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <MoonStar /> : <Sun />}
      </Button>
    )
  );
};

export default ThemeToggle;
