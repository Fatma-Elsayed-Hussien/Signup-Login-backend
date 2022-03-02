import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from '../styles.module.css';

export default function Header() {
    const logoutHandler = () => {
        localStorage.removeItem("token");
        window.location.href = '/login';
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    {localStorage.getItem("token") ? (
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink
                                    to={"/UsersMap"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    UsersMap
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to={"/SendImage"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    Send Image
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to={"/Profile"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    Profile
                                </NavLink>
                            </Nav.Link>
                            <button className='logout-btn' onClick={() => logoutHandler()}>Logout</button>
                        </Nav>
                    ) : (
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink
                                    to={"/SignUp"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    SignUp
                                </NavLink> {" "}
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to={"/login"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    Login
                                </NavLink> {" "}
                            </Nav.Link>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </>
    )
}