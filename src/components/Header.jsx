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
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import Dark from '../util/Dark'

import '../App.css'

const Header = () => {
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

          <Dark />

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
