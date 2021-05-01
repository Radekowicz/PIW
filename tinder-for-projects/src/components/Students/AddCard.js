import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
import TagSearch from './TagSearch';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirextion: 'row',
    alignItems: 'center',
  },
  paper: {
    padding: 40,
    minHeight: 550,
    width: 300,
    margin: 20,
  },
  textField: {
    margin: '15px auto',
    height: 40,
  },
  loginButton: {
    alignSelf: 'flex-end',
    marginTop: 120,
    height: 40,
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [typedTags, setTypedTags] = useState([]);
  const [typedDescription, setTypedDescription] = useState('');

  const addStudent = () => {
    props.addStudent(typedName, typedEmail, typedTags, typedDescription);
    setTypedName('');
    setTypedEmail('');
    setTypedTags([]);
    setTypedDescription('');
  };

  return (
    <Paper elevation={10} className={classes.paper}>
      <Grid className={classes.root} container>
        <h2>Add student</h2>
        <TextField
          variant="outlined"
          label="Name"
          placeholder="Enter name"
          fullWidth
          className={classes.textField}
          value={typedName}
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
          value={typedEmail}
          onChange={({ target: { value } }) => {
            setTypedEmail(value);
          }}
        />
        <TagSearch
          value={typedTags}
          setValue={setTypedTags}
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          label="Description"
          placeholder="Enter description"
          multiline
          rows={5}
          fullWidth
          className={classes.textField}
          value={typedDescription}
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
