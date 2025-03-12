import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DashboardOutlined, 
  UserOutlined, 
  CalendarOutlined, 
  FileTextOutlined, 
  BankOutlined 
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <Menu mode='inline' className='menu-bar' defaultSelectedKeys={['dashboard']}>
      {/* Dashboard */}
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      {/* Patients Management */}
      <Menu.SubMenu key="patients" icon={<UserOutlined />} title="Patient Management">
        <Menu.Item key="add-patient">
          <Link to="/patients/add">Add Patient</Link>
        </Menu.Item>
        <Menu.Item key="update-patient">
          <Link to="/patients/update">Update Patient Info</Link>
        </Menu.Item>
        <Menu.Item key="view-patient">
          <Link to="/patients/view">View Patient Details</Link>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Appointment Management */}
      <Menu.SubMenu key="appointments" icon={<CalendarOutlined />} title="Appointment Management">
        <Menu.Item key="schedule-appointment">
          <Link to="/appointments/schedule">Schedule Appointment</Link>
        </Menu.Item>
        <Menu.Item key="reschedule-appointment">
          <Link to="/appointments/reschedule">Reschedule/Cancel</Link>
        </Menu.Item>
        <Menu.Item key="view-calendar">
          <Link to="/appointments/calendar">View Calendar</Link>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Medical Records */}
      <Menu.SubMenu key="medicalRecords" icon={<FileTextOutlined />} title="Medical Records">
        <Menu.Item key="create-record">
          <Link to="/medical-records/create">Create New Record</Link>
        </Menu.Item>
        <Menu.Item key="update-record">
          <Link to="/medical-records/update">Update Records</Link>
        </Menu.Item>
        <Menu.Item key="view-history">
          <Link to="/medical-records/history">View Medical History</Link>
        </Menu.Item>
        <Menu.Item key="manage-prescriptions">
          <Link to="/medical-records/prescriptions">Manage Prescriptions</Link>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Billing & Payments */}
      <Menu.SubMenu key="billingPayments" icon={<BankOutlined />} title="Billing & Payment">
        <Menu.Item key="generate-invoice">
          <Link to="/billing/invoice">Generate Invoice</Link>
        </Menu.Item>
        <Menu.Item key="payment-processing">
          <Link to="/billing/payment">Payment Processing</Link>
        </Menu.Item>
        <Menu.Item key="view-transactions">
          <Link to="/billing/transactions">View Transactions</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Sidebar;
