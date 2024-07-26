import React from 'react';
import { Box, Flex, Link, Spacer, IconButton, useDisclosure } from '@chakra-ui/react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex as="header" bg="black" p={4} color="white" alignItems="center">
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Open Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
            color="white"
            _hover={{
              bg: '#cc0044', // Background color on hover
              color: 'white', // Ensure the text color remains readable
              boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)', // Shadow with matching color
              transform: 'scale(1.05)',
            }}
          />
        </Box>
        <Spacer />
        <Flex
          as="nav"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          alignItems="center"
          ml="auto"
          mt={2}
          mr={20}
        >
          <Link
            as={RouterLink}
            to="/"
            p={2}
            m={2} // Added margin for spacing
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              _hover: {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)', // Shadow with matching color
                color: '#cc0044', // Optional: Change text color on hover
              },
            }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/projects"
            p={2}
            m={2} // Added margin for spacing
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              _hover: {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)', // Shadow with matching color
                color: '#cc0044', // Optional: Change text color on hover
              },
            }}
          >
            Projects
          </Link>
          <Link
            as={RouterLink}
            to="/experience"
            p={2}
            m={2} // Added margin for spacing
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              _hover: {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)', // Shadow with matching color
                color: '#cc0044', // Optional: Change text color on hover
              },
            }}
          >
            Experience
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            p={2}
            m={2} // Added margin for spacing
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              _hover: {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)', // Shadow with matching color
                color: '#cc0044', // Optional: Change text color on hover
              },
            }}
          >
            About
          </Link>
        </Flex>
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
