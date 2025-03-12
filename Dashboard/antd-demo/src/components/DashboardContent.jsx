import React from 'react'
import { Card, Row, Col } from 'antd';
function DashboardContent() {
    return (
        <>
            <Row gutter={[16, 16]} style={{ padding: '20px', textAlign:'center' }}>
                <Col span={6}>
                    <Card title="Total Patient" className='Patient-count'>
                        <p>0</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Appointments" className='Patient-count'>
                        <p>0</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Medical Records" className='Patient-count'>
                        <p>0</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Billing & Payments" className='Patient-count'>
                        <p>0</p>
                    </Card>
                </Col>  
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card title="Patient Details">
                        <p>Table will go here</p>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="Appointment Details">
                        <p>Table will go here</p>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="Medical Records">
                        <p>Table will go here</p>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="Billing & Payments">
                        <p>Table will go here</p>
                    </Card>
                </Col>
            </Row>
        </>
    )

}

export default DashboardContent
