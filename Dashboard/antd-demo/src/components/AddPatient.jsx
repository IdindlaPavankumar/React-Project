import React, { useState } from "react";
import { Form, Input, InputNumber, DatePicker, Button, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddPatientForm = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]); // Maintain fileList for uploaded images

    // Update fileList when a new image is uploaded
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    // function is submited the patient form data
    const handleFinish = (values) => {
        console.log("Form Submitted:", { ...values, fileList });
    };

    // Upload button component
    const uploadButton = (
        <button
            className="Upload-image"
            style={{ border: 0, background: "none" }}
            type="button"
        >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            style={{ maxWidth: 500, margin: "0 auto", padding: 20, background: "#fef5e7", borderRadius: 8 }}
        >
            {/* Image Upload */}
            <Form.Item>
                <div className="upload-container">
                    <Upload listType="picture-circle" fileList={fileList} onChange={handleChange}>
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                </div>
            </Form.Item>
            {/* Name */}
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter the name" }]}>
                <Input placeholder="Enter Name" />
            </Form.Item>

            {/* Age */}
            <Form.Item label="Age" name="age" rules={[{ required: true, message: "Please enter the age" }]}>
                <InputNumber placeholder="Enter Age" style={{ width: "100%" }} />
            </Form.Item>

            {/* Email */}
            <Form.Item label="Email" name="email" rules={[{ type: "email", message: "Enter a valid email" }]}>
                <Input placeholder="Enter Email" />
            </Form.Item>

            {/* Phone */}
            <Form.Item label="Phone" name="phone" rules={[{ required: true, message: "Please enter the phone number" }]}>
                <Input placeholder="Enter Phone" />
            </Form.Item>

            {/* Address */}
            <Form.Item label="Address" name="address">
                <Input placeholder="Enter Address" />
            </Form.Item>

            {/* Admission Date */}
            <Form.Item label="Appointment Date" name="Appointment Date" rules={[{ required: true, message: "Please select the date" }]}>
                <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            {/* Description */}
            <Form.Item label="Description" name="description">
                <Input.TextArea placeholder="Additional Notes" rows={4} />
            </Form.Item>
            {/* Add Patient Button */}
            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Add Patient
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddPatientForm;
