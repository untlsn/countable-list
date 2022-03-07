module.exports = {
  extract: {
    include: ['**/*.{jsx,tsx,html,css}'],
    exclude: ['node_modules', '.git', 'dist', 'build'],
  },
  theme: {
    extend: {
      spacing: {
        header: '4rem',
        catalogs: '3rem',
      },
      colors: {
        main: {
          blue: '#390099',
          purple: '#d51755',
          fuchsia: '#FF0054',
          orange: '#FF5400',
          yellow: '#FFBD00',
        },
      },
    },
  },
}
