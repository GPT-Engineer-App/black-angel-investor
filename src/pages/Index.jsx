import { Container, VStack, Text, Heading, Button, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Empowering Black Tech Startups
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Investing in the future of black innovation and technology.
          </Text>
        </Box>

        <Box display="flex" justifyContent="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1572702416711-902ec877386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBhbmdlbCUyMGludmVzdG9yfGVufDB8fHx8MTcxNzQ2NzE0Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Angel Investor" />
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.600">
            I am a passionate angel investor dedicated to supporting black entrepreneurs in the tech industry. My mission is to provide the necessary resources and mentorship to help black-owned startups thrive and succeed.
          </Text>
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="lg" mb={4}>
            My Investments
          </Heading>
          <Text fontSize="md" color="gray.600">
            I have invested in numerous successful black tech startups that are making a significant impact in the industry. Join me in empowering the next generation of black innovators.
          </Text>
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Button colorScheme="teal" size="lg">
            Get in Touch
          </Button>
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <HStack spacing={4} justifyContent="center">
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
