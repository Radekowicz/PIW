import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Box, CardContent, Button, Typography, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';

const styles = (theme) => ({
  root: {
    maxWidth: 300,
    margin: 20,
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
  },
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: 'sdfsdf',
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <Typography className={classes.name} color="textPrimary">
          Found {this.props.candidates ? this.props.candidates : '0'} candidates
        </Typography>
      </Card>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResults);
