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
  useColorModeValue
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { Link as RouterLink } from 'react-router-dom'

import Dark from './Dark'

const Header = () => {
  const headerBg = useColorModeValue('#f4ede4', 'black') 

  return (
    <Box
      className='header'
      as='section'
      h={14}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      position='sticky'
      top={0}
      left={0}
      zIndex='1'
      bgColor={headerBg}
      px={{ base: '16px', md: '64px', lg: '128px', xl: '256' }} >
      
      <Box as='title' display='flex' justifyContent='center' alignItems='center'>
        <Avatar name='Guillermo Casado' src='/me.jpg' size='sm' mr='6px' />

        <Heading as='h1' size='md' letterSpacing={2.1} fontFamily='Protest Revolution'>
          <ChakraLink as={RouterLink} to='/about'>
            Guillermo Casado
          </ChakraLink>
        </Heading>
      </Box>

      <Show breakpoint='(max-width: 749px)'>
        <Box>
          <Dark />

          <Menu>
            <MenuButton
              as={IconButton}
              ml='8px'
              icon={<HamburgerIcon />}
              boxSize='40px'
              variant='outline'
              aria-label='Options'
              _hover={{ bgColor: 'whiteAlpha.00' }}/>

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
