import React from "react";
import { Link } from "react-router-dom";
import { Divider, Button, Input, Form, Select, Checkbox, Modal, TimePicker } from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import './CreateItem.scss';

function CreateItem() {

  return (
    <div className="small-container">
      <div className="CreateItem">
        <Link to="/create-store" className="float-left back">
          <ArrowLeftOutlined />
        </Link>
        <h3>New Shop Item</h3>
        <p>upload and crop image</p>
        <p>select location select category</p>
        <Button type="primary">Next</Button>
      </div>
    </div>
  );
}

export default CreateItem;
