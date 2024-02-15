import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Show,
  Hide,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { Link as RouterLink } from 'react-router-dom'

import Dark from './Dark'

import '../App.css'

const Header = () => {
  const { colorMode } = useColorMode()
  const headerBg = useColorModeValue('#f4ede4', 'black') 

  return (
    <Box
      as='section'
      w='100vw'
      h='54px'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      position='fixed'
      top={0}
      left={0}
      zIndex='1'
      bgColor={headerBg}
      px={{ base: '16px', md: '64px', lg: '128px', xl: '256' }} >
      
      <Box as='title' display='flex' justifyContent='center' alignItems='center'>
        <Avatar name='Guillermo Casado' src='/me.jpg' size='sm' mr='6px' />

        <Heading as='h1' size='sm' letterSpacing={2.1} fontFamily='Protest Revolution'>
          <ChakraLink as={RouterLink} to='/about'>
            Guillermo Casado
          </ChakraLink>
        </Heading>
      </Box>

      <Show breakpoint='(max-width: 749px)'>

        <Box w='90px' display='flex' justifyContent='space-between'>
          <Dark />
          <Menu>
            <MenuButton
              as={IconButton}
              ml='8px'
              icon={<HamburgerIcon />}
              boxSize='40px'
              variant='outline'
              borderColor='gray.500'
              aria-label='Options'
              _hover={colorMode === 'light' ? { bg: 'gray.300' } : { bg: 'gray.700' }}/>

            <MenuList>
              <MenuItem as={RouterLink} to='/about'>About</MenuItem>
              <MenuItem as={RouterLink} to='/projects'>Projects</MenuItem>
              <MenuItem as={RouterLink} to='/contact'>Contact</MenuItem>
           </MenuList>
          </Menu>
        </Box>

      </Show>

      <Hide breakpoint='(max-width: 749px)'>
        
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/about'>About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/projects'>Projects</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/contact'>Contact</BreadcrumbLink>
          </BreadcrumbItem>

          <Dark />
        </Breadcrumb> 

      </Hide>  
    </Box>
  )
}

export default Header
