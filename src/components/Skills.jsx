import { Box, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
 return (
  <Box as='section'>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ x: [-100, 100, 0], opacity: 1 }}
    transition={{
     repeatType: 'loop',
     duration: 1,
     ease: 'linear'
     }}>
    <Icon as={FaHtml5} mr='6px' boxSize={12} />
    <Icon as={FaCss3Alt} mr='6px' boxSize={12} />
    <Icon as={RiJavascriptFill} mr='6px' boxSize={12} />
    <Icon as={FaReact} mr='6px' boxSize={12} />
    <Icon as={FaBootstrap} mr='6px' boxSize={12} />
    <Icon as={SiTailwindcss} mr='6px' boxSize={12} />
   </motion.div>
  </Box>
 )
}

export default Skills