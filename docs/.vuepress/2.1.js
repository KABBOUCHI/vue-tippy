module.exports = [
    {
        title: 'Introduction',
        collapsable: false,
        children: prefix('introduction', [
            'what-is-vue-tippy'
        ]),
    },
    {
        title: 'Getting Started',
        collapsable: false,
        children: prefix('getting-started', [
            'installation'
        ]),
    },
    {
        title: 'Features',
        collapsable: false,
        children: prefix('features', [
            'default',
            'placement',
            'arrows',
            'triggers',
            'interactivity',
            'animations',
            'transitions-and-delays',
            'themes',
            'callbacks',
            'component',
            'html',
            'misc',
        ]),
    },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}