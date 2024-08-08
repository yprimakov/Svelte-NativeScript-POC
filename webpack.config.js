const webpack = require("@nativescript/webpack");
const sveltePreprocess = require("svelte-preprocess");

module.exports = (env) => {
    webpack.init(env);

    webpack.chainWebpack(config => {
        config.module
            .rule("svelte")
            .test(/\.svelte$/)
            .use("svelte-loader")
            .loader("svelte-loader")
            .options({
                preprocess: sveltePreprocess(),
                compilerOptions: {
                    dev: process.env.NODE_ENV !== "production",
                },
                emitCss: true,
                hotReload: true,
            });

        if (config.resolve.conditionNames) {
            config.resolve.conditionNames.prepend("svelte");
        }

        if (config.resolve.mainFields) {
            config.resolve.mainFields.prepend("svelte");
        }

        config.resolve.alias
            .set("svelte", require.resolve("svelte"));
    });

    return webpack.resolveConfig();
};
