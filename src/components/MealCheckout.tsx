import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveCheckoutDetailsAction } from "../store/action";

const MealCheckout = () => {
    const [form] = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    window.onload = () =>  navigate("/");

    const saveCheckoutDetails = (value: any, key: any) => {
        dispatch(saveCheckoutDetailsAction(value,key))
    }
    
    return (
        <div>
            <div className="checkout-header">Fill the order form below to complete the purchase</div>
            <div className="checkout-form">
                <Form form={form} onFinish={() => navigate('/order-details')}>
                    <div className="form-header">
                        <div>
                            <div className="centering form-count">1</div>
                        </div>
                        <div className="form-header-label">Your basic information</div>
                    </div>
                    <Row style={{marginTop: "20px"}} gutter={15}>
                        <Col span={6}>
                            <div className="form-heading-label required">First Name</div>
                            <Form.Item
                                name="firstName"
                                rules={[{ required: true, message: "First Name is required", whitespace: true }]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "firstName")} placeholder="Enter first name"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label">Last Name</div>
                            <Form.Item
                                name="lastName"
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "lastName")} placeholder="Enter last name"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label required">Mobile number</div>
                            <Form.Item
                                name="mobileNumber"
                                rules={[
                                    { required: true, message: "Mobile no is required", whitespace: true },
                                    { min: 10, max: 10, message: "Enter valid mobile number" }
                                ]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "mobileNo")} type="number" placeholder="Enter mobile no"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label required">Email</div>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Email is required", whitespace: true },
                                    { type: "email", message: "Enter valid email" },
                                ]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "email")} placeholder="Enter email"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="form-header">
                        <div>
                            <div className="centering form-count">2</div>
                        </div>
                        <div className="form-header-label">Shipping address</div>
                    </div>
                    <Row style={{marginTop: "20px"}} gutter={15}>
                        <Col span={24}>
                            <div className="form-heading-label required">Residential address</div>
                            <Form.Item
                                name="address"
                                rules={[{ required: true, message: "Residential address is required", whitespace: true }]}
                            >
                                <TextArea onChange={(e: any) => saveCheckoutDetails(e.target.value, "address")} placeholder="Enter residential address" rows={4}/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label required">State</div>
                            <Form.Item
                                name="state"
                                rules={[{ required: true, message: "State is required", whitespace: true }]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "state")} placeholder="Enter state"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label required">City</div>
                            <Form.Item
                                name="city"
                                rules={[{ required: true, message: "City is required", whitespace: true }]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "city")} placeholder="Enter city"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label required">Country</div>
                            <Form.Item
                                name="country"
                                rules={[{ required: true, message: "Country is required", whitespace: true }]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "country")} placeholder="Enter country"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <div className="form-heading-label required">Pincode</div>
                            <Form.Item
                                name="pincode"
                                rules={[{ required: true, message: "Pincode is required", whitespace: true }]}
                            >
                                <Input onChange={(e: any) => saveCheckoutDetails(e.target.value, "pincode")} placeholder="Enter pincode"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="flex-centering">
                        <button className="check-out-btn">Purchase</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default MealCheckout;