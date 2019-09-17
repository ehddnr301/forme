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
  color: white;
  div:not(:first-child) {
    margin-top: 20px;
  }
`;

const Clock = styled.div`
  font-size: 24px;
  margin-top: 30vh;
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
        <Message>곧 돌아 오겠습니다.</Message>
      </Container>
    </>
  );
}

export default App;
