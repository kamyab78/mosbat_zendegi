import React, { Component } from 'react'
import './landing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
class landing extends Component {
    render() {
        return (
            <div className='base_div'>
                <header id='header'>
                    <div className='container'>
                        <div className='row head'>
                            <div className='col-3 col-sm-4 col-xl-4'>

                            </div>
                        </div>
                    </div>
                    <Navbar expand="lg" style={{ backgroundColor: '#ff7f5b' }}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='ml-auto'>
                                <Nav.Link href='/login' style={{marginRight:'450px'}} className='d-none d-lg-block' >ورود/عضویت</Nav.Link>
                                <Nav.Link href='/about' style={{ marginRight: '30px' }} className="d-none d-lg-block" >درباره ما</Nav.Link>
                                <Nav.Link style={{ marginRight: '30px' }} className="d-none d-lg-block " >چند رسانه ای</Nav.Link>
                                <Nav.Link style={{ marginRight: '30px' }} className="d-none d-lg-block" >خدمات</Nav.Link>
                                <Nav.Link style={{ marginRight: '30px' }} className="d-none d-lg-block" >مدیریت موسسه</Nav.Link>
                                <Nav.Link href='/' style={{ marginRight: '60px' }} className="d-none d-lg-block" >صفحه اصلی</Nav.Link>
                            </Nav>
                            <Nav className=" d-lg-none " style={{ float: 'right' }}>
                                <Nav.Link href='/' style={{ textAlign: 'right' }} >صفحه اصلی</Nav.Link>
                                <Nav.Link style={{ textAlign: 'right' }} >مدیریت موسسه</Nav.Link>
                                <Nav.Link style={{ textAlign: 'right' }} >خدمات</Nav.Link>
                                <Nav.Link style={{ textAlign: 'right' }} >چند رسانه ای</Nav.Link>
                                <Nav.Link style={{ textAlign: 'right' }} >درباره ما</Nav.Link>
                                <Nav.Link style={{ textAlign: 'right' }} >ورود/عضویت</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                landing
            </div>
        )
    }
}
export default landing