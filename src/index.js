import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import  { GlobalStyles } from './styles/Global.styled'; 
import { Container, Button, TopBar, MenuButton } from './styles/App.styled';
import Home from './components/home.js';
import About from './components/about.js';
import Menu from './components/menu.js';
import Register from './components/register.js';
import Login from './components/login.js';
import Dashboard from './components/dashboard.js';
import Credits from './components/credits.js';

const App = () => {
    const [showMenu, setShowMenu] = useState(false);
    const displayMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <Router>
        <GlobalStyles />
        <Container>
        <TopBar>
        <MenuButton onClick={displayMenu}>Menu</MenuButton>
{showMenu ? <Menu /> : <div />}
    </TopBar>
 <Routes>
                <Route exact path='/' element={< Home />}></Route>
 <Route exact path='/about' element={< About />}></Route>
 <Route exact path='/login' element={< Login />}></Route>
 <Route exact path='/register' element={< Register />}></Route>
 <Route exact path='/dashboard' element={< Dashboard />}></Route>
 <Route exact path='/credits' element={ < Credits /> }></Route>
 </Routes>
 </Container>
 </Router>
 );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
