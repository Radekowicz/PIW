import React, { useState, useEffect } from 'react';
import Cards from './components/StudentCard';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import AddCard from './components/AddCard';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardContent, Button, Typography, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftContainer: {
    maxWidth: 800,
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
  const [searchCards, setSearchCards] = useState();

  const updateCards = (input) => {
    if (input) {
      const filtered = [];
      cards.forEach((card) => {
        card.tags.forEach((tag) => {
          if (tag.toLowerCase().includes(input.toString().toLowerCase())) {
            filtered.push(card);
          }
        });
      });
      setSearchCards(filtered);
    } else {
      setSearchCards('');
    }
    console.log(searchCards);
  };

  const addStudent = (name, email, tags, description) => {
    // if (name && email && tags && description) {
    const newCard = {
      name: name,
      email: email,
      tags: tags,
      description: description,
    };
    setCards([...cards, newCard]);
    // } else {
    //   window.alert('Fill all inputs to add student');
    // }
  };

  return (
    <Box class={classes.container}>
      <Box class={classes.leftContainer}>
        <Box class={classes.searchBar}>
          <Search updateCards={updateCards} />
          <SearchResults />
        </Box>
        {(searchCards ? searchCards : cards).map((card) => {
          return (
            <Cards
              name={card.name}
              description={card.description}
              tags={card.tags}
            />
          );
        })}
      </Box>
      <Box className={classes.rightContainer}>
        <AddCard addStudent={addStudent} />
      </Box>
    </Box>
  );
};

export default App;
