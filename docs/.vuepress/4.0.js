module.exports = [

];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}