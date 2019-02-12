import React from "react";
import Styled from "styled-components";

const Main = () => (
    <MainDiv>
        <h1>Clicky Game</h1>
        <h3>Click on each image to earn points, BUT don't click on any more than once!</h3>
    </MainDiv>
);

const MainDiv = Styled.div`
        margin-top: 0;
        background-image: url(bg-img.png);
        background-attachment: fixed;
        background-position: center bottom;
        min-height:400px;
        display: flex;
        justify-content: center;
        flex-direction: column;
          
        h1, h3 {
            margin: 5;
            color: white;
            text-align:center;
            text-shadow: -1px 1px 5px rgba(100, 100, 100, 1);
            
        }`;

        
export default Main;