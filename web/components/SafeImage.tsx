"use client";

import * as React from "react";
import { Image, type ImageProps } from "@fluentui/react-components";
import { site } from "../content/site";

/**
 * Fluent Image that falls back to the site artwork when the source is missing or fails.
 * The mount check catches images that failed before React hydrated (their error event is lost).
 */
export function SafeImage({ src, alt, ...rest }: ImageProps) {
  const [failed, setFailed] = React.useState(false);
  const ref = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0 && src) setFailed(true);
  }, [src]);

  return (
    <Image
      {...rest}
      ref={ref}
      src={!src || failed ? site.fallbackImage : src}
      alt={alt}
      fit="cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
