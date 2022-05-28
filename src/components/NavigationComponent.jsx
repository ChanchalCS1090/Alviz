import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';

const NavigationComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark expand="md" className="px-5 bg-1">
                <NavbarBrand href="/">Alstack</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/bubbleSort">Bubble Sort</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/insertionSort">Insertion Sort</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/selectionSort">Selection Sort</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/binarySearchTree">Binary Search Tree</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationComponent;