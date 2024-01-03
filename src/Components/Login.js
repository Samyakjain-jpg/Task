import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  CssBaseline,
} from '@mui/material';

const LoginPage = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login:', email, password);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '50px', backgroundColor: '#ECF9FF' }}>
      <Typography variant="h5" color="primary" mb={3}>
        Login
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" mt={2} color="textSecondary">
        Don't have an account?{' '}
        <span style={{ cursor: 'pointer', color: '#1E88E5' }} onClick={onToggle}>
          Sign Up
        </span>
      </Typography>
    </Paper>
  );
};

const SignupPage = ({ onToggle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('SignUp:', name, email, password, confirmPassword);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '50px', backgroundColor: '#FFFBEB' }}>
      <Typography variant="h5" color="primary" mb={3}>
        Sign Up
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" mt={2} color="textSecondary">
        Already have an account?{' '}
        <span style={{ cursor: 'pointer', color: '#1E88E5' }} onClick={onToggle}>
          Login
        </span>
      </Typography>
    </Paper>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container justifyContent="center">
        {isLogin ? (
          <LoginPage onToggle={handleToggle} />
        ) : (
          <SignupPage onToggle={handleToggle} />
        )}
      </Grid>
    </Container>
  );
};

export default AuthPage;
