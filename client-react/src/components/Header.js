import React from 'react';

const Header = ({ title }) => (
    <div id="header">
        <a href="/"> Home </a>
        <br></br>
        <a href="/Login"> Login </a>
        <br></br>
        <a href="/User"> Register User </a>
        <br></br>
        <a href="/UpdateUser"> Update User </a>
        <br></br>
        <a href="/DeleteUser"> Delete User </a>
        <br></br>
        <a href="/Biller"> Add Bill </a>
        <br></br>
        <a href="/DeleteBill"> Delete Bill </a>
        <br></br>
        <a href="/UpdateBill"> Update Bill</a>
        <hr></hr>
        <h1>{title}</h1>
    </div>
);

export default Header;