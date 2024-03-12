import React from 'react';
import RegisterForm from '../Account/RegistrationForm';
import UsersList from '../Account/UserList';
import UserSearch from '../Account/UserSearch';

function Apptest() {
  return (
    <div>
      <h1>GraphQL React MySQL Example</h1>
      <RegisterForm />
      <br/>
      <UsersList />
      <br/>
      <UserSearch />
    </div>
  );
}

export default Apptest;
