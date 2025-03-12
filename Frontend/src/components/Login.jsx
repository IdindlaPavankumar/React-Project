import React, { useState } from 'react';
import {
    Layout,
    Form,
    Input,
    Button,
    Tabs,
    Card,
    Typography,
    Divider,
    Row,
    Col,
    Checkbox,
    List,
    Avatar
} from 'antd';
import {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    PhoneOutlined,
    MedicineBoxOutlined,
    HeartOutlined,
    SafetyOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

const HealthcareApp = () => {
    const [activeTab, setActiveTab] = useState('1'); // by default i am taking login tab

    const onFinishLogin = (values) => {
        console.log('Login form submitted:', values); // login finished form will submitted onFinish is a eventhandler
        alert('login successful')
        // Here you would typically call your authentication API
    };

    const onFinishSignup = (values) => {//signup finished data will submitted
        console.log('Signup form submitted:', values);
        alert('signup successful')
        // Here you would typically call your user registration API
    };
    {/* left of the login page content for health tips for looking good for user */ }
    const healthTips = [
        {
            title: 'Regular Check-ups',
            description: 'Schedule annual wellness visits with your healthcare provider',
            icon: <ClockCircleOutlined />
        },
        {
            title: 'Medication Management',
            description: 'Always take prescribed medications as directed by your doctor',
            icon: <MedicineBoxOutlined />
        },
        {
            title: 'Healthy Lifestyle',
            description: 'Maintain a balanced diet and regular physical activity',
            icon: <HeartOutlined />
        },
        {
            title: 'Preventive Care',
            description: 'Stay up-to-date with vaccinations and screenings',
            icon: <SafetyOutlined />
        }
    ];

    // Common card style to ensure same height and appearance
    const cardStyle = {
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        height: '100%',
    };

    return (

        <Layout className="layout">
            <Content style={{ padding: '50px', background: '#f0f2f5' }}>
                <Row gutter={24} style={{ height: '100%' }}>
                    {/* Healthcare Content - Now on the left */}
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            bordered={false}
                            style={cardStyle}
                        >
                            <div style={{ padding: '50px' }}>
                                <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>
                                    Your Health, Our Priority
                                </Title>

                                <Paragraph style={{ fontSize: '16px', textAlign: 'center' }}>
                                    Welcome to the HealthCare Portal, your one-stop destination for managing your healthcare needs.
                                </Paragraph>

                                <Divider />

                                <Title level={4}>Health Tips & Reminders</Title>

                                <List
                                    itemLayout="horizontal"
                                    dataSource={healthTips}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar icon={item.icon} style={{ backgroundColor: '#1890ff' }} />}
                                                title={item.title}
                                                description={item.description}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </Card>
                    </Col>

                    {/* Login/Signup - Now on the right */}
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            style={cardStyle}
                        >
                            {/* Login tab */}
                            <Tabs
                                activeKey={activeTab}
                                onChange={setActiveTab}
                                centered
                                className="md-tabs"
                            >
                                <TabPane
                                    tab={<div style={{ width: '100%', textAlign: 'center' }}>Login</div>}
                                    key="1"
                                >
                                    <Form
                                        name="login_form"
                                        className="login-form"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinishLogin}
                                        size="large"
                                    >
                                        {/* user email id as input*/}
                                        <Form.Item
                                            name="email"
                                            rules={[{ required: true, message: 'Please input your email!' }]}
                                        >
                                            <Input
                                                prefix={<MailOutlined />}
                                                placeholder="Email"
                                            />
                                        </Form.Item>
                                        {/* user password as input*/}
                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password
                                                prefix={<LockOutlined />}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        {/* remember checkbox*/}
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>Remember me</Checkbox>
                                            </Form.Item>
                                            {/*forgot password */}
                                            <a href="#forgot" style={{ float: 'right' }}>
                                                Forgot password
                                            </a>
                                        </Form.Item>
                                        {/* Login button  */}
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                style={{ width: '100%' }}
                                            >
                                                Log in
                                            </Button>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                style={{
                                                    width: '100%',
                                                    padding: '20px', margin: '1px'
                                                }}
                                            >
                                                GuestLogin
                                            </Button>
                                        </Form.Item>
                                        {/* Create an account button*/}
                                        <Divider>
                                            <Text type="secondary">New to HealthCare Portal?</Text>
                                        </Divider>

                                        <Button
                                            type="default"
                                            style={{ width: '100%' }}
                                            onClick={() => setActiveTab('2')}
                                        >
                                            Create an account
                                        </Button>
                                    </Form>
                                </TabPane>
                                {/* sigup tab */}
                                <TabPane
                                    tab={<div style={{ width: '100%', textAlign: 'center' }}>Sign Up</div>}
                                    key="2"
                                >
                                    <Form
                                        name="signup_form"
                                        className="signup-form"
                                        onFinish={onFinishSignup}
                                        size="large"
                                    >
                                        {/* fullnameinput of the signup form*/}
                                        <Form.Item
                                            name="fullname"
                                            rules={[{ required: true, message: 'Please input your full name!' }]}
                                        >
                                            <Input
                                                prefix={<UserOutlined />}
                                                placeholder="Full Name"
                                            />
                                        </Form.Item>
                                        {/* emailinput of the signup form*/}
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                { required: true, message: 'Please input your email!' },
                                                { type: 'email', message: 'Please enter a valid email!' }
                                            ]}
                                        >
                                            <Input
                                                prefix={<MailOutlined />}
                                                placeholder="Email"
                                            />
                                        </Form.Item>
                                        {/* Phone numberinput of the signup form*/}
                                        <Form.Item
                                            name="phone"
                                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                                        >
                                            <Input
                                                prefix={<PhoneOutlined />}
                                                placeholder="Phone Number"
                                            />
                                        </Form.Item>
                                        {/* Passwordinput of the signup form*/}
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                { required: true, message: 'Please input your password!' },
                                                { min: 8, message: 'Password must be at least 8 characters!' }
                                            ]}
                                        >
                                            <Input.Password
                                                prefix={<LockOutlined />}
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        {/* ConfirmPassword input of the signup form*/}

                                        <Form.Item
                                            name="confirm"
                                            dependencies={['password']}
                                            rules={[
                                                { required: true, message: 'Please confirm your password!' },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error('The two passwords do not match!'));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password
                                                prefix={<LockOutlined />}
                                                placeholder="Confirm Password"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="agreement"
                                            valuePropName="checked"
                                            rules={[
                                                {
                                                    validator: (_, value) =>
                                                        value
                                                            ? Promise.resolve()
                                                            : Promise.reject(new Error('Please accept the terms and conditions')),
                                                },
                                            ]}
                                        >
                                            <Checkbox>
                                                I agree to the <a href="#terms">Terms and Conditions</a> and <a href="#privacy">Privacy Policy</a>
                                            </Checkbox>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                style={{ width: '100%' }}
                                            >
                                                Sign Up
                                            </Button>
                                        </Form.Item>

                                        <Divider>
                                            <Text type="secondary">Already have an account?</Text>
                                        </Divider>

                                        <Button
                                            type="default"
                                            style={{ width: '100%' }}
                                            onClick={() => setActiveTab('1')}
                                        >
                                            Log in
                                        </Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default HealthcareApp;