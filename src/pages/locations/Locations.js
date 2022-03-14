import React from "react";
import { Button, Divider, Select } from "antd";
import {
  PlusOutlined,
  PushpinOutlined,
  PhoneOutlined,
  RightOutlined
} from '@ant-design/icons';
import './Locations.scss';

const { Option } = Select;

function Locations() {

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

  function onSearchInput(value) {
    console.log(value)
  };

  return (
    <div className="locations">
      <div className="add-new-shop-item flex-center">
        <div className="add-item">
          <Button type="primary" icon={<PlusOutlined />}></Button>
          <span>Add <br /> shop location</span>
        </div>
        <h2>Add your Shop Locations, Contact Information and Working Hours</h2>
      </div>
      <Button type={"primary"}>Add Local Delivery Locations</Button>
      <Divider />
      <Select
        defaultValue="podgorica"
        showSearch
        style={{
          width: '100%', textAlign: 'left',
        }}
        placeholder="Select a City"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="podgorica">Podgorica</Option>
        <Option value="niksic">Niksic</Option>
        <Option value="kotor">Kotor</Option>
      </Select>
      <div className="location-map-wrap relative">
        <Button type="primary absolute">Open<br />Map</Button>
        <div className="open-map">
        </div>
      </div>
      <div className="shop-information">
        <div className="location-information">
          <h2>Shop Information</h2>
          <div>
            <Button type="link" className="right-arrow-btn"><span>All local delivery locations</span><RightOutlined /></Button>
            <Button type="link" className="right-arrow-btn"><span>Free delivery locations</span><RightOutlined /></Button>
          </div>
        </div>
        <div className="address">
          <div className="info">
            <p><b>Address: </b>-</p>
            <p><b>Phone: </b>-</p>
            <p><b>Working Hours: </b>-</p>
            <p><b>Mon - Fri: </b>-</p>
            <p><b>Sat - Sun: </b>-</p>
          </div>
          <div className="pin-call">
            <Button icon={<PushpinOutlined />} />
            <Button icon={<PhoneOutlined />} />
          </div>
        </div>
        <Divider />
        <Button type="link" className="right-arrow-btn"><span>Available Order Options</span><RightOutlined /></Button>
        <br></br>
      </div>
    </div>
  );
}

export default Locations;
