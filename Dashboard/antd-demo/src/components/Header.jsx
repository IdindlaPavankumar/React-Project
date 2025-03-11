import React from "react";
import { Avatar, Flex, Typography, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../src/assets/img/logo.png";

const { Search } = Input;

const AdminHeader = () => {
    return (
        <Flex align="center" justify="space-between" className="admin-header">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="MediSync Logo" className="logo" />
            </div>

            {/* Title */}
            <Typography.Title level={4} className="Typography-Title">
                Welcome to Our MediSync
            </Typography.Title>

            {/* Search & User Avatar */}
            <Flex align="center" gap="1.5rem">
                <Search 
                    placeholder="Search Dashboard" 
                    allowClear 
                    className="header-search" 
                />
                <Avatar icon={<UserOutlined />} className="header-avatar" />
            </Flex>
        </Flex>
    );
};

export default AdminHeader;
