import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

function GetStarted() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="small-container">
      <Link to="/login" className="float-left back"><ArrowLeftOutlined /></Link>
      <h1>Sign In</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={"vertical"}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Your full name"
          name="yourFullName"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="confirm" valuePropName="checked">
          <Checkbox className="text-align-left">I confirm that I have read, understood, and I agree with the ooblee
            <Link to="#" className="underline">Privacy Policy</Link> and <Link to="#" className="underline">Terms and Conditions</Link>, and I am over 13 years old.</Checkbox>
        </Form.Item>



        <Form.Item >
          <Button type="primary" htmlType="submit">
            Next
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default GetStarted