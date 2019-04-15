module.exports = [
    {
        title: 'DEMO',
        path: 'demo'
    },
    {
        title: 'Getting Started',
        path: 'getting-started'
    },
    {
        title: 'All Options',
        path: 'all-options'
    }

];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}