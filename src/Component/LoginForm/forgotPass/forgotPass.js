// import React, { useState } from 'react';
// import { Button, Col, Form, Row } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
// import Header from '../../Header/Header';

// const forgotPass = () => {

//     const [loginData, setLoginData] = useState({});
//     const { resetPassword, isLoading, } = useAuth();

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData)
//         // console.log(field, value, newLoginData);
//     }

//     const handleResetPassword = e => {
//         e.preventDefault();
//         resetPassword(loginData.email);
//         return
//     }

//     return (
//         <div>
//             <Header></Header>
//             <h5>CREATE AN ACCOUNT</h5>
//             {!isLoading && <Form onSubmit={handleResetPassword}>
//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="4" >
//                         Email Address
//                     </Form.Label>
//                     <Col sm="8">
//                         <Form.Control
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             onBlur={handleOnBlur}
//                         />
//                     </Col>
//                 </Form.Group>
//                 <Button variant="outline-primary" type='submit'>Register</Button>
//             </Form>}
//         </div>
//     )
// };

// export default forgotPass;
