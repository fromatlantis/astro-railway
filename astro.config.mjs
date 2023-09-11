import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

const adapter = () => {
    return node({
        mode: 'standalone',
    });
};
// https://astro.build/config
export default defineConfig({
    integrations: [],
    output: 'server',
    adapter: adapter(),
});
