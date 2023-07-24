import React, { useState } from 'react'
import './contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""
  });
  console.log(inputValue);

  const getValue = (e) => {
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value
      }
    })
  }

  const sentUserData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, message } = inputValue;
    if (fname =='') {
      toast.error("First name is required");
    } else if (lname =='') {
      toast.error("Last name is required");
    } else if (email == '') {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email address");
    } else if (phone == '') {
      toast.error("Phone number is required");
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fname, lname, email, phone, message
        })
      });
      const data = await res.json();
      if (data.status == 201) {
        toast.success("Your Response Submitted")
        setInputValue({
          ...inputValue,
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: ""
        })
      }
    }
  }

  return (
    <div>
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className='text-center mt-2'>Contact Me</h2>
        <hr />
        <div className="form mt-4">
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name='fname' value={inputValue.fname} onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" name='lname' value={inputValue.lname} onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={inputValue.email} onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" name='phone' value={inputValue.phone} onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" row={4} placeholder="Write something....." name='message'value={inputValue.message} onChange={getValue} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" type="submit" className='col-lg-6' onClick={sentUserData}>
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Contact
