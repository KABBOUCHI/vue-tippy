module.exports = {
    title: 'VueTippy',
    description: 'A lightweight tooltip for VueJS. Based on tippy.js and powered by Popper.js',
    lastUpdated: 'Last Updated',
    plugins: {
        '@vuepress/google-analytics': {
            ga: ''
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        },
        'sitemap': {
            hostname: 'https://kabbouchi.github.io/vue-tippy'
        }
    },
    postcss: {
        plugins: [
            require('tailwindcss')(__dirname + '/tailwind.js'),
            require('autoprefixer'),
        ]
    },

    markdown: {
        lineNumbers: true,
    },

    head: [
        [
            'link',
            {
                href: '/apple-touch-icon.png',
                rel: 'apple-touch-icon',
                size: '180x180',
            },
        ],
        [
            'link',
            {
                href: '/favicon-32x32.png',
                rel: 'icon',
                type: 'image/png',
                size: '32x32',
            },
        ],
        [
            'link',
            {
                href: '/favicon-16x16.png',
                rel: 'icon',
                type: 'image/png',
                size: '16x16',
            },
        ],
        [
            'link',
            {
                href: '/manifest.json',
                rel: 'manifest',
            },
        ],
        [
            'link',
            {
                href: '/safari-pinned-tab.svg',
                rel: 'mask-icon',
                color: '#00b4b6',
            },
        ],
        [
            'meta',
            {
                name: 'theme-color',
                content: '#ffffff',
            },
        ],
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css?family=Nunito:100,300,400,500,600,700',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
        [
            'script',
            {
                src: 'https://unpkg.com/vue-tippy/dist/vue-tippy.min.js',
                defer: true
            },
        ]
    ],

    themeConfig: {
        repo: 'kabbouchi/vue-tippy',
        logo: '/logo.svg',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        displayAllHeaders: false,
        sidebarDepth: 0,
        nav: [
            {
                text: 'Version',
                link: '/',
                items: [
                    { text: '2.1', link: '/2.1/' },
                    { text: '4.0', link: '/4.0/' },
                ]
            },
        ],

        sidebar: {
            '/2.1/': require('./2.1'),
            '/4.0/': require('./4.0'),
        },
    },
    chainWebpack(config) {
        config.resolve.alias.set('vue', 'vue/dist/vue.common.js')
    }
};