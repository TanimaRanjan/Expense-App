// Accessing the path library using require(path)
const path = require('path') 

// Webpack plugin to extract CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === "production"
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: ['babel-polyfill', './src/app.js'], 
        output: {
            // The path should be absolute path. 
            path: path.resolve(__dirname, 'public/scripts'), 
            filename: 'bundle.js'
        },
    
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_module/, 
    
                    use: {
                        loader: 'babel-loader', 
                        options: {
                            presets: ['env', 'react'],
                            plugins: ['transform-class-properties', 
                                       'transform-object-rest-spread']
                        }
                    }
                }, 
                {
                    test: /\.s?css$/, 
                    use: CSSExtract.extract({
                        use: [
                                'css-loader', 
                                'sass-loader'
                            
                        ]
                    })
                }
        ]
        },
        plugins : [
            CSSExtract
        ],

        devServer: {
            // Absolute path that lets devserver know where folder that you are trying to server up lives
            contentBase: path.resolve(__dirname, 'public'),
            // Where the assets are
            publicPath: '/scripts/',
            historyApiFallback: true
        },
        devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map'
    }
}

