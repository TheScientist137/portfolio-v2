import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"

const Dark = () => {
 const {colorMode, toggleColorMode} = useColorMode()
 const iconBg = useColorModeValue('purple.400', 'yellow.400') 

 return (
  <motion.button>  
    <IconButton
      as='button'
      onClick={toggleColorMode}
      boxSize='40px'
      bg={iconBg}
      icon={colorMode === 'light' ? <MoonIcon color='white' /> : <SunIcon color='black' />}
      _hover={colorMode === 'light' ? { bgColor: 'purple.500' } : { bgColor: 'yellow.500' }}>
      {colorMode === 'light' ? 'Dark' : 'Light'}
    </IconButton>
  </motion.button>
 )
}

export default Dark