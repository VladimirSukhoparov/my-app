const path = require('path'); 

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool(){
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}

module.exports = {
    entry: path.resolve(__dirname, '../src/client/index.jsx'), //точка входа в наше приложение содержит абсолютный путь к index.js
    output: {
        path: path.resolve(__dirname, '../dist/client'), //путь куда будет собираться наш проект
        filename: 'client.js', // имя нашего бандла
        publicPath:'/'
    },
    
    mode: NODE_ENV? NODE_ENV:'development', // по умолчанию webpack миницифирует скрипты, чтобы это избежать меням режим
    //Нужно помочь вебпаку научится работать с jsx  файлами для этого используют ts-loader
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use:['ts-loader']
            // rules — это массив правил
           
    }],
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx', '.json'], //указываем файлы с которыми будет работать webpack
    },
   
    devtool: setupDevtool(),
};
 