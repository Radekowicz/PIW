import React, { useState, useEffect } from 'react';
import AddCard from '../components/Students/AddCard';
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

const AddStudentPage = (props) => {
  const classes = useStyles();

  const addStudent = (name, email, tags, description) => {
    if (name && email && tags && description) {
      const newCard = {
        name: name,
        email: email,
        tags: tags,
        description: description,
      };
      props.setCards([...props.cards, newCard]);
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

export default AddStudentPage;
