
import React from "react";
import { Button } from "antd";
import {
  ShoppingOutlined
} from '@ant-design/icons';
import './Filter.scss';

function Filter() {
  return (
    <div className="flex-center filters">
      <Button type="primary">
        All
      </Button>
      <span className="filter-span flex-center">
        <Button type="default" icon={<ShoppingOutlined />} />
        <span>City shopping</span>
      </span>
    </div>
  )
}

export default Filter;