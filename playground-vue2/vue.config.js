module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    configureWebpack: {
        resolve: {
            symlinks: true,
        },
    }
}