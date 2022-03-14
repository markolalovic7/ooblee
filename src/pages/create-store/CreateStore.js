import React, { useState } from "react";
import {
  Divider,
  Button,
  Input,
  Form,
  Select,
  Modal,
  Checkbox,
  TimePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./CreateStore.scss";
import StoreImagSlider from "./StoreImagSlider";
import UploadImage from "../../components/UploadImage";
import AddLocation from "./AddLocation";
import moment from "moment";
import { Link } from "react-router-dom";
import WorkingHoursForm from "./WorkingHoursForm";

const { Option } = Select;

function CreateStore() {
  // let history = useHistory();


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [storeName, setStoreName] = useState(null);
  const [name, setName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [justNumber, setJustNumber] = useState(null);

  const format = "HH:mm";

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

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  const selectBefore = (
    <Select defaultValue="+382" className="select-before">
      <Option value="+382">+382</Option>
    </Select>
  );

  function handlePhoneNumber(e) {
    setPhone(selectBefore.props.children.props.value + e.target.value);
    setJustNumber(e.target.value)
  }

  const showLocationModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function handleOnNameChange(e) {
    setName(e.target.value);
  }

  function handleNextStep() {
    setStoreName(name);
  }

  const [isWorkingHoursVisible, setIsWorkingHoursVisible] = useState(false);

  function handleWorkingHours() {
    console.log("handleWorkingHours:", handleWorkingHours);
    setIsWorkingHoursVisible(true);
  }



  return (
    <>
      <div className="small-container">
        <div className="create-store">
          {!storeName && (
            <>
              <StoreImagSlider />
              <br />
              <br />
            </>
          )}
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {!storeName && (
              <>
                <Form.Item
                  name="storeName"
                //rules={[{ required: true, message: 'Please input your store name!' }]}
                >
                  <Input
                    placeholder="Enter store name"
                    onChange={handleOnNameChange}
                  />
                </Form.Item>
                <Button type="primary" onClick={handleNextStep}>
                  Next
                </Button>
              </>
            )}

            {storeName && (
              <>
                <p className="text-align-left">
                  Please, enter information about your Shop profile, that will
                  be visible to your Customers:
                </p>
                <br></br>
                <Form.Item hidden name="storeName">
                  <Input value={storeName} />
                </Form.Item>
                <Form.Item name="storeImageUrl">
                  <UploadImage setImageUrl={setImageUrl} />
                </Form.Item>
                <h1>{storeName}</h1>
                <Form.Item name="country">
                  <Select
                    placeholder="Select Country"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={{ textAlign: "left" }}
                  >
                    <Option value="montenegro">Montenegro</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="email"
                // rules={[{ required: true, message: 'Please input your store name!' }]}
                >
                  <Input type="email" placeholder="Your Shop E-mail" onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item name="phoneNumber">
                  <div style={{ marginBottom: 16 }}>
                    <Input
                      addonBefore={selectBefore}
                      type="number"
                      placeholder="Your Shop Phone Number"
                      onChange={handlePhoneNumber}
                    />
                  </div>
                </Form.Item>

                <Form.Item name="address">
                  <Input type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </Form.Item>

                <Form.Item name="zipCode">
                  <Input type="number" placeholder="Zip code" />
                </Form.Item>

                <Form.Item name="location">
                  <div
                    className="add-location flex-center"
                    onClick={showLocationModal}
                  >
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={showLocationModal}
                    />{" "}
                    <span>Add Your Shop Location</span>
                  </div>
                </Form.Item>

                <Form.Item name="confirm" valuePropName="checked">
                  <Checkbox className="text-align-left">
                    I confirm that I have read, understood, and I agree with the
                    ooblee{" "}
                    <Link to="#" className="underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="underline">
                      Terms and Conditions
                    </Link>
                    , and I am over 13 years old.
                  </Checkbox>
                </Form.Item>
                <Divider />
                <Button htmlType="submit" type="primary">
                  Save
                </Button>
              </>
            )}
          </Form>

          <br></br>
          <br></br>
        </div>
      </div>

      <Modal
        title="Add your Shop location"
        className="location-modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        {!isWorkingHoursVisible && (
          <>
            <AddLocation />
            <Button type="primary" onClick={handleWorkingHours}>
              Next
            </Button>
          </>
        )}

        {isWorkingHoursVisible && (
          <WorkingHoursForm
            storeName={storeName}
            address={address}
            justNumber={justNumber}
            email={email}
            setIsWorkingHoursVisible={setIsWorkingHoursVisible}
          />
        )}
      </Modal>
    </>
  );
}

export default CreateStore;
