import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react';

const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

const Home = () => {
  // Responsive layout adjustment
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const name = 'Riyaz Ahammad';
  const nameColor = "#cc0044"; // Customize this color as needed

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      p={4}
    >
      <Flex
        direction={flexDirection}
        maxW="1200px"
        w="full"
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        p={6}
        borderRadius="md"
        boxShadow="md"
      >
        <Box
          flex="1"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Hey! This is <span style={{ color: nameColor }}>
              <Typewriter text={name} />
            </span>
          </Heading>
          <Text fontSize="lg" mb={4}>
            <Typewriter
              text="I’m a full stack developer. Here, I share my projects, experiences, and more about myself. Feel free to explore and get in touch!"
              // speed={200} // Speed can be adjusted for different texts
            />
          </Text>
        </Box>
        <Image
          src="https://inspiration.rehlat.com/wp-content/uploads/2018/09/jack-titanic.jpg"
          alt={name}
          boxSize={{ base: '200px', md: '250px' }}
          objectFit="cover"
          borderRadius="full"
        />
      </Flex>
    </Box>
  );
};

export default Home;
