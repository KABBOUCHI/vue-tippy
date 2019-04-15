module.exports = [
    {
        title: 'DEMO',
    },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}