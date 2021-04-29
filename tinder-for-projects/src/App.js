import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import AddCardPage from './pages/AddCardPage';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const startCards = [
  {
    name: 'James Bond',
    email: 'bondjames@hermajesty.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus orci, laoreet sed congue id, rhoncus non dolor. Nullam euismod sapien in risus tincidunt, non ultricies massa commodo.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    name: 'Harry Potter',
    email: 'harrypotter@hogwart.com',
    description:
      'Donec finibus urna nec porttitor bibendum. Nullam egestas metus mi, rutrum tincidunt leo aliquet eget. Nulla lorem neque, malesuada quis bibendum.',
    tags: ['Python', 'Django', 'CSS', 'HTML'],
  },
  {
    name: 'Frodo Baggins',
    email: 'mrgaggins@thering.com',
    description:
      'Vivamus ac mauris ut diam euismod gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    tags: ['C', 'C++', 'C#', 'Assembler', 'Bash'],
  },
];

const App = () => {
  const classes = useStyles();
  const [cards, setCards] = useState(startCards);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <MainPage cards={cards} setCards={setCards} />}
        />
        <Route
          exact
          path="/addcard"
          component={() => <AddCardPage cards={cards} setCards={setCards} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
