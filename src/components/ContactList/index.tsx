import { useEffect, useState } from "react";
import { useWebSocket } from "../../providers/Websocket";
import { Table } from "react-bootstrap";
import { styled } from "styled-components";

const StyledCell = styled.td`
  white-space: pre-wrap;
`;

const StyledTable = styled(Table)`
  overflow: scroll;
`;

export const ContactList = () => {
  const { socket, isConnected } = useWebSocket();
  const [contacts, setContacts] = useState([]);

  const contactParams = {
    type: 'self',
    api: 'contact',
    message: {
      endpoint: 'users',
      method: 'GET',
      attributes: ['id', 'name', 'email', 'phone', 'address']
    }
  }

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        try {
          setContacts(JSON.parse(JSON.parse(event.data)?.response));
          console.log('Message from server:', JSON.parse(JSON.parse(event.data)?.response));
        } catch (error) {}
      };

      if (isConnected) {
        console.log('Sending message to server:', contactParams);
        socket?.send(JSON.stringify(contactParams));
      }
    }
  }, [socket, isConnected]);

  return (
    <Table bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map((contact: any) => (
        <tr key={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <StyledCell>
            {
`${contact.address.street}
${contact.address.city}
${contact.address.zipcode}
`
            }
          </StyledCell>
        </tr>
      )
      )}
      </tbody>
    </Table>
  );
}