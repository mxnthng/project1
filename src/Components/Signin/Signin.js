import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';

import { Button, CssBaseline, TextField, Link, Grid, Box, Container, Typography } from '@material-ui/core';

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

  handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: {
        email: this.refemail.value,
        password: this.refpassword.value,
      }
    }).then(res => {
        console.log(res);
        alert("Đăng nhập thành công!");
        this.setState({ isUser: true });
        // console.log(this.state.isUser);
        let token = res.data;
        localStorage.setItem("token", token);
    }).catch(err => {
        alert(err);
    });
  }

  render() {
    if (this.state.isUser) {
      return <Redirect to="/message" />;
    }

    localStorage.removeItem('token');
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={styles.paper}>
          <div style={styles.clearfix}> </div>
          <Typography component="h1" variant="h4">
            Đăng nhập
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
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              onClick={this.handleSubmit}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item center>
                <NavLink to="/signup" style={{'fontSize': '16px', 'color': 'blue'}}>
                  Đăng ký tài khoản
                </NavLink>
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