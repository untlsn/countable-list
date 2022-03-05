import framework from '@preact/preset-vite';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';

const config: UserConfig = {
  plugins: [
    framework(),
    ssr(),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '~': resolve('./src'),
    },
  },
  optimizeDeps: {
    include: ['preact/devtools'],
  },
};

export default config;
