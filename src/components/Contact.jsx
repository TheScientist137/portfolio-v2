import {
 Box,
 Heading,
 FormControl,
 FormLabel,
 Input,
 Textarea,
} from "@chakra-ui/react"

const Contact = () => {
 return (
  <Box 
  as='section'
  id='projects'
  h='100vh'
  w='100%'
  textAlign='center'>

   <Heading as='h2' my='32px'>Contact</Heading>

   <FormControl>
    <FormLabel>Name</FormLabel>
     <Input type='text' placeholder='Enter your name' />

     <FormLabel>Email Adress</FormLabel>
     <Input type='email' placeholder='Enter your email' />

     <FormLabel>Subject</FormLabel>
     <Input type='text' />

     <FormLabel>Message</FormLabel>
     <Textarea placeholder='Enter your message' />
   </FormControl>
  </Box>
 )
}

export default Contact