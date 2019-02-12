import React from "react";
import Styled from "styled-components";

const Footer = () => (
    <FooterDiv>
        <div className="bottom">PlipandFirt Design</div>
    </FooterDiv>
);

const FooterDiv = Styled.div `
        width: 100%;
        height:5vw;
        bottom:0;
        margin-bottom:0;
        margin-top: 25px;
        text-align:center;
        background-color: #97340A;
        color: white;
        overflow:auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        `
        
export default Footer;