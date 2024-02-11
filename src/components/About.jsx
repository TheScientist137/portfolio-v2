import {
  Box,
  Heading,
  Text, 
  Image,
  Stack,
  Button,
  Icon,
  Badge,
  useColorModeValue
} from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

// import Skills from "./Skills"

const About = () => {
  const bannerBg = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box 
      as='section'
      id='about'
      w='100%'
      h='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'>

    <Box
      w='100%'
      my='32px'
      p='12px'
      boxShadow='lg'
      borderRadius='lg'
      bg={bannerBg} >
      <Heading
        as='h3'
        pt='5px'
        textAlign='center'
        lineHeight='tall'
        fontSize={{ base: '11px', md: '12px' }}>
        Hello! I&apos;m a
        <Badge colorScheme='green' pt='4px' ml='1' fontSize='2md'>
          Front-End Web Developer
        </Badge> based in Madrid, Spain
      </Heading>
    </Box>

    <Image
      src='/me.jpg'
      alt='Guillermo (profile-image)'
      border='2px'
      borderColor='gray.300'
      borderRadius='full'
      boxShadow='dark-lg'
      boxSize={{ base: '170px', sm: '220px' }} />

    <Box w='100%' mt='32px' textAlign='left'>
      <Heading as='h2' fontSize={{ base: '20px', sm: '24px', md: '28px' }}>
        Guillermo Casado Noya
      </Heading>
      <Text as='h3' fontStyle='italic' fontSize={{ base: '12px', sm: '14px' }}>
        Software Developer / Electronic Technician
      </Text>
      <Text as='h4' mt='16px' textAlign='start' fontSize={{ base: '14px' }}>
      I began my journey in programming two years ago while pursuing my superior degree in electronics maintenance. Since then, I have developed a deep passion for programming and embarked on a journey to specialize in front-end development.
      </Text>
    </Box>

    <Stack my='32px' direction='row' spacing={2} align='center'>
      <Button as='a' colorScheme='linkedin' variant='outline' href='https://www.linkedin.com/in/guillermo-casado-noya-209b45268/'>
        <Icon as={FaLinkedin} boxSize={4}  marginRight='4px' marginBottom='2px' /> Linkedin
      </Button>
      <Button as='a' colorScheme='github' variant='outline'  _hover={{ bg: 'gray.100' }} href='https://github.com/TheScientist137'>
        <Icon as={FaGithub} boxSize={4}  marginRight='4px' marginBottom='2px' /> Github        
      </Button>
    </Stack>
  </Box>
 )
}

export default About