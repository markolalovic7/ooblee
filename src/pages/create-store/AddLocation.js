import React from "react";
import { Select } from 'antd';

import './AddLocation.scss';

const { Option } = Select;

function AddLocation() {

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

  return (
    <>
      <Select
        defaultValue="podgorica"
        showSearch
        style={{
          width: '100%', textAlign: 'left',
          //height: '40px' 
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
      <div className="map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750711.1454118689!2d18.83295010078958!3d42.693865128470605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3217242c1fcb%3A0x384c9d866effd346!2sMontenegro!5e0!3m2!1sen!2srs!4v1619515486499!5m2!1sen!2srs" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </>
  );
}

export default AddLocation;
