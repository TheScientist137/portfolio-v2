import { Box, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { useColorModeValue } from '@chakra-ui/react'

import './App.css'

function App() {
  const bgColor = useColorModeValue('#f0e7db', 'gray.900')

  return (
    <Box bgColor={bgColor}>
      <Header />
      <Container centerContent>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}

export default App
