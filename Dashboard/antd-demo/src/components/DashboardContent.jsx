import React from 'react'
import { Card, Row, Col } from 'antd';
function DashboardContent() {
    return (
        <>
            <Row gutter={[16, 16]} style={{ padding: '20px' }}>
                <Col span={6}>
                    <Card title="Total Patient">
                        <p>1200</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Appointments">
                        <p>50</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Medical Records">
                        <p>500</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Billing & Payments">
                        <p>1lakh</p>
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
