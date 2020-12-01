const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // production
    devtool: 'eval', // hidden-source-map 배포할 때는 hidden-source-map을 사용
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },

    entry: {
        app: './client' //이 파일을 통해서 app.js를 만들어냄
    },
    // 그 과정에 서 필요한 과정 module, plugins 
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
        }]
    },
    plugins: [],
    // 명령어를 실행하면 client.tsx 파일을 통해서 webpack을 처리 후 dist 폴더가 생기고 dist 폴더 안에 app.js가 생김
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    }
}