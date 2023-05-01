import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";

const adminProfile = [
  {
    label: "Admin Profile",
    path: 'user_profile'
  },
  {
    label: "Products",
    path: 'product_list'
  },

  {
    label: "Sign Out",
    path: "logOut"

  },
];

const userProfile = [
  {
    label: "My Profile",
    path: 'user_detail'
  },
  {
    label: "Sign Out",
    path: "logOut"

  },
];





const Header = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="bg-purple-500 flex items-center justify-between px-7 py-2 text-white">

      <NavLink to='/' replace className="text-xl">Sample Shop</NavLink>
      <div className="flex items-center space-x-7">

        <NavLink><i className="fa-solid fa-cart-shopping"></i> Cart</NavLink>
        <NavLink to='/user_login'>Login</NavLink>
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt="candice wu"
                className="border border-blue-500 p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />

            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            {adminProfile.map(({ label, path }) => {
              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    closeMenu();
                    nav(`/${path}`)
                  }}
                  className="flex items-center gap-2 rounded">
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>

    </header>
  )
}

export default Header




