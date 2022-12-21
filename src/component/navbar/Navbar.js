import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import "./Navbar.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/ic_dolphin.png";
import Image from "react-bootstrap/Image";
import Foto from "../../assets/images/image.jpeg";

import * as notif from "react-icons/io";
import * as setting from "react-icons/ci";

export default function App() {
  const NavIcon = styled(Link)`
    margin-left: 10px;
    font-size: 2rem;
    height: 25px;
    width: 20px;
    display: flex;
    align-items: center;
  `;

  return (
    <Navbar
      className="color-nav"
      collapseOnSelect
      expand="lg"
      bg="#ffffff"
      variant="light"
      style={{ paddingRight: 10, paddingLeft: 10 }}
    >
      <Navbar.Brand href="#home">
        <NavIcon to="#">
          <img className="logo" src={logo} alt="logo" />
          <div className="row logo-text" style={{ margin: 10 }}>
            <h5>3DOLPHINS</h5>
            <p>Version 5.2.X</p>
          </div>
        </NavIcon>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Form className="">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2 w-370"
              aria-label="Search"
              style={{ height: 25 }}
            />
          </Form>
          <NavIcon style={{ color: "#2c2c2c" }}>
            <notif.IoIosNotificationsOutline />
          </NavIcon>
          <NavIcon style={{ color: "#2c2c2c" }}>
            <setting.CiSettings />
          </NavIcon>
        </Nav>
        <div style={{ marginLeft: 10 }}>
          <div className="row justify-align-center">
            <h6>Nandha Yuana D</h6>
            <p>Operator</p>
          </div>
        </div>
        <Image
          className="profil"
          src={Foto}
          roundedCircle
          style={{ marginRight: 10 }}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}
