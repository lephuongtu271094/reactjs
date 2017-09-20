# reactjs

cài wepback
```
   $ sudo npm install -g webpack
   $ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
   $ npm install webpack --save
   $ touch webpack.config.js

   $ webpack -w
```

config trong file webpack.config.js

```javascript
    module.exports = {
        entry : './app/app.jsx',
        output : {
            path : __dirname,
            filename : './public/bundle.js'
        },
        module: {
            loaders:[{
                loader : 'babel-loader',
                query : {
                    presets : ['react','es2015']
                },
                test : /\.jsx?$/,
                exclude : /node_modules/
            }]
        }
    }
```

