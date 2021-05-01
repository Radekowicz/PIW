import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: 20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Search(props) {
  const classes = useStyles();

  return (
    <Box>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search descriptions"
          type="text"
          onChange={({ target: { value } }) => {
            props.updateCardsDescription(value);
          }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search tags"
          onChange={({ target: { value } }) => {
            props.updateCardsTags(value);
          }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Search;
