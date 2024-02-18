import {
  Box,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Icon
} from "@chakra-ui/react"
import { projects } from "./projects"
import { FaGithub, FaGooglePlay } from "react-icons/fa"

const Projects = () => {
  return (
  <Box 
    as='section'
    id='projects'
    h='100%'
    w='100%'
    mt='3rem'
    textAlign='center'>

    <Heading as='h2' my='32px' fontFamily='Dosis' fontSize='32px'>Projects</Heading>
    
    <Box display='grid' gridTemplateColumns='repeat(1, 400fr)' gridGap={4}> 
      {projects.map(project => (
        <Card
          key={project.id}
          mb='32px'
          borderStyle='solid'
          boxShadow='xl'
          _light={{ bgColor: '#fff6eb' }}>
          
      
          <CardBody>
            <Image
              src={project.image}
              boxSize='300px'
              objectFit='cover'
              align='center'
              mx='auto'
              borderRadius='lg'/>

              <Heading mt='16px' fontSize='18px'>{project.name}</Heading>

              <Text mt='12px' textAlign='left' fontFamily='Dosis' fontSize='14px' fontWeight='500'>
                {project.description}
              </Text>
          </CardBody>
      
          <Divider />
      
          <CardFooter p='1rem' display='flex' justifyContent='center'>
            <ButtonGroup spacing='2'>
              <Button as='a' colorScheme='linkedin' variant='outline' href={project.demoLink}>
                <Icon as={FaGooglePlay} boxSize={4}  marginRight='4px' marginBottom='2px' /> Demo
              </Button>
              <Button as='a' colorScheme='linkedin' variant='outline' href={project.githubLink}>
                <Icon as={FaGithub} boxSize={4}  marginRight='4px' marginBottom='2px' /> Github        
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  </Box>
 )
}


export default Projects