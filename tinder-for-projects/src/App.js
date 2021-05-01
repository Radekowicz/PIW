import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StudentsPage from './pages/StudentsPage';
import AddStudentPage from './pages/AddStudentPage';
import GroupsPage from './pages/GroupsPage';
import AddGroupPage from './pages/AddGroupPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const startStudentCards = [
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

const startGroupCards = [
  {
    name: 'InnoDocs',
    email: 'applciations@innodocs.com',
    description:
      'Donec finibus urna nec porttitor bibendum. Nullam egestas metus mi, rutrum tincidunt leo aliquet eget. Nulla lorem neque, malesuada quis bibendum. Vivamus ac mauris ut diam euismod gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    tags: ['React', 'Slate', 'Python', 'Flask', 'TinyDB'],
  },
  {
    name: 'Best Tournament App',
    email: 'besttournamentapp@gmail.com',
    description:
      'Cras commodo eros dui, at pharetra lorem accumsan quis. Vivamus id leo sagittis, accumsan libero non, auctor turpis. Nam turpis arcu, vestibulum eu eros a, molestie tincidunt neque. Ut facilisis, lorem quis interdum condimentum, odio ante ultricies dolor, vitae pharetra augue mauris et urna.',
    tags: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js'],
  },
  {
    name: 'New Facebook',
    email: 'newfb@marksucs.com',
    description:
      'Vivamus ac mauris ut diam euismod gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
];

const App = () => {
  const [studentCards, setStudentCards] = useState(startStudentCards);
  const [groupCards, setGroupCards] = useState(startGroupCards);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path="/students"
          component={() => (
            <StudentsPage cards={studentCards} setCards={setStudentCards} />
          )}
        />
        <Route
          path="/addStudent"
          component={() => (
            <AddStudentPage cards={studentCards} setCards={setStudentCards} />
          )}
        />
        studentCards
        <Route
          path="/groups"
          component={() => (
            <GroupsPage cards={groupCards} setCards={setGroupCards} />
          )}
        />
        <Route
          path="/addGroup"
          component={() => (
            <AddGroupPage cards={groupCards} setCards={setGroupCards} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
