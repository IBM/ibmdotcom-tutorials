import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#FFE5E5',
      100: '#FFB8B8',
      200: '#FF8A8A',
      300: '#FF5C5C',
      400: '#FF2E2E',
      500: '#FF0000',
      600: '#CC0000',
      700: '#990000',
      800: '#660000',
      900: '#330000',
    },
    secondary: {
      50: '#E5F6FF',
      100: '#B8E4FF',
      200: '#8AD2FF',
      300: '#5CC0FF',
      400: '#2EAEFF',
      500: '#009CFF',
      600: '#007DCC',
      700: '#005E99',
      800: '#003F66',
      900: '#001F33',
    },
    background: '#FFF9F0',
  },
  fonts: {
    heading: '"Comic Sans MS", "Comic Sans", cursive',
    body: '"Comic Sans MS", "Comic Sans", cursive',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'lg',
      },
    },
  },
}) 