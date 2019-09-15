export default theme => ({
  wrapper: {
    padding: 40,
    background: theme.background,
    textAlign: 'left'
  },
  title: {
    font: {
      size: 40,
      weight: 900
    },
    color: theme.color
  },
  link: {
    color: theme.color,
    '&:hover': {
      opacity: 0.5
    }
  }
})
