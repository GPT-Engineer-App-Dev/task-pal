import { Box, Button, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <Heading>Welcome to the Todo App</Heading>
      <Button as="a" href="/todo" colorScheme="teal" size="lg" mt={4}>
        Go to Todo List
      </Button>
    </Box>
  );
};

export default Index;