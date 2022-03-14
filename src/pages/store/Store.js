import React from "react";
import { Layout, Tabs, Select, Divider, Button } from "antd";
import {
  PlusOutlined
} from '@ant-design/icons';
import './Store.scss';
import Shop from "./Shop";
import Locations from "../locations/Locations";
import { useHistory } from "react-router";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

function Store() {
  let history = useHistory();

  function callback(key) {
    console.log(key);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleCreateStore() {
    history.push("/create-store");
  }

  return (
    <Content>
      <div className="site-layout-content store-wrapper">
        <br />
        <Select defaultValue="store1" style={{ minWidth: 150, textAlign: "left" }} onChange={handleChange}>
          <Option value="store1">Store 1</Option>
          <Option value="store2">Store 2</Option>
          <Option className="add-new-store" value="addNewStore"><Button style={{ width: "100%" }} type="primary" icon={<PlusOutlined />} onClick={handleCreateStore}>Add store</Button></Option>
        </Select>
        <Divider />
        <Tabs defaultActiveKey="1" onChange={callback} centered>
          <TabPane tab="Locations" key="1">
            <Locations />
          </TabPane>
          <TabPane tab="Photos" key="2">
            Photos
          </TabPane>
          <TabPane tab="Shop" key="3">
            <Shop />
          </TabPane>
        </Tabs>
      </div>
    </Content>
  );
}

export default Store;