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

const MainPage = (props) => {
  const classes = useStyles();

  const [searchCards, setSearchCards] = useState();
  const [numberOfResults, setNumberOfResults] = useState(props.cards.length);

  useEffect(() => {
    calcNumberOfResults();
  });

  const updateCardsTags = (input) => {
    if (input) {
      const filtered = [];
      props.cards.forEach((card) => {
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
      const filtered = props.cards?.filter((card) => {
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
      setNumberOfResults(props.cards.length);
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
        {(searchCards ? searchCards : props.cards).map((card) => {
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
