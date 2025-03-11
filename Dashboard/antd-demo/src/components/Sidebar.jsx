import { Menu } from 'antd'
import React from 'react'
import { DashboardOutlined, UserOutlined, CalendarOutlined, FileTextOutlined, BankOutlined } from '@ant-design/icons';

const Sidebar = ({ setSelectedMenu }) => {    //pass the props
  return (
    <>

      <Menu mode='inline'
        defaultSelectedKeys={['dashboard']} onClick={(e) =>{console.log('clicked key:',e.key)
          setSelectedMenu(e.key)
        }}
        className='menu-bar'
        items={[{
          key: 'dashboard',
          label: 'Dashboard',
          icon: <DashboardOutlined />,
        },
        {
          key: 'Patients',
          label: 'Patient Management',
          icon: <UserOutlined />,
          children: [
            {
              key: '1',
              label: 'Add Patient',
            },
            {
              key: '2',
              label: ' Update Patient Info',
            },
            {
              key: '3',
              label: 'View Patient Details',
            },
          ],
        },
        {
          key: 'Appointments',
          label: 'Appointment Management',
          icon: <CalendarOutlined />,
          children: [
            {
              key: '5',
              label: 'Schedule Appointment',
            },
            {
              key: '6',
              label: 'Reschedule/Cancel ',
            },
           {
            key:'7',
            label:'View calendar'
           }
          ],
        },
        {
          key: 'MedicalRecords',
          label: 'Medical Records',
          icon: <FileTextOutlined />,
          children: [
            {
              key: '8',
              label: 'Create New Record',
            },
            {
              key: '10',
              label: 'Update Records',
            },
            {
              key: '11',
              label: 'View Medical History',
            },
            {
              key: '12',
              label: 'Management Prescriptions',
            },
          ],
        },
        {
          key: 'billingPayments',
          label: 'Billing & Payment',
          icon: <BankOutlined />,
          children:[
            {
              key:'13',
              label:'Generate Invoice',
            },
            {
              key:'14',
              label:'Payment Processing',
            },
            {
              key:'15',
              label:'View Transactions',
            }
          ]
        }

        ]}
      />
    </>
  )
}

export default Sidebar