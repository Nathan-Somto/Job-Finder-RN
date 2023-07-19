module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          root: ['./app'],
          '@components': './app/components',
          '@screens': './app/screens',
          '@utils': './app/utils',
          '@navigation': './app/navigation',
          '@constants': './app/constants',
          '@data': './app/data',
          '@assets': './assets'
        }
      }],
      'react-native-reanimated/plugin'
    ]
  }
}
