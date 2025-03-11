import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import './App.css';
import AdminHeader from './components/Header';
import DashboardContent from './components/DashboardContent';
import Patients from './components/Patients';
import Appointments from './components/Appointment';
import MedicalRecords from './components/MedicalRecords';
import BillingPayments from './components/Billing&Payments';
const { Sider, Header, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('dashboard');//here i am taking by default dashboard
    // Function to render components dynamically
    const renderContent = () => {
        // console.log('selected Menu:',selectedMenu);
        switch (selectedMenu) {
            case 'dashboard':
                return <DashboardContent />;
            case 'patients':
                return <Patients />;
            case 'appointments':
                return <Appointments />;
            case 'medicalRecords':
                return <MedicalRecords />;
            case 'billing':
                return <BillingPayments />;
            default:
            // return <DashboardContent />;
        }
    };
    return (
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
                    <Sidebar setSelectedMenu={setSelectedMenu} /> {/*here passing the state */}
                </Sider>

                {/* Main Content Section */}
                <Layout style={{ marginLeft: collapsed ? '80px' : '250px', transition: 'margin-left 0.3s' }}>
                    <Content className='Content' key={selectedMenu}>
                        <h2>Current Page:{selectedMenu}</h2>
                        {renderContent()}  {/* selected content is render */}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default App;
