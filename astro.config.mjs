// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 直接部署静态文件：开启 static output
  output: 'static',
  // 你的站点实际地址是：
  // https://kkhammm6-prog.github.io/personal_website/
  // 所以前缀必须是仓库名，对应：
  base: '/personal_website/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});