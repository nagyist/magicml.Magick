"use client"

import { useEffect, useState } from "react";

export function useMedia(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    setMatches(window.matchMedia(query).matches);
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}
