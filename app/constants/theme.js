import { createTheme } from '@rneui/themed'
const theme = createTheme({
  lightColors: {
    primary: '#3E4F88',
    secondary: '#808080',
    background: '#F6F6F6',
    white: '#fff'
  },
  components: {
    Button: {
      radius: 10
    },
    Text: {
      style: {
      /*   fontFamily: 'Inter_400Regular', */
        fontSize: 16
      },
      h1Style: {
      /*   fontFamily: 'Inter_600SemiBold', */
        fontSize: 30
      },
      h2Style: {
        fontSize: 20
      }
    }
  }
})
export default theme
