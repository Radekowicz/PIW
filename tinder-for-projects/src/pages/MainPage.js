import React, { useState, useEffect } from 'react';
import Cards from '../components/StudentCard';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    maxWidth: 900,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

const MainPage = () => {
  const classes = useStyles();

  const [cards, setCards] = useState(startCards);
  const [searchCards, setSearchCards] = useState();
  const [numberOfResults, setNumberOfResults] = useState(cards.length);

  useEffect(() => {
    calcNumberOfResults();
  });

  const updateCardsTags = (input) => {
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
  };

  const updateCardsDescription = (input) => {
    if (input) {
      const filtered = cards?.filter((card) => {
        return card.description
          .toLowerCase()
          .includes(input.toString().toLowerCase());
      });
      setSearchCards(filtered);
    } else {
      setSearchCards('');
    }
  };

  const calcNumberOfResults = () => {
    if (searchCards) {
      setNumberOfResults(searchCards.length);
    } else {
      setNumberOfResults(cards.length);
    }
  };

  return (
    <Box class={classes.container}>
      <Box class={classes.searchBar}>
        <Search
          updateCardsTags={updateCardsTags}
          updateCardsDescription={updateCardsDescription}
        />
        <SearchResults results={numberOfResults} />
      </Box>
      <Box class={classes.leftContainer}>
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
    </Box>
  );
};

export default MainPage;
