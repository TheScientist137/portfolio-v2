import { Box, Icon, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiRedux, SiVite } from "react-icons/si";

import '../App.css'

const Skills = () => {
 const boxColor = useColorModeValue('#fff6eb', 'gray.700')

 const icons = [
  FaHtml5,
  FaCss3Alt,
  RiJavascriptFill,
  FaReact,
  SiRedux,
  FaBootstrap,
  SiTailwindcss,
  SiVite
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
   bgColor={boxColor}
   borderRadius='10px'>

   <motion.div
    className='variants-div'
    initial='hidden'
    animate='visible'
    variants={container}>

    {icons.map((icon, index) => (
     <motion.div className='variants-item-div' key={index} variants={item}>
      <Icon as={icon} w='100%' h='100%' />
     </motion.div>
    ))}
    
   </motion.div>
  </Box>
 )
}

export default Skills