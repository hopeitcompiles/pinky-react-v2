import { useContext, useState} from 'react'
import {Nav,Navbar,NavDropdown,Container, Button,Image} from 'react-bootstrap';
import {Link,useLocation} from 'react-router-dom'
import { BsMoonStarsFill as DarkMode} from 'react-icons/bs';
import { MdWbSunny as LightMode} from 'react-icons/md';
import Style from './css/Header.module.css'
import { SessionContext } from '../../imports'
import { ThemeContext } from '../../common/context/ThemeProvider';
export default function Header() {   

    const {sessionUser,LogOut}=useContext(SessionContext)
    const {theme,setTheme}=useContext(ThemeContext)

    const location=useLocation().pathname

    const handleTheme=()=>{
      if(theme==='dark'){
        setTheme('light')
        return;
      }
      setTheme('dark')
    }

  return (
    <Navbar bg={theme?theme:'light'} variant={theme?theme:'light'} expand="lg">
      <Container>
        <Navbar.Brand>
            <Nav.Link as={Link} to="/" style={{fontWeight:'bolder'}}>
            <Image style={{height:'30px',margin:'-10px 5px -5px 0px'}} 
              src='https://stickershop.line-scdn.net/stickershop/v1/product/12530647/LINEStorePC/main.png;compress=true'/>
            <span style={{color:'#FF4B2B'}}>Pinky</span> Test</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location==='/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/games" active={location==='/games'}>Games</Nav.Link>
            <Nav.Link as={Link} to="/users" active={location==='/users'}>Users</Nav.Link>
          </Nav>
          <Nav>
            {!sessionUser?
              <Nav>
                <Nav.Link as={Link} to="/login" active={location==='/login'}>Login</Nav.Link>
                <Nav.Link as={Link} to="/register" active={location==='/register'}>Sign up</Nav.Link>
              </Nav>
            :<Nav>
              <label htmlFor='basic-nav-dropdown'>
              </label>
              <NavDropdown title={(
                <Image src={sessionUser?.image} className={Style.profile_icon}/>
              )} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  {sessionUser?.role?.name} 
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={()=>LogOut()} className='text-danger'>
                      Log out
                  </NavDropdown.Item>
              </NavDropdown></Nav>
            }
            <Nav.Link active onClick={handleTheme}>
              {theme==='light'? <DarkMode size={20}/>:<LightMode size={20}/>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
