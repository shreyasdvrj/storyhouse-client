import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBBtn } from "mdb-react-ui-kit";
import { CDBInput } from 'cdbreact';
import "mdbreact/dist/css/mdb.css";

const FooterPage = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
    >
      <div style={{ backgroundColor: "#7EBDC2" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
            <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a className="tw-ic" href="https://github.com/shreyasdvrj/internship-ecommerce">
                <i className="fab fa-github white-text mr-lg-4"> </i>
              </a>&nbsp;&nbsp;&nbsp;
            
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>&nbsp;&nbsp;&nbsp;
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="font-weight-bold">
              <strong>StoryHouse</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <b>Sign up for our newsletter</b>
            </p>
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="d-grid gap-2 d-md-block">
                  <CDBInput placeholder="Email" type="email" icon={<i className="fab fa-email text-dark"></i>} />
                  <MDBBtn color="green" size="sm">Register</MDBBtn>
                </div>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Shop</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a style={{textDecoration: 'None'}} href="/best">Bestsellers</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/new">New Releases</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/exploreFiction">Fiction</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/exploreNonFiction">Non Fiction</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/gift">Gift Cards</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a style={{textDecoration: 'None'}} href="/profile/account">Your Account</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/profile/orders">Order Status</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/returns">Returns and Refunds</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/contact">Contact Us</a>
            </p>
          </MDBCol>
          <MDBCol md="5" lg="4" xl="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>About</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a style={{textDecoration: 'None'}} href="/about">About Us</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="/responsibilities">Responsibilities</a>
            </p>
            <p>
              <a style={{textDecoration: 'None'}} href="exploreFiction">Explore</a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a href="/#"> StoryHouse </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
