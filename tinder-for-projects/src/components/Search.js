import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

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

  useEffect(() => {}, []);

  return (
    <Box>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search descriptions"
          // inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search tags"
          // inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Search;
