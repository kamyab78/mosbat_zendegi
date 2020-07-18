import React, { Component } from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import jQuery from 'jquery'
import { Navbar, Nav } from 'react-bootstrap';
class login extends Component{
    componentDidMount() {
        $(document).ready(function () {
            $(".signup_txt").click(function () {
$("#login_box").fadeOut()
$("#signup_box").fadeIn()
            })
        })
    }
render(){
    return(
        <div className='login_div'>
        <header id='header'>
            <div className='container'>
                <div className='row head'>
                    <div className='col-3 col-sm-4 col-xl-4'>

                    </div>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#ff7f5b' ,  zIndex:'999' }}>
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
                        <div className="row">
        <div id='login_box' class="login-box">
                    <h1 style={{textAlign:'center' , color:'#393939' , fontSize:'25px'}}>به مثبت زندگی خوش آمدید</h1>
                    <form  style={{textAlign:"center" , marginTop:'50px'}}>
                        <div class="user-box" >
                            <input type="text" name="" required="" />
                            <h1 >نام کاربری</h1>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="" />
                            <h1 style={{textAlign:'right' , float:'right'}} >رمز عبور</h1>
                        </div>
                        <div class="create">
                        <h1 class='signup_txt' style={{ color:'#393939'}}>عضویت</h1>
                        <h1 style={{textAlign:'right' , float:'right' , fontSize:'12px' , color:'#393939'}} >آیا تا کنون در مثبت زندگی ثبت‌نام نکرده‌اید؟ </h1>
                    
                        </div>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        ورود
                        </a>
                    </form>
                </div>
                </div>
                <div className="row">
        <div id='signup_box' class="login-box">
                    <h1 style={{textAlign:'center' , color:'#393939' , fontSize:'25px'}}>به مثبت زندگی خوش آمدید</h1>
                    <form  style={{textAlign:"center" , marginTop:'50px'}}>
                        <div class="user-box" >
                            <input type="text" name="" required="" />
                            <h1 >نام کاربری</h1>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="" />
                            <h1 style={{textAlign:'right' , float:'right'}} >رمز عبور</h1>
                        </div>
                   
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        عضویت
                        </a>
                    </form>
                </div>
                </div>

    </div>
    )
}
}
export default login