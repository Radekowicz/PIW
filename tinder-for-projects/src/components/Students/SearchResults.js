import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Card } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    maxWidth: 300,
    margin: 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
  },
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <Typography className={classes.name} color="textPrimary">
          Found {this.props.results ? this.props.results : '0'} students
        </Typography>
      </Card>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResults);
