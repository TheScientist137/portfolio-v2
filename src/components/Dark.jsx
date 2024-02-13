import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"

const Dark = () => {
 const { colorMode, toggleColorMode } = useColorMode()
 const iconBg = useColorModeValue('purple.500', 'yellow.400') 

 return (
  <motion.div whileTap={{ rotate: 90 }}>  
    <IconButton
      as='button'
      onClick={toggleColorMode}
      boxSize='40px'
      bg={iconBg}
      icon={colorMode === 'light' ? <MoonIcon color='white' /> : <SunIcon color='black' />}
      _hover={colorMode === 'light' ? { bgColor: 'purple.600' } : { bgColor: 'yellow.500' }}
      _active={colorMode === 'light' ? { bgColor: 'purple.700' } : { bgColor: 'yellow.600' }}>

      {colorMode === 'light' ? 'Dark' : 'Light'}
    </IconButton>
  </motion.div>
 )
}

export default Dark