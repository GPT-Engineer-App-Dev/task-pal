import { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Todo List</Heading>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="lg"
        mb={3}
      />
      <Button onClick={handleAddTodo} colorScheme="blue" size="lg">Add Task</Button>
      <List spacing={3} mt={4}>
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {todo}
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleDeleteTodo(index)}
              colorScheme="red"
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoPage;