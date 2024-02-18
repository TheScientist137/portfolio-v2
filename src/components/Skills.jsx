import { Box, Image, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

import '../App.css'

const Skills = () => {
 const boxColor = useColorModeValue('#fff6eb', 'gray.700')

 const icons = [
  'html-icon',
  'css-icon',
  'javascript-icon',
  'react-icon',
  'redux-icon',
  'bootstrap-icon',
  'tailwind-icon',
  'vite-icon'
 ]

 const container = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: { delayChildren: 0.3, staggerChildren: 0.2 }
  }
 }

 const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
 }

 return (
  <Box
   w='100%'
   h='120px'
   my={{ base: '1.3rem', sm: 0 }}
   bgColor={boxColor}
   boxShadow='lg'
   borderRadius='lg'>

   <motion.div
    className='variants-div'
    initial='hidden'
    animate='visible'
    variants={container}>

    {icons.map((icon, index) => (
     <motion.div className='variants-item-div' key={index} variants={item}>
      <Image className={icon} src={`./skills-images/${icon}.svg`} />      
     </motion.div>
    ))}
    
   </motion.div>
  </Box>
 )
}

export default Skills