import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/galleries", destination: "/", permanent: true },
      { source: "/collections", destination: "/", permanent: true },
      {
        source: "/galleries/waste-receptacles",
        destination: "/galleries/litter-receptacles",
        permanent: true,
      },
      {
        source: "/galleries/dog-park-stations",
        destination: "/galleries/dog-waste-stations",
        permanent: true,
      },
      {
        source: "/galleries/tree-grates",
        destination: "/galleries/tree-guards",
        permanent: true,
      },
      {
        source: "/galleries/banners",
        destination: "/galleries/flagpoles",
        permanent: true,
      },
      {
        source: "/galleries/park-shelters",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
