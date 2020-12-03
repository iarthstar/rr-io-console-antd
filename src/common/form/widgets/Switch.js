import React from 'react';
import * as Ant from 'antd';
const Switch = (props) => {

  const {
    onChange,
    value
  } = props;
  return (
    <>
      <style scoped jsx>{`
      .ant-switch-checked {
        background-color: red !important;
      }
      `}</style>
      <Ant.Switch checked={value} onChange={(v, e) => { console.log(v, e); onChange(v); }} />
    </>
  );
}

export default Switch;