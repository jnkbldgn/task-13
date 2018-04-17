module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/levels/blocks',
      scheme: 'nested'
    },
    {
      layer: 'desktop',
      path: 'src/levels/desktop',
      scheme: 'nested'
    },
    {
      layer: 'mobile',
      path: 'src/levels/mobile',
      scheme: 'nested'
    }
  ].map(level => Object.assign({
    schemeOptions : 'react',
    naming : 'react',
    scheme: 'nested' }, level)
  ),
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common desktop',
    mobile: 'common mobile'
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/levels/blocks': { default: true }
          },
          techs: ['js', 'css'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
}
