import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
  avatar: {
    'margin': '8px',
    'backgroundColor': 'theme.palette.secondary.main',
  },
  form: {
    'width': '100%',
    'marginTop': '24px',
  },
  submit: {
    'margin': '32px 0px 16px',
  },
  clearfix: {
    'height': '80px',
  },
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
    }
  }
  

  handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/register',
      data: {
        userName: this.username.value,
        password: this.password.value,
        email: this.email.value,
      }
    }).then(res => {
        console.log(res);
        alert("Đăng ký thành công! Hệ thống sẽ chuyển đến trang đăng nhập");
        this.setState({ signed: true });
    }).catch(err => {
        alert(err);
    });
  }

  render() {
    if (this.state.signed) {
      return <Redirect to="/" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={styles.paper}>
          <div style={styles.clearfix}></div>
          <Typography component="h1" variant="h4">
            Đăng ký
          </Typography>
          <form style={styles.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={ (username) => {this.username = username} }
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Tên người dùng"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ (email) => {this.email = email} }
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ (password) => {this.password = password} }
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={this.handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Đăng ký
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/" style={{'fontSize': '16px', 'color': 'blue'}}>
                  Chuyển đến trang đăng nhập
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default SignUp;