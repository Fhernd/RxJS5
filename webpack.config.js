module.exports = {
    entry: "./main.ts",
    output: {filename: "app.js"},
    module: {
        loaders: [
            {
                test: /.ts$/, 
                loader: "ts-loader"
            }
        ]
    }, 
    resole: {
        extensions: ["", ".ts", ".js"]
    }, 
    devServer: {
        host: '0.0.0.0',
        port: 4200
    }
}