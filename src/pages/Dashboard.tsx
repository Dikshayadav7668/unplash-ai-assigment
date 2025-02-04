import React from 'react';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditor from '../components/RichTextEditor';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Counter />
      <UserForm />
      <RichTextEditor />
    </div>
  );
};

export default Dashboard;