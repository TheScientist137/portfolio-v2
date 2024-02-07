import { Box, Heading, Text,  Image, Stack, Button, Icon, Badge } from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

import Skills from "./Skills"

const About = () => {
 return (
  <Box 
    as='section'
    id='about'
    w='100%'
    h='100%'
    display='flex'
    flexDirection='column'
    alignItems='center'>

   <Box
      my='32px'
      p='16px'
      bg='gray.100'
      boxShadow='lg'
      borderRadius='xl'>
      <Heading as='h3' pt='5px' textAlign='center' lineHeight='tall' fontSize={{ base: '12px', sm: '14px' }}>
        Hello! I&apos;m a<Badge colorScheme='green' pt='4px' ml='1' fontSize='2md'>Front-End Web Developer</Badge> based in Madrid, Spain
      </Heading>
   </Box>

   <Image
      src='/me.jpg'
      alt='Guillermo (profile-image)'
      boxSize='2xs'
      border='2px'
      borderColor='gray.300'
      borderRadius='full'
      boxShadow='dark-lg'/>

   <Box mt='32px' textAlign='center'>
      <Heading as='h2' fontSize={{ base: '20px', sm: '32px' }}>
        Guillermo Casado Noya
      </Heading>
      <Text as='h3' fontStyle='italic' fontSize='12px'>
        Software Developer / Electronic Technician
      </Text>
      <Text as='h4' mt='16px' textAlign='center'>
      I began my journey in programming two years ago while pursuing my superior degree in electronics maintenance. Since then, I have developed a deep passion for programming and embarked on a journey to specialize in front-end development.
      </Text>
   </Box>

   <Stack my='32px' direction='row' spacing={2} align='center'>
      <Button as='a' colorScheme='linkedin' variant='outline' href='https://www.linkedin.com/in/guillermo-casado-noya-209b45268/'>
        <Icon as={FaLinkedin} boxSize={4}  marginRight='4px' marginBottom='2px' /> Linkedin
      </Button>
      <Button as='a' colorScheme='linkedin' variant='outline' href='https://github.com/TheScientist137'>
        <Icon as={FaGithub} boxSize={4}  marginRight='4px' marginBottom='2px' /> Github        
      </Button>
   </Stack>

   <Skills />
  </Box>
 )
}

export default About