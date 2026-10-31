"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  createDOMRenderer,
  FluentProvider,
  RendererProvider,
  renderToStyleElements,
  SSRProvider,
  webLightTheme,
} from "@fluentui/react-components";

/**
 * Fluent UI v9 + Next.js App Router: render Griffel styles on the server
 * (so the static export ships with CSS in place), then hydrate on the client.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [renderer] = React.useState(() => createDOMRenderer());
  const didRenderRef = React.useRef(false);

  useServerInsertedHTML(() => {
    if (didRenderRef.current) return;
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={webLightTheme} style={{ background: "transparent" }}>
          {children}
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
