import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Try N Test Foundation',
    short_name: 'TryNTest',
    description: 'Expert web solutions and vibrant developer community',
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#2DB7B9',
    icons: [

      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    orientation: 'portrait',
    related_applications: [],
    prefer_related_applications: false,
    categories: ['business', 'technology', 'web development', 'community'],
  };
}
