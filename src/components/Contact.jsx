import {
 Box,
 Heading,
 FormControl,
 FormLabel,
 Input,
 Textarea,
 Text,
 Button,
 Alert,
 AlertIcon,
 AlertDescription,
 CircularProgress,
 useColorModeValue
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_subject: '',
    user_email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const form = useRef()

  const boxColor = useColorModeValue('#fff6eb', 'gray.700')

  // Handle form data functions
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true) // show circular progress
    setShowAlert(false) // clean alerts

    try {
      await emailjs.sendForm(
        'service_xwmhb93',
        'template_52ebrbe',
        form.current, {
          publicKey: 'sUaiQe0u8b5_4M9I5'
      })

      setFormData({
        user_name: '',
        user_subject: '',
        user_email: '',
        message: ''
      })
      setIsSuccess(true)
      setShowAlert(true)
      // show alert for 3 seconds
      setTimeout(() => {
        setShowAlert(false)
      }, 3000)

    } catch (error) { console.log('Failed to send message', error) } 

      finally {
      setIsLoading(false) // close circular progress
    }
  }

  return (
    <Box 
      as='section'
      h={{ base: '100%', sm: '100vh' }}
      w='100%'
      mt='3rem'
      textAlign='start'>
      
      <Heading as='h2' my='32px' textAlign='center' fontFamily='Dosis' fontSize='32px'>Contact</Heading>

      <Text mb='32px' fontFamily='Dosis' fontWeight='500'>
        Thank you for considering reaching out! Whether you have a question, a project idea, or just want to say hello, I&apos;d love to hear from you. Feel free to use the form below to send me a message directly. I strive to respond to all inquiries promptly, typically within 24-48 hours.
      </Text>

      <Box w='100%' p='1.2rem' bg={boxColor} borderRadius='lg' boxShadow='xl'>
        <form ref={form} onSubmit={handleSubmit}>
          <FormControl mb='1rem'>
            <FormLabel fontFamily='Dosis'>Name</FormLabel>
            <Input
              type='text'
              name='user_name'
              placeHolder='Enter your name'
              onChange={handleChange}
              value={formData.name}
              _hover={{ border: '1px', borderColor: 'gray.400' }} />
          </FormControl>

          <FormControl mb='1rem'>
            <FormLabel fontFamily='Dosis'>Email</FormLabel>
            <Input
              type='email'
              name='user_email'
              placeHolder='Enter your email'
              onChange={handleChange}
              value={formData.email}
              _hover={{ border: '1px', borderColor: 'gray.400' }} />
          </FormControl>

          <FormControl  mb='1rem'>
            <FormLabel fontFamily='Dosis'>Subject</FormLabel>
            <Input
              type='text'
              name='user_subject'
              placeHolder='Enter your subject'
              onChange={handleChange}
              value={formData.subject} 
              _hover={{ border: '1px', borderColor: 'gray.400' }} />
          </FormControl>

          <FormControl mb='1rem' isRequired>
            <FormLabel fontFamily='Dosis'>Message</FormLabel>
            <Textarea
              name='message'
              placeHolder='Enter your message'
              onChange={handleChange}
              value={formData.message}
              _hover={{ border: '1px', borderColor: 'gray.400' }} />
          </FormControl>

          <Button
            type='submit'
            value='Send'
            w='100%'
            variant='outline'
            border='2px'
            borderColor='gray.400'
            disabled={isLoading}>
              
            {isLoading ?
              <CircularProgress size='32px' color='green.400' isIndeterminate /> : 'Send'}
          </Button>

          {showAlert && (
            <Alert
              mt='16px'
              variant='left-accent'
              status={ isSuccess ? 'success' : 'error' }>

              <AlertIcon />

              { isSuccess ? 
                <AlertDescription>Message sent succesfully!</AlertDescription> :
                <AlertDescription>Failed to send message. Please try again later</AlertDescription>  
              }
            </Alert>
          )}
        </form>
      </Box> 

      <Text mt='32px' textAlign='center' fontFamily='Dosis' fontWeight='500'>Looking forward to connecting with you!</Text>
    </Box>
 )
}

export default Contact