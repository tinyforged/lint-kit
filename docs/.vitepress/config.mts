import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "lint-kit",
    description: "Unified linting suite for modern web development",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Guide', link: '/guide' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/tinyforged/lint-kit' }
        ]
    }
})
