import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Box, CardContent, Button, Typography, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import EditPopup from './EditPopup';

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
  sendMessageButton: {
    marginLeft: 10,
    marginTop: 0,
    marginBottom: 5,
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  editButton: {
    marginRight: 10,
    marginTop: 0,
    marginBottom: 5,
  },
});

class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = { popupOpen: false };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
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
                  return (
                    <Typography className={classes.tag}>{tag} </Typography>
                  );
                })}
              </Box>
            </Typography>
          </CardContent>
          <Box className={classes.cardButtons}>
            <Button
              size="small"
              endIcon={<SendIcon />}
              className={classes.sendMessageButton}
            >
              Send message
            </Button>
            <Button
              size="small"
              endIcon={<EditIcon />}
              className={classes.editButton}
              onClick={() => this.setState({ popupOpen: true })}
            >
              Edit
            </Button>
          </Box>
        </Card>
        <EditPopup
          popupOpen={this.state.popupOpen}
          onClose={() => this.setState({ popupOpen: false })}
          name={this.props.name}
          email={this.props.email}
          tags={this.props.tags}
          description={this.props.description}
          index={this.props.index}
          editStudent={this.props.editStudent}
        />
      </div>
    );
  }
}

StudentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentCard);
