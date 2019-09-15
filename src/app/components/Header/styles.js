export default theme => ({
  wrapper: {
    padding: 40,
    background: theme.secondColor,
    textAlign: 'left'
  },
  title: {
    font: {
      size: 40,
      weight: 900
    },
    color: theme.mainColor
  },
  link: {
    color: theme.mainColor,
    '&:hover': {
      opacity: 0.5
    }
  }
})
