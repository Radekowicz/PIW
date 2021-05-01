import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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

function EditPopup(props) {
  const classes = useStyles();
  const [typedName, setTypedName] = useState(props.name);
  const [typedEmail, setTypedEmail] = useState(props.email);
  const [typedTags, setTypedTags] = useState(props.tags);
  const [typedDescription, setTypedDescription] = useState(props.description);

  useEffect(() => {
    setTypedName(props.name);
    setTypedEmail(props.email);
    setTypedTags(props.tags);
    setTypedDescription(props.description);
  }, [props.name, props.email, props.tags, props.description]);

  const editStudent = () => {
    props.editStudent(
      props.index,
      typedName,
      typedEmail,
      typedTags,
      typedDescription
    );
    handlePopupClose();
  };

  const handlePopupClose = () => {
    props.onClose();
    setTypedName(props.name);
    setTypedEmail(props.email);
    setTypedTags(props.tags);
    setTypedDescription(props.description);
  };

  return (
    <Popup
      modal
      open={props.popupOpen}
      onClose={() => handlePopupClose()}
      contentStyle={{ width: 'auto' }}
    >
      <Paper elevation={10} className={classes.paper}>
        <Grid className={classes.root} container>
          <h2>Edit post</h2>
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
            onClick={() => editStudent()}
          >
            Save changes
          </Button>
        </Grid>
      </Paper>
    </Popup>
  );
}

export default EditPopup;
