import { Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    // const str = querystring.encode({
    //   code: 'utf-8',
    //   q: value,
    // });
    window.fetch(`https://suggest.taobao.com/sug?q=${value}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

const AsyncSelect = (props) => {

  const [data, setData] = useState([]);
  const [value, setValue] = useState(undefined);


  const handleSearch = value => {
    if (value) {
      fetch(value, data => setData(data));
    } else {
      setData([]);
    }
  };

  const handleChange = value => setValue(value);

  const options = data.map(d => <Option key={d.value}>{d.text}</Option>);
  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};

export default AsyncSelect;