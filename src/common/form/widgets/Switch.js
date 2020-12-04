import React from 'react';
import * as Ant from 'antd';
const Switch = (props) => {



  const {
    onChange,
    value,
    schema
  } = props;

  const { rr_widget } = schema;

  switch (rr_widget) {
    case "switch": {

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
    }; break;

    default: return (
      <>
        <style scoped jsx>{`
          .ant-switch-checked {
            background-color: red !important;
          }
        `}</style>
        <Ant.Checkbox checked={value} onChange={({ target: { checked } }) => { console.log(checked); onChange(checked); }} />
      </>
    );
  }

}

export default Switch;