import React, { useState, useEffect } from 'react';
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

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    if (data && data.users) {
      // Сортування користувачів за ID перед відображенням
      const sorted = [...data.users].sort((a, b) => a.id - b.id);
      setSortedUsers(sorted);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>All Users (Sorted by ID)</h2>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;