import React, { Component } from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.hust.edu.vn/">
        Project 1, HUST
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = {
  paper: {
    'marginTop': '64px',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
  },
  clearfix: {
    'height': '80px',
  },
  form: {
    'width': '100%',
    'marginTop': '8px',
  },
  submit: {
    'margin': '32px 0px 24px',
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false

    }
  }

  handleSubmit = () => {
    if ((this.username.value === "hust") && (this.password.value === "1")) {
      alert("Đăng nhập thành công!");
      this.setState({ direct: "/home" });
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
    
  }

  
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={styles.paper}>
          <div style={styles.clearfix}> </div>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <form style={styles.form} noValidate>
            <TextField
              inputRef={(email) => { this.refemail= email }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              inputRef={(password) => { this.refpassword= password }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={this.handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default SignIn;