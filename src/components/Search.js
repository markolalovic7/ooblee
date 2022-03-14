import React from "react";
import { Select, Input } from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';

function Search() {

  const { Option } = Select;
  const { Search } = Input;

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
    <div>
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
      <Input
        placeholder="Search"
        allowClear
        //enterButton="Search"
        size="large"
        onSearch={onSearchInput}
        prefix={<SearchOutlined />}
      />
    </div>
  )
}

export default Search;