import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NavBar = styled.div`

    background-color: blanchedalmond;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    

`

const DivLinks = styled.div`

    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    text-decoration: none;
    color: black;

`

function Navbar() {

  const items = useSelector( (state) => state.cart );

  return (
    <NavBar>

        <div>Shopify</div>
        <DivLinks>
            <Link className='navlinks' to="/">Home</Link>
            <Link className='navlinks' to="/cart">Cart</Link>
            <span>Cart Item : {items.length}</span>
        </DivLinks>

    </NavBar>
  )
}

export default Navbar;