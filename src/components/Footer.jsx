import { Box, Text, useColorModeValue } from "@chakra-ui/react"

const Footer = () => {
 const footerText = useColorModeValue('gray.400', 'gray.600')

 return (
  <Box w='100%' h='36px' mt={{ base: '1rem', sm: 0 }} textAlign='center'>
   <Text
    as='h4'
    h='100%'
    fontSize='13px'
    fontStyle='italic'
    color={footerText}>     

    2024 Guillermo Casado. All Rights Reserved 
    
   </Text>
  </Box>
 )
}

export default Footer