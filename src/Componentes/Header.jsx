import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


const Header = () => {
    return (
        <Navbar className="bg-orange-400 w-full justify-center">
            <NavbarBrand>
                <p className="font-bold text-inherit">DollarDynamics</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Privacidad
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Politica Cookies
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;