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
  useColorMode
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

import '../App.css'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

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
      px={{ base: '16px', sm: '32px', md: '64px', lg: '128px', xl: '256' }} >
      
      <Box as='title' display='flex' justifyContent='center' alignItems='center'>
        <Avatar name='Guillermo Casado' src='/me.jpg' size='sm' mr='6px' />
        <Heading as='h1' size='sm' fontStyle='italic'>
          <ChakraLink as={RouterLink} to='/about'>
            Guillermo Casado
          </ChakraLink>
        </Heading>
      </Box>

      <Show breakpoint='(max-width: 749px)'>
        <Box>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label='Options' />          
            <MenuList>
              <MenuItem as={RouterLink} to='/about'>About</MenuItem>
              <MenuItem as={RouterLink} to='/projects'>Projects</MenuItem>
              <MenuItem as={RouterLink} to='/contact'>Contact</MenuItem>
           </MenuList>
          </Menu>
          <IconButton ml='12px' boxSize={9} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} aria-label='change color mode'>
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </IconButton>
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

          <IconButton ml='12px' boxSize={9} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} aria-label='change color mode'>
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </IconButton>
        </Breadcrumb>  
      </Hide>  
    </Box>
  )
}

export default Header
