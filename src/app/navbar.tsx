"use client"

import React from "react"
import Link from "next/link"
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const NavList = () => (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.name} onClick={toggleDrawer(false)} component={Link} href={item.path}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <AppBar position="static" className="bg-black">
      <Toolbar className="justify-between">
        <Typography variant="h6" component={Link} href="/" className="text-white no-underline">
          devStarter
        </Typography>
        <div className="hidden md:flex">
          {navItems.map((item) => (
            <Button key={item.name} color="inherit" component={Link} href={item.path} className="ml-4">
              {item.name}
            </Button>
          ))}
        </div>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="md:hidden">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className="w-64">
          <NavList />
        </div>
      </Drawer>
    </AppBar>
  )
}

export default Navbar

