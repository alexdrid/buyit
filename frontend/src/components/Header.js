import React from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Col,
  Image,
} from "react-bootstrap"
import SearchBox from "./SearchBox"
import { logout } from "../actions/userActions"

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/" className="mr-5">
            <Navbar.Brand>
              <img
                src="/images/bag.svg"
                width="30"
                className="d-inline-block align-top mr-2 logo"
              />
              Buy It
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col lg={3} className="px-0">
              <Nav className="ml-auto justify-content-end">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    {userInfo.isAdmin && (
                      <>
                        <LinkContainer to="/admin/userlist">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/productlist">
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orderlist">
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    )}
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Col>
            <Col
              lg={9}
              className="mx-auto px-0 px-lg-3 m-md-0 m-2 order-lg-first"
            >
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
