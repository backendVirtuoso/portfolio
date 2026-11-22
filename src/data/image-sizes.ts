/** Intrinsic sizes of the diagram images in /public, so next/image reserves the right space. */
export const imageSizes: Record<string, { width: number; height: number }> = {
  "/images/projects/jeju-for-suffer-architecture.jpg": { width: 1395, height: 586 },
  "/images/projects/jeju-for-suffer-erd.jpg": { width: 1487, height: 837 },
  "/images/projects/k-sketch-architecture.jpg": { width: 1920, height: 900 },
  "/images/projects/k-sketch-erd.jpg": { width: 1514, height: 852 },
  "/images/projects/old-portfolio-architecture.jpg": { width: 1920, height: 839 },
  "/images/projects/old-portfolio-erd.jpg": { width: 1784, height: 557 },
  "/images/projects/portfolio-nextjs-architecture.jpg": { width: 5431, height: 2249 },
  "/images/projects/react-spa-architecture.jpg": { width: 1920, height: 309 },
  "/images/projects/todak-architecture.jpg": { width: 1920, height: 1080 },
  "/images/projects/todak-erd.jpg": { width: 1316, height: 856 },
}

export const sizeOf = (src: string) => imageSizes[src] ?? { width: 1600, height: 900 }
