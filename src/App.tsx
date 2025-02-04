import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Counter from './components/Counter';
import RichTextEditor from './components/RichTextEditor';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <Router>
      <div style={{ background: '#333', padding: '10px' }}>
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/counter" style={{ color: 'white', textDecoration: 'none' }}>Counter</Link>
          <Link to="/rich-text-editor" style={{ color: 'white', textDecoration: 'none' }}>Rich Text Editor</Link>
          <Link to="/user-form" style={{ color: 'white', textDecoration: 'none' }}>User Form</Link>
        </nav>
      </div>

      <Routes>
        {/* Default Route - Redirect to Counter */}
        <Route path="/" element={<Navigate to="/counter" replace />} />

        <Route path="/counter" element={<Counter />} />
        <Route path="/rich-text-editor" element={<RichTextEditor />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
