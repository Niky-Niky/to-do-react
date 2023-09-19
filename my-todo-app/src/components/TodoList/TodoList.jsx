import React from 'react';
import {List, Item, Text, Button} from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <Text completed={completed}>{text}</Text>
        <Button
          type='button'
          onClick={() => onDeleteTodo(id)}
        >
          Delete
          </Button>
      </Item>
    ))}
  </List>
);

export default TodoList;