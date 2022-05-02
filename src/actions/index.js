const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export { deleteTicket, toggleForm }