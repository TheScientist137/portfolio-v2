import {
  Box,
  Heading,
  Text, 
  Image,
  Stack,
  Button,
  Icon,
  Badge,
  useColorMode,
} from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

import Skills from "./Skills"

const About = () => {
  const { colorMode } = useColorMode()

  return (
    <Box 
      as='section'
      id='about'
      w='100%'
      h='100vh'
      mt='1.7rem'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-evenly'>

      <Box
        w='100%'
        p='1rem'
        boxShadow='lg'
        borderRadius='lg'
        _light={{ bgColor: '#fff6eb' }}
        _dark={{ bgColor: 'gray.700' }}>
          
        <Heading
          as='h3'
          pt='5px'
          textAlign='center'
          lineHeight='tall'
          fontFamily='Dosis'
          fontSize='0.9rem'
          fontWeight='700'>
          Hello, I&apos;m a          
          <Badge colorScheme='green' p='4px' ml='1' mb='1' fontSize='2md' borderRadius='4px'>
            Front-End Web Developer
          </Badge> based in Madrid, Spain          
        </Heading>
      </Box>
    
      <Image
        src='/me.jpg'
        alt='Guillermo (profile-image)'
        border='2px'
        borderColor='gray.100'
        borderRadius='full'
        boxShadow='dark-lg'
        boxSize={{ base: '170px', sm: '220px' }} />
  
      <Box w='100%' textAlign='center'>
        <Heading as='h2' fontFamily='Dosis' fontWeight='700' fontSize={{ base: '24px', sm: '26px', md: '28px' }}>
          Guillermo Casado Noya
        </Heading>

        <Text as='h3' fontFamily='Dosis' fontWeight='500' fontSize={{ base: '12px', sm: '14px' }}>
          Software Developer / Electronic Technician
        </Text>

        <Text as='h4' mt='16px' textAlign='start' fontFamily='Dosis' fontWeight='500'>
        I began my journey in programming two years ago while pursuing my superior degree in electronics maintenance. Since then, I have developed a deep passion for programming and embarked on a journey to specialize in front-end development.
        </Text>
      </Box>

      <Skills />
    
      <Stack direction='row' spacing={2} align='center'>
        <Button
          as='a'
          colorScheme='linkedin'
          variant='outline'
          borderWidth='2px'
          href='https://www.linkedin.com/in/guillermo-casado-noya-209b45268/'>

          <Icon as={FaLinkedin} boxSize={4}  marginRight='4px' marginBottom='2px' /> Linkedin

        </Button>
        <Button
          as='a'
          colorScheme='github'
          variant='outline' 
          borderWidth='2px'
          _hover={colorMode === 'light' ? { bg: 'gray.100' } : { bg: 'gray.700' }}
          href='https://github.com/TheScientist137'>
          <Icon as={FaGithub} boxSize={4}  marginRight='4px' marginBottom='2px' /> Github        
        </Button>
      </Stack>


  </Box>
 )
}

export default About