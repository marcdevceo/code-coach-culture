import nextMDX from '@next/mdx';

const withMDX = nextMDX();

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);

  