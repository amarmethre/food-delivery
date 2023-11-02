import React ,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../../style/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const[mobileOpen, setMobileOpen]= useState(false)
  //Handle menu click
  const handleDrawerToggle= () =>{
    setMobileOpen(!mobileOpen)
  }

  //Menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>

     <Typography
      color={'goldenrod'} 
      variant="h6"
      component="div"  
      sx={{flexGrow:1,my:2}}
      > 
            <FastfoodIcon/>
            My Resturant
            </Typography>
            <Divider/>
              <ul>
                <li>
                  <Link to={'/home'}>Home</Link>
                  
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                  
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                  
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                  
                </li>
              </ul>

           

    </Box>
  )
  return (
    <>
       <Box>
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer'
             edge="start" 
             sx={{
              mr:2, 
              display:{sm:'none'}
              }}
              onClick={handleDrawerToggle}
              >
              <MenuIcon/>
            </IconButton>
          <Typography color={'goldenrod'} variant="h6" component="div"  sx={{flexGrow:1}}> 
            <FastfoodIcon/>
            My Resturant</Typography>
            <Box sx={{display: {xs:"none", sm:"black"}}}>
              <ul className="navigation-menu">
                <li>
                  <Link to={'/home'}>Home</Link>
                  
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                  
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                  
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                  
                </li>
              </ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileOpen}
           onClose={handleDrawerToggle}
           sx={{display:{xs:'block',sm:'none'},
           "& .MuiDrawer-paper": {
            boxSizing:'border-box',
            width: "240px",
           },
          }}
           
           >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{p: 1}}>
        <Toolbar/> 
        </Box>
       
       </Box>
    </>
  )
}

export default Header