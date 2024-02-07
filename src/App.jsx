import { Box, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
    <Box>
      <Header />
      <Container centerContent>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
