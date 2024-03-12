import {useState} from 'react';
import { useQuery, gql } from '@apollo/client';

// Запит GraphQL для отримання всіх користувачів
const GET_USERS = gql`
  query {
    users {
      id
      username
    }
  }
`;

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredUsers = data.users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch ;