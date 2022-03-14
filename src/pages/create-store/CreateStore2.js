import React, { useState } from "react";
import { Divider, Button, Input, Form, Select, Checkbox, Modal, TimePicker } from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import "./CreateStore.scss";
import { Link } from "react-router-dom";
import UploadImage from "../../components/UploadImage";
import AddLocation from "./AddLocation";
import moment from 'moment';


function CreateStore2() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  const selectBefore = (
    <Select defaultValue="+382" className="select-before">
      <Option value="+382">+382</Option>
    </Select>
  );

  const showLocationModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(time, timeString) {
    console.log(time, timeString);
  }

  return (
    <>
      <Modal title="Add your Shop location"
        className="location-modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" key="ok" onClick={handleOk}>
            Next
        </Button>,
        ]}>
        <AddLocation />
      </Modal>

      <div className="small-container">
        <div className="create-store">
          <Link to="/create-store" className="float-left back">
            <ArrowLeftOutlined />
          </Link>
          <h3>Profile information</h3>
          <Divider />
          <p>
            Please, enter information about your Shop profile, that will be
            visible to your customer:
          </p>
          <UploadImage />
          <h3>Shop name</h3>
          <Form layout={"vertical"}>
            <Form.Item>
              <Select
                //showSearch
                //style={{ width: 200 }}
                placeholder="Select Country"
                //optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="montenegro">Montenegro</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Input type="email" placeholder="Your Shop E-mail" />
            </Form.Item>
            <Form.Item>
              <div style={{ marginBottom: 16 }}>
                <Input addonBefore={selectBefore} type="number" placeholder="Your Shop Phone Number" />
              </div>
            </Form.Item>
            <Form.Item>
              <Input type="address" placeholder="Address" />
            </Form.Item>
            <Form.Item>
              <Input type="number" placeholder="Zip code" />
            </Form.Item>
            <Form.Item>
              <div className="add-location flex-center" onClick={showLocationModal}>
                <Button type="primary" icon={<PlusOutlined />} onClick={showLocationModal} /> <span>Add Your Shop Location</span>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="default" icon={<PlusOutlined />}>Set Working Hours for Multiple Days</Button>
              <small className="text-align-left block"><b>Working hours:</b></small><br></br>
              <div className="w-hours">
                <Checkbox>Monday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
              <div className="w-hours">
                <Checkbox>Tuesday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
              <div className="w-hours">
                <Checkbox>Wednesday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
              <div className="w-hours">
                <Checkbox>Thursday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
              <div className="w-hours">
                <Checkbox>Friday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
              <div className="w-hours">
                <Checkbox>Saturday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
              <div className="w-hours">
                <Checkbox>Sunday</Checkbox>
                <div className="flex-center">
                  <TimePicker onChange={onChange} placeholder="start" defaultValue={moment('00:00', 'HH:mm')} />
                  <TimePicker onChange={onChange} placeholder="end" defaultValue={moment('00:00', 'HH:mm')} />
                </div>
              </div>
            </Form.Item>
            <Form.Item name="confirm" valuePropName="checked">
              <Checkbox className="text-align-left">I confirm that I have read, understood, and I agree with the ooblee
            <Link to="#" className="underline">Privacy Policy</Link> and <Link to="#" className="underline">Terms and Conditions</Link>, and I am over 13 years old.</Checkbox>
            </Form.Item>
            <Divider />
            <Form.Item>
              <Button type="primary">Finished</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateStore2;
