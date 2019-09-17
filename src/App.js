import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
`;

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  div:not(:last-child) {
    margin-top: 20px;
  }
`;

const Clock = styled.div`
  font-size: 24px;
`;

const Greeting = styled.div`
  font-size: 14px;
`;

const Message = styled.div``;

function App(props) {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Container>
        <Clock>{date.toLocaleTimeString()}.</Clock>
        <Greeting>안녕하세요 97번 좌석입니다.</Greeting>
        <Message></Message>
      </Container>
    </>
  );
}

export default App;
