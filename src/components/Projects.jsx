import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
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
    textAlign='center'>

    <Heading as='h2' my='32px'>Projects</Heading>

   {projects.map(project => (
     <Card
        key={project.id}
        mb='32px'
        borderStyle='solid'
        boxShadow='xl'
        bg='gray.100'>

        <CardHeader as='h3'>{project.name}</CardHeader>

        <Divider />

        <CardBody>
          <Image
            src={project.image}
            boxSize='300px'
            objectFit='cover'
            align='center'
            mx='auto'
            mb='20px'
            borderRadius='lg'/>
          <Stack>
            <Text as='cite' textAlign='left' fontSize='sm'>
              {project.description}
            </Text>
          </Stack>
        </CardBody>

     <Divider />

        <CardFooter>
          <ButtonGroup spacing='2' mx='auto'>
            <Button as='a' colorScheme='linkedin' variant='outline' href='https://www.linkedin.com/in/guillermo-casado-noya-209b45268/'>
              <Icon as={FaGooglePlay} boxSize={4}  marginRight='4px' marginBottom='2px' /> Demo
            </Button>
            <Button as='a' colorScheme='linkedin' variant='outline' href='https://github.com/TheScientist137'>
              <Icon as={FaGithub} boxSize={4}  marginRight='4px' marginBottom='2px' /> Github        
            </Button>
          </ButtonGroup>
     </CardFooter>
   </Card>
   ))}
  </Box>
 )
}


export default Projects