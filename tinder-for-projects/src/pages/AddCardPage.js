import React, { useState, useEffect } from 'react';
import AddCard from '../components/AddCard';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftContainer: {
    width: 800,
  },
  searchBar: {
    display: 'flex',
  },
  rightContainer: {},
}));

const startCards = [
  {
    name: 'James Bond',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus orci, laoreet sed congue id, rhoncus non dolor. Nullam euismod sapien in risus tincidunt, non ultricies massa commodo.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    name: 'Harry Potter',
    description:
      'Donec finibus urna nec porttitor bibendum. Nullam egestas metus mi, rutrum tincidunt leo aliquet eget. Nulla lorem neque, malesuada quis bibendum.',
    tags: ['Python', 'Django', 'CSS', 'HTML'],
  },
  {
    name: 'Frodo Baggins',
    description:
      'Vivamus ac mauris ut diam euismod gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    tags: ['C', 'C++', 'C#', 'Assembler', 'Bash'],
  },
];

const AddCardPage = () => {
  const classes = useStyles();

  const [cards, setCards] = useState(startCards);

  const addStudent = (name, email, tags, description) => {
    if (name && email && tags && description) {
      const newCard = {
        name: name,
        email: email,
        tags: tags,
        description: description,
      };
      setCards([...cards, newCard]);
    } else {
      window.alert('Fill all inputs to add student');
    }
  };

  return (
    <Box class={classes.container}>
      <AddCard addStudent={addStudent} />
    </Box>
  );
};

export default AddCardPage;
