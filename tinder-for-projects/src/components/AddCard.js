import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Box, TextField, Grid, Button, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: 20,
  },
  paper: {
    padding: 40,
    height: 500,
    width: 300,
    margin: 20,
  },
  textField: {
    margin: '15px auto',
    height: 40,
  },
  loginButton: { margin: '110px auto' },
}));

function Search(props) {
  const classes = useStyles();
  const [typedName, setTypedName] = useState('');
  const [typedDescription, setTypedDescription] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [typedTags, setTypedTags] = useState('');

  useEffect(() => {}, []);

  const addStudent = () => {
    props.addStudent(typedName, typedEmail, ['typedTags'], typedDescription);
  };

  return (
    <Paper elevation={10} className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <h2>Add student</h2>
        <TextField
          variant="outlined"
          label="Name"
          placeholder="Enter name"
          fullWidth
          className={classes.textField}
          onChange={({ target: { value } }) => {
            setTypedName(value);
          }}
        />

        <TextField
          variant="outlined"
          label="Email"
          placeholder="Enter email"
          fullWidth
          className={classes.textField}
          onChange={({ target: { value } }) => {
            setTypedEmail(value);
          }}
        />
        <TextField
          variant="outlined"
          label="Tags"
          placeholder="Enter tags"
          fullWidth
          className={classes.textField}
          onChange={({ target: { value } }) => {
            setTypedTags(value);
          }}
        />
        <TextField
          variant="outlined"
          label="Description"
          placeholder="Enter description"
          multiline
          rows={5}
          fullWidth
          className={classes.textField}
          onChange={({ target: { value } }) => {
            setTypedDescription(value);
          }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          className={classes.loginButton}
          onClick={() => addStudent()}
        >
          Add
        </Button>
      </Grid>
    </Paper>
  );
}

export default Search;
