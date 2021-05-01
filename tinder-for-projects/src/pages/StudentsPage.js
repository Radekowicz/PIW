import React, { useState, useEffect } from 'react';
import StudentCard from '../components/Students/StudentCard';
import Search from '../components/Students/Search';
import SearchResults from '../components/Students/SearchResults';
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
    flexDirection: 'column-reverse',
    justifyContent: 'center',
  },
  searchBar: {
    display: 'flex',
  },
}));

const StudentsPage = (props) => {
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

  const editStudent = (index, name, email, tags, description) => {
    if (name && email && tags && description) {
      const editedCard = {
        name: name,
        email: email,
        tags: tags,
        description: description,
      };
      let tempCards = [...props.cards];
      tempCards[index] = editedCard;
      props.setCards(tempCards);
    } else {
      window.alert('Fill all inputs to edit student');
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
        {(searchCards ? searchCards : props.cards).map((card, index) => {
          return (
            <StudentCard
              name={card.name}
              email={card.email}
              description={card.description}
              tags={card.tags}
              index={index}
              editStudent={editStudent}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default StudentsPage;
