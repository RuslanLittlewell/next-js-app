import Navigation from "next-components/Navigation";
import A from 'next-components/Link'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Users = ({ users }) => {

  return (
    <div>
    <Navigation />
      <h1>Users page</h1>
      <style jsx>
        {
          `.navbar {
            background-color: green;
          }
          `
        }
      </style>
      <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
          <Th>Name</Th>
          <Th>Phone</Th>
          <Th>Email</Th>
          <Th>Site</Th>
          </Tr>
        </Thead>
        <Tbody>
        {users.map((user) => 
          <Tr key={user.id}>
            <Td><A href={`/users/${user.id}`} text={user.name} /></Td>
            <Td>{user.phone}</Td>
            <Td>{user.email}</Td>
            <Td>{user.website}</Td>
          </Tr>
        )}
          
        </Tbody>
      </Table>
      </TableContainer>
    </div>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {
      users
    }
  }
}