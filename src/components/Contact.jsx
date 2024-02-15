import {
 Box,
 Heading,
 FormControl,
 FormLabel,
 Input,
 Textarea,
 Text,
 Button,
 useColorModeValue
} from "@chakra-ui/react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  })

  const boxColor = useColorModeValue('#fff6eb', 'gray.700')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }



  return (
    <Box 
      as='section'
      h={{ base: '100%', sm: '100vh' }}
      w='100%'
      mt='3rem'
      textAlign='start'>
      
      <Heading as='h2' my='32px' textAlign='center' fontFamily='Dosis' fontSize='32px'>Contact</Heading>

      <Text mb='32px' fontFamily='Dosis' fontWeight='500'>Thank you for considering reaching out! Whether you have a question, a project idea, or just want to say hello, I&apos;d love to hear from you. Feel free to use the form below to send me a message directly. I strive to respond to all inquiries promptly, typically within 24-48 hours.</Text>

      <Box w='100%' p='1rem' bg={boxColor} borderRadius='lg' boxShadow='xl'>
        <form onSubmit={handleSubmit}>
          <FormControl mb='1rem'>
            <FormLabel fontFamily='Dosis'>Name</FormLabel>
            <Input
              type='text'
              name='name'
              placeHolder='Enter your name'
              onChange={handleChange}
              value={formData.name} />
          </FormControl>

          <FormControl mb='1rem'>
            <FormLabel fontFamily='Dosis'>Email</FormLabel>
            <Input
              type='email'
              name='email'
              placeHolder='Enter your email'
              onChange={handleChange}
              value={formData.email} />
          </FormControl>

          <FormControl mb='1rem'>
            <FormLabel fontFamily='Dosis'>Subject</FormLabel>
            <Input
              type='text'
              name='subject'
              placeHolder='Enter your subject' 
              onChange={handleChange}
              value={formData.subject} />
          </FormControl>

          <FormControl mb='1rem'>
            <FormLabel fontFamily='Dosis'>Message</FormLabel>
            <Textarea
              name='message'
              placeHolder='Enter your message'
              onChange={handleChange}
              value={formData.message} />
          </FormControl>

          <Button type='submit' w='100%'>
            send
          </Button>
        </form>
      </Box> 
      <Text mt='32px' fontFamily='Dosis' fontWeight='500'>Looking forward to connecting with you!</Text>
    </Box>
 )
}

export default Contact