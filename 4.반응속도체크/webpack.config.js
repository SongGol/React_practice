const path = require("path");

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스에서는 production
    devtool: 'eval', //빠르게 하겠다.
    resolve: {
        extensions: ['.js', '.jsx'] //이 목록에 있는 파일확장자를 찾아줌.
    },

    //아래 두개가 가장 중요
    entry: { //입력
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react', ],
                plugins: [],
            },
        }],
    },
    output: { //출력
        path: path.join(__dirname, 'dist'), //경로
        filename: 'app.js',
    },
};