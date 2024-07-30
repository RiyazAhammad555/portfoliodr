import React from 'react';
import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react';
import { FaLaptopCode, FaReact, FaMobileAlt } from 'react-icons/fa'; // Importing some icons for illustration

const Expertise = () => {
    let content1="<h3>"
    let content2="</h3>"
  return (
    <Box
    //   bg="gray.900"
      color="white"
      p={18}
    //   minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={-20}
    >
      <Heading mb={8} fontSize={['2xl', '5xl']}>
        My Expertise
      </Heading>
      <Flex
        direction={['column', 'row']}
        justify="center"
        align="center"
        maxW="76%"
        border="1px solid white"
        borderRadius="md"
        overflow="hidden"
        width="100%"
      >
        <Box
          flex="1"
          bg="black"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={10}
          borderRight={['none', '1px solid white']}
          borderBottom={['1px solid white', 'none']}
        >
          <FaLaptopCode size={40} />
          <Heading as="h3" fontSize="xl" mt={4} mb={2}>
            <Text as="span" textDecoration="underline" textDecorationColor="pink.400">
              Software
            </Text>{' '}
            Development
          </Heading>
          <Divider borderColor="white" my={4} />
          <Flex direction="row" p={1}>
            <Flex direction="column">
                <div style={{fontSize:14,color:'grey'}}>{content1}</div>
                <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4}/>
                <div style={{fontSize:14,color:'grey'}}>{content2}</div>
            </Flex>
          <Heading as="h3" fontSize="sm" textAlign="center" fontWeight="normal" lineHeight="1.5" p={1} width={250} mt={5}>
           Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks.
          </Heading>
          </Flex>
        </Box>
        <Box
          flex="1"
          bg="black"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={10}
          borderRight={['none', '1px solid white']}
          borderBottom={['1px solid white', 'none']}
        >
          <FaReact size={40} />
          <Heading as="h3" fontSize="xl" mt={4} mb={2}>
            <Text as="span" textDecoration="underline" textDecorationColor="blue.400">
              Frontend Dev
            </Text>{' '}
            React, NextJS
          </Heading>
          <Divider borderColor="white" my={4} />
          <Flex direction="row" p={1}>
            <Flex direction="column">
                <div style={{fontSize:14,color:'grey'}}>{content1}</div>
                <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4}/>
                <div style={{fontSize:14,color:'grey'}}>{content2}</div>
            </Flex>
          <Heading as="h3" fontSize="sm" textAlign="center" fontWeight="normal" lineHeight="1.5" p={1} width={250} mt={5}>
           Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks.
          </Heading>
          </Flex>
        </Box>
        <Box
          flex="1"
          bg="black"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={8}
        >
          <FaMobileAlt size={40} />
          <Heading as="h3" fontSize="xl" mt={4} mb={2}>
            <Text as="span" textDecoration="underline" textDecorationColor="orange.400">
              Flutter Dev
            </Text>{' '}
            Android, iOS
          </Heading>
          <Divider borderColor="white" my={4} />
          <Flex direction="row" p={1}>
            <Flex direction="column">
                <div style={{fontSize:14,color:'grey'}}>{content1}</div>
                <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4}/>
                <div style={{fontSize:14,color:'grey'}}>{content2}</div>
            </Flex>
          <Heading as="h3" fontSize="sm" textAlign="center" fontWeight="normal" lineHeight="1.5" p={1} width={250} mt={5}>
           Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks.
          </Heading>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Expertise;
