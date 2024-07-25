import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

const App = () => {
  return (
    <Box>
      <Flex as="header" bg="teal.500" p={4} color="white">
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/projects" p={2}>
          Projects
        </Link>
        <Link as={RouterLink} to="/experience" p={2}>
          Experience
        </Link>
        <Link as={RouterLink} to="/about" p={2}>
          About
        </Link>
        <Spacer />
      </Flex>
      <Box p={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
