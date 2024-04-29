import { Menu, MenuButton, MenuList,Button, MenuItem,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const LoginBtn = () => {
  const lStorage = JSON.parse(localStorage.getItem("ecom-login-status"))
  if(!lStorage){
    localStorage.setItem("ecom-login-status",JSON.stringify({"name" : "Login", "status": false}));
  }
  
  

const [logInStatus,setIsLogIn] = useState(JSON.parse(localStorage.getItem("ecom-login-status")))

useEffect(()=>{
  setIsLogIn(JSON.parse(localStorage.getItem("ecom-login-status")))
})

  return (
<Menu bg={"black"}>
  <MenuButton bg={"black"} color={"white"} as={Button} rightIcon={">"}>
  
    {
      logInStatus.status == false || logInStatus.status == null? <NavLink to={'/login'}>Login </NavLink>  : <Text>{logInStatus.name}</Text>
    }
  </MenuButton>
  <MenuList bg={"black"}>
    <MenuItem fontSize={"md"} bg={"black"}>{logInStatus.status == false || logInStatus.status == null ? 
      <NavLink to={'/login'}>LogIn </NavLink>
    : <button onClick={()=>{
      localStorage.setItem("ecom-login-status",JSON.stringify({"name" : "Login", "status": false}));
      setIsLogIn(JSON.parse(localStorage.getItem("ecom-login-status")))
      }}>Logout</button>}</MenuItem>
  </MenuList>
</Menu>
  )
}

export default LoginBtn