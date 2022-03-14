import React, { useState } from "react";
import {
  Button,
  Form,
  Checkbox,
  TimePicker,
  Divider,
  Select,
  Input,
} from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;

function WorkingHoursForm(props) {
  const [phone, setPhone] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const format = "HH:mm";

  function handleBack() {
    props.setIsWorkingHoursVisible(false);
  }

  const onFinish = (values) => {
    const newValues = {
      ...values,
      storeImageUrl: imageUrl,
      phoneNumber: phone,
    };
    console.log("Success:", newValues);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(value) {
    console.log(`selected: ${moment(value).utc().format(format)}`);
  }

  const selectBefore = (
    <Select defaultValue="+382" className="select-before">
      <Option value="+382">+382</Option>
    </Select>
  );

  function handlePhoneNumber(e) {
    setPhone(selectBefore.props.children.props.value + e.target.value);
  }

  console.log("selectBefore.props.children.props.value + props.justNumber", selectBefore.props.children.props.value + props.justNumber)

  return (
    <>
      <Button
        type="link"
        onClick={handleBack}
        icon={<ArrowLeftOutlined className="float-left" />}
      />
      <br></br><br></br>
      <Form
        name="basic"
        initialValues={{
          storeName: props.storeName,
          address: props.address,
          email: props.email,
          phoneNumber: selectBefore.props.children.props.value + props.justNumber
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="storeName">
          <Input defaultValue={props.storeName} />
        </Form.Item>

        <Form.Item name="address">
          <Input type="address" placeholder="Address" defaultValue={props.address} />
        </Form.Item>

        <Form.Item
          name="email"
        // rules={[{ required: true, message: 'Please input your store name!' }]}
        >
          <Input type="email" placeholder="Your Shop E-mail" defaultValue={props.email} />
        </Form.Item>

        <Form.Item name="phoneNumber">
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore={selectBefore}
              //type="number"
              placeholder="Your Shop Phone Number"
              onChange={handlePhoneNumber}
              defaultValue={selectBefore.props.children.props.value + props.justNumber}
            />
          </div>
        </Form.Item>

        <Button type="default" icon={<PlusOutlined />}>
          Set Working Hours for Multiple Days
          </Button>

        <Form.Item name="workingHours">
          <br></br>
          <small className="text-align-left block">
            <b>Working hours:</b>
          </small>


          <div className="w-hours">
            <Checkbox>Monday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>

          <div className="w-hours">
            <Checkbox>Tuesday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>

          <div className="w-hours">
            <Checkbox>Wednesday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>

          <div className="w-hours">
            <Checkbox>Thursday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>

          <div className="w-hours">
            <Checkbox>Friday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>

          <div className="w-hours">
            <Checkbox>Saturday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>

          <div className="w-hours">
            <Checkbox>Sunday</Checkbox>
            <div className="flex-center">
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
              <TimePicker
                onChange={onChange}
                defaultValue={moment("00:00", format)}
                format={format}
              />
            </div>
          </div>
        </Form.Item>
        <Divider />
        <Button htmlType="submit" type="primary">
          Finished
        </Button>
      </Form>
    </>
  );
}

export default WorkingHoursForm;
