import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Box, CardContent, Button, Typography, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';

const styles = (theme) => ({
  root: {
    margin: 20,
    backgroundColor: 'white',
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
  },
  description: {
    fontSize: 15,
    marginBottom: 12,
    marginTop: 10,
  },
  tags: {
    fontSize: 13,
    marginTop: 20,
  },
  tag: {
    marginLeft: 5,
    fontSize: 13,
  },
  sendMessage: {
    marginLeft: 10,
    marginTop: 0,
    marginBottom: 5,
  },
});

class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent>
          <Box className={classes.nameContainer}>
            <AccountCircleIcon className={classes.avatar} />
            <Typography
              className={classes.name}
              color="textPrimary"
              gutterBottom
            >
              {this.props.name}
            </Typography>
          </Box>
          <Typography className={classes.description} color="textPrimary">
            {this.props.description}
          </Typography>
          <Typography className={classes.tags} color="textSecondary">
            <Box display="flex" flexDirection="row">
              Tags:{' '}
              {this.props.tags?.map((tag) => {
                return <Typography className={classes.tag}>{tag} </Typography>;
              })}
            </Box>
          </Typography>
        </CardContent>
        <Button
          size="small"
          endIcon={<SendIcon />}
          className={classes.sendMessage}
        >
          Send message
        </Button>
      </Card>
    );
  }
}

StudentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentCard);
