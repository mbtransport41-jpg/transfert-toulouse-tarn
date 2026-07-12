import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/albi",
        destination: "/transfert/aeroport-toulouse-albi",
        permanent: true,
      },
      {
        source: "/castres",
        destination: "/transfert/aeroport-toulouse-castres",
        permanent: true,
      },
      {
        source: "/revel",
        destination: "/transfert/aeroport-toulouse-revel",
        permanent: true,
      },
      {
        source: "/lavaur",
        destination: "/transfert/aeroport-toulouse-lavaur",
        permanent: true,
      },
      {
        source: "/mazamet",
        destination: "/transfert/aeroport-toulouse-mazamet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
