"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  createDOMRenderer,
  FluentProvider,
  RendererProvider,
  renderToStyleElements,
  SSRProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";

export type ThemeMode = "dark" | "light";

const ThemeContext = React.createContext<{ mode: ThemeMode; toggle: () => void }>({
  mode: "dark",
  toggle: () => {},
});
export const useThemeMode = () => React.useContext(ThemeContext);

const STORAGE_KEY = "theme";

/**
 * Fluent UI v9 + Next.js App Router: render Griffel styles on the server
 * (so the static export ships with CSS in place), then hydrate on the client.
 * Dark is the default theme; the visitor's choice is remembered.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [renderer] = React.useState(() => createDOMRenderer());
  const didRenderRef = React.useRef(false);
  const [mode, setMode] = React.useState<ThemeMode>("dark");

  useServerInsertedHTML(() => {
    if (didRenderRef.current) return;
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  React.useEffect(() => {
    if (document.documentElement.dataset.theme === "light") setMode("light");
  }, []);

  const toggle = React.useCallback(() => {
    setMode((m) => {
      const next: ThemeMode = m === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable: choice lasts for this visit only */
      }
      return next;
    });
  }, []);

  const value = React.useMemo(() => ({ mode, toggle }), [mode, toggle]);

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <ThemeContext.Provider value={value}>
          <FluentProvider
            theme={mode === "dark" ? webDarkTheme : webLightTheme}
            style={{ background: "transparent" }}
          >
            {children}
          </FluentProvider>
        </ThemeContext.Provider>
      </SSRProvider>
    </RendererProvider>
  );
}
