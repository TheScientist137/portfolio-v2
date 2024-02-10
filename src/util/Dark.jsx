import { IconButton, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const Dark = () => {
 const { colorMode, toggleColorMode } = useColorMode()

 return (
  <IconButton
   ml='12px'
   boxSize={9}
   icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
   onClick={toggleColorMode}
   aria-label='change color mode'>

   {colorMode === 'light' ? 'Dark' : 'Light'}

  </IconButton>
 )
}

export default Dark