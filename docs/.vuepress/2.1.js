module.exports = [
    {
        title: 'Introduction',
        collapsable: true,
        children: prefix('introduction', [
            'what-is-vue-tippy'
        ]),
    },
    {
        title: 'Getting Started',
        collapsable: true,
        children: prefix('getting-started', [
            'installation'
        ]),
    },
    {
        title: 'Features',
        collapsable: true,
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