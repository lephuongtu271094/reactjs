module.exports = {
    entry : './app/app.jsx',
    output : {
        path : __dirname,
        filename : './public/bundle.js'
    },
    module: {
        loaders:[{
            test : /\.jsx?$/,
            loader : 'babel-loader',
            query : {
                presets : ['react','es2015']
            },

            exclude : /node_modules/
        }]
    }
}