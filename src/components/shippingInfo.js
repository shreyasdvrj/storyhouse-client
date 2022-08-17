import React from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
import {Link} from "react-router-dom";

class shippingInfo extends React.Component {
  render() {
    return (
      <CDBContainer>
        <CDBCard>
          <CDBCardBody className="mx-4">
            <div
              className="text-center text-white"
              style={{ background: "#1F7A8C" }}
            >
              <p className="h5 mt-2 py-4 font-weight-bold"> Add Address </p>
            </div>
            <div className="form-row mb-n4">
              <div className="col">
                <CDBInput
                  material
                  hint="First name"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div className="col">
                <CDBInput
                  material
                  hint="Last name"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
            </div>
            <CDBInput
              material
              hint="Address Line 1"
              placeholder="Address Line 1"
              type="text"
            />
            <CDBInput
              material
              hint="Address Line 1"
              placeholder="Address Line 2"
              type="text"
            />
            <CDBInput material hint="City" placeholder="City" type="text" />

            <Link to="/checkout/payment">
              <CDBBtn color="dark" outline className="btn-block my-3 mx-auto">
                Continue to Payment
              </CDBBtn>
            </Link>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    );
  }
}

export default shippingInfo;
