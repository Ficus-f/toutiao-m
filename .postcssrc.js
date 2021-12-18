// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue: 37.5,
      // { file } :取参数中的字段
      rootValue ({ file }) {
        // console.log(file)
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
