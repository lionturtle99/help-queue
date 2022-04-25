import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";
import TicketImg from './../img/tickets.png';

function TicketList(props){
  return (
    <React.Fragment>
      <img src={TicketImg} alt="help tickets"></img>
      <hr/>
      {Object.values(props.ticketList).map((ticket) =>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;