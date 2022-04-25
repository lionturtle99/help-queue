import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Container from 'react-bootstrap/Container';

function App(){
  return ( 
    <Container className="px-5">
      <Header />
      <TicketControl />
    </Container>
  );
}

export default App;