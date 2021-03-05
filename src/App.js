import React, {useState} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { Link, Route } from 'react-router-dom';
import { auth } from './firebase';

export function SignIn(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("sign in successful")
    }).catch(() => {
      console.log(error.message)
    })
  }

  return (
  <div>
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="h6" color='inherit'>
          Sign In
        </Typography>
      </Toolbar>
    </AppBar>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Paper style={{width: 480, marginTop: 50, padding: 30}}>
        <TextField placeholder='Email' fullWidth={true} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <TextField placeholder='Password' fullWidth={true} style={{marginTop: 30}} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
          <Typography>Don't have an account? <Link to='/signup'>Sign up!</Link></Typography>
          <Button color= 'primary' variant="contained" onClick={handleSignIn}>sign in</Button>
        </div>
      </Paper>
    </div>
  </div>);
}

export function SignUp(props) {

  return (
    <div>
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="h6" color='inherit'>
          Sign Up
        </Typography>
      </Toolbar>
    </AppBar>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Paper style={{width: 480, marginTop: 50, padding: 30}}>
        <TextField placeholder='Email' fullWidth={true}/>
        <TextField placeholder='Password' fullWidth={true} style={{marginTop: 30}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
          <Typography>Already have an account? <Link to='/'>Sign in!</Link></Typography>
          <Button color= 'primary' variant="contained" to="/app" component={Link}>sign up</Button>
        </div>
      </Paper>
    </div>
  </div>);
}

export function App(props) {
  const [drawer_open,  setDrawerOpen] = useState(false)

  return (
  <div>
    <AppBar position="static" color='primary'>
      <Toolbar>
        <IconButton style={{marginRight: 30}} color='inherit'onClick={() => {setDrawerOpen(true)}}><MenuIcon/></IconButton>
        <Typography variant="h6" color='inherit' style={{flexGrow: 1}}>
          My App
        </Typography>
        <Typography color='inherit' style={{marginRight: 30}}>Hi! ryankahng@gmail.com</Typography>
        <Button color='inherit' to="/" component={Link}>Sign out</Button>
      </Toolbar>
    </AppBar>
    <Drawer open={drawer_open} onClose={() => {setDrawerOpen(false)}}>
      <div>hello</div>
    </Drawer>
  </div>);
}