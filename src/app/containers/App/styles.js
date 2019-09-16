export default theme => ({
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    '*::before': {
      boxSizing: 'border-box'
    },
    '*::after': {
      boxSizing: 'border-box'
    },
    html: {
      font: {
        size: '16px'
      },
      margin: 0,
      padding: 0
    },
    body: {
      margin: 0,
      padding: 0
    }
  },
  app: {
    display: 'grid',
    'grid-template-columns': '1fr 3fr',
    'grid-template-areas': `
      "header  header"
      "content content"
      "footer  footer";
    `,
    minHeight: '100vh'
  },
  content: {
    grid: {
      area: 'content',
      padding: 20
    }
  },
  footer: {
    grid: {
      area: 'footer'
    },
    backgroundColor: theme.mainColor,
    padding: 20
  }
})
