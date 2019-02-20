import React from "react";
import Styled from "styled-components";

const Nav = props => (
    <NavBar>
        <h1>Clicky Card Game</h1>
        <h3>{props.navmessage}</h3>
        <h1>Score: {props.score} | Top Score: {props.topscore}</h1>
    </NavBar>
);

const NavBar = Styled.div `
    width: 100%;
    position:sticky;
    top:0;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    background-color: #97340A;
    box-shadow:0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22);
    color:white;
    margin-bottom: 0;
    // font-family: 'Uncial Antiqua', cursive;
    `
    
export default Nav;