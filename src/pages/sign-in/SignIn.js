import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

function SignIn() {

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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox><br /><br />
          <Link to="#" className="underline">Forgot your password?</Link>


        </Form.Item>



        <Form.Item >
          <Button type="primary" htmlType="submit">
            Sign In
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignIn