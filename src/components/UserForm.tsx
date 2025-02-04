import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', address: '', email: '', phone: '' });
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormChanged) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFormChanged]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormChanged(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const userId = uuidv4();
    localStorage.setItem(userId, JSON.stringify({ id: userId, ...formData }));
    setIsFormChanged(false);
    setFormData({ name: '', address: '', email: '', phone: '' });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">User Form</Typography>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default UserForm;