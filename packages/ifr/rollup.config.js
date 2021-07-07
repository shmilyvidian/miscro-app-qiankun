import babel from 'rollup-plugin-babel' // rollup 的 babel 插件，ES6转ES5
import commonjs from 'rollup-plugin-commonjs' // 将非ES6语法的包转为ES6可用
import resolve from 'rollup-plugin-node-resolve'
import clear from 'rollup-plugin-clear'
import {uglify} from 'rollup-plugin-uglify' // 压缩包


const env = process.env.NODE_ENV

const Global = `var process = {
    env: {
      NODE_ENV: 'production'
    }
  };`
const config = {
    input: './src/main.js',
    output: {
        file: './dist/god.sdk.js',
        format: 'umd',
        name: 'GodSDK',
        banner: Global
    },
    plugins: [
        babel({
            exclude: '**/node_modules/**'
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        uglify(),
        clear({
            targets: ['dist']
        }),
    ]
}

if (env === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    )
}

export default config