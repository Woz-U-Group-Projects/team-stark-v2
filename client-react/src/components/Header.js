import React from 'react';

const Header = ({ title }) => (
    <div id="header">
        <a href="/">Home</a>
        <a href="/User">Register</a>
        <a href="/Login">Login</a>
        <a href="/UpdateUser">UpdateUser</a>
        <a href="/Biller">Biller</a>
        <a href="/UpdateBiller">Update Biller</a>
        <h1>{title}</h1>
    </div>
);

export default Header;