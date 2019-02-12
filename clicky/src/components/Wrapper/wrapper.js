import React from "react";
import Styled from "styled-components";

const Wrapper = props => <WrapperDiv>{props.children}</WrapperDiv>

const WrapperDiv = Styled.div `
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    max-width: 75%;
    margin:auto;
    margin-top:50px;
    margin-bottom:50px;
    `    


export default Wrapper;