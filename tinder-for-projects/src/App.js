import React, { useState, useEffect } from 'react';
import Cards from './components/studentCard/StudentCard';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import AddCard from './components/AddCard';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardContent, Button, Typography, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  leftContainer: {
    maxWidth: 800,
  },
  searchBar: {
    display: 'flex',
  },
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus orci, laoreet sed congue id, rhoncus non dolor. Nullam euismod sapien in risus tincidunt, non ultricies massa commodo.',
    tags: ['Python', 'Django', 'CSS', 'HTML'],
  },
  {
    name: 'Fordo Baggins',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus orci, laoreet sed congue id, rhoncus non dolor. Nullam euismod sapien in risus tincidunt, non ultricies massa commodo.',
    tags: ['C', 'C++', 'C#', 'Assembler', 'Bash'],
  },
];

const App = () => {
  const classes = useStyles();

  const [cards, setCards] = useState(startCards);

  const addStudent = (name, email, tags, description) => {
    const newCard = {
      name: name,
      email: email,
      tags: tags,
      description: description,
    };
    setCards([...cards, newCard]);
  };

  return (
    <Box class={classes.container}>
      <Box class={classes.leftContainer}>
        <Box class={classes.searchBar}>
          <Search />
          <SearchResults />
        </Box>
        {cards.map((card) => {
          return (
            <Cards
              name={card.name}
              description={card.description}
              tags={card.tags}
            />
          );
        })}
      </Box>
      <AddCard addStudent={addStudent} />
    </Box>
  );
};

export default App;
