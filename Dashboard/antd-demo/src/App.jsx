import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import AdminHeader from './components/Header';
import DashboardContent from './components/DashboardContent';
import Patients from "./components/Patients";
import Appointments from './components/Appointment';
import MedicalRecords from './components/MedicalRecords';
import BillingPayments from './components/Billing&Payments';
import UpdatePatient from './components/UpdatePatient';
const { Sider, Header, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                {/* Header Section */}
                <Header className='Header'>
                    <AdminHeader />
                </Header>

                <Layout>
                    {/* Sidebar Section */}
                    <Sider
                        theme='light'
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                        className='sider'
                        style={{ overflowY: "auto" }}
                        onMouseEnter={() => setCollapsed(false)}
                        onMouseLeave={() => setCollapsed(true)}
                    >
                        <Sidebar />
                    </Sider>

                    {/* Main Content Section */}
                    <Layout style={{ marginLeft: collapsed ? '80px' : '250px', transition: 'margin-left 0.3s' }}>
                        <Content className='Content'>
                            <Routes>
                                <Route path="/" element={<DashboardContent />} />
                                <Route path="/dashboard" element={<DashboardContent />} />
                                <Route path="/patients/add" element={<Patients />} />
                                <Route path="/patients/update" element={<UpdatePatient />} />
                                <Route path="/patients/" element={<Patients />} />
                                <Route path="/appointments" element={<Appointments />} />
                                <Route path="/medicalRecords" element={<MedicalRecords />} />
                                <Route path="/billing" element={<BillingPayments />} />
                                {/* Add a 404 Page Not Found Route */}
                                <Route path="*" element={<h2>Page Not Found</h2>} />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
