module.exports = [
    {
        title: 'COMING SOON',
        collapsable: false,
    },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}