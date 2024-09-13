import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {number, object, string} from 'yup'
import React from "react";

const QuoteModal : React.FC<any> = ({on,off}) => {
    const initialValues = {
        fullName: '',
        email: '',
        phoneNumber: '',
        quoteDetail: ''
    }

    const validationSchema = object({
        fullName: string().required().label('Fullname'),
        email: string().email().required().label('Email'),
        phoneNumber: number().required().label('Phone number'),
        quoteDetail: string().required().label('Your request')
    })
    return (
        <div>
            <Modal className="poppins-regular" show={on} centered>
                <Modal.Header>
                    <div className="w-100 poppins-regular d-flex align-items-center fw-bold justify-content-between">
                    Tell us your request
                    <i className="bi bi-x-circle" role="button" onClick={off}></i>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(val) => (console.log(val))}
                        validationSchema={validationSchema}
                    >{
                            ({ handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="w-100">
                                    <div className="d-flex flex-column m-2">
                                        <label htmlFor="fullName">Name</label>
                                        <Field id='fullName' name='fullName' className='p-2 rounded border border-2 ' style={{ outline: 'none' }} />
                                        <ErrorMessage
                                            name="fullName"
                                            component="div"
                                            className="text-danger fw-medium"/>
                                    </div>

                                    <div className="d-flex flex-column m-2">
                                        <label htmlFor="email">Email</label>
                                        <Field id='email' name='email' className='p-2 rounded border border-2 ' style={{ outline: 'none' }} />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger fw-medium"/>
                                    </div>

                                    <div className="d-flex flex-column m-2 mt-4">
                                        <label htmlFor="quoteDetail">What do you need?</label>
                                        <Field as="textarea" id='quoteDetail' name='quoteDetail' className='p-2 rounded border border-2 ' style={{ outline: 'none' }} />
                                        <ErrorMessage
                                            name="quoteDetail"
                                            component="div"
                                            className="text-danger fw-medium"/>
                                    </div>

                                    </div>

                                    <div className="mt-4 mx-2">
                                        <Button type="submit" className="px-4 text-light">Submit</Button>
                                    </div>


                                </Form>
                            )
                        }

                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default QuoteModal;