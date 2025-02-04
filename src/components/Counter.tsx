import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const handleReset = () => setCount(0);

  return (
    <Box
      sx={{
        height: '100vh',
        background: `linear-gradient(to top, #90caf9 ${count * 10}%, white 0%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Box>
        <Button onClick={handleIncrement} variant="contained" color="primary">Increment</Button>
        <Button onClick={handleDecrement} variant="contained" color="secondary" sx={{ mx: 2 }}>Decrement</Button>
        <Button onClick={handleReset} variant="outlined" color="error">Reset</Button>
      </Box>
    </Box>
  );
};

export default Counter;