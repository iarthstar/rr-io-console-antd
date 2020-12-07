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
          <div>
            <p>{props.label}</p>
            <Ant.Switch checked={value} onChange={(v, e) => { console.log(v, e); onChange(v); }} />
          </div>
        </>
      );
    }; break;

    default: return (
      <>
        <style scoped jsx>{`
          .ant-checkbox-checked .ant-checkbox-inner {
            background-color: red !important;
            border-color: red !important;
          }
          `}</style>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Ant.Checkbox checked={value} onChange={({ target: { checked } }) => { console.log(checked); onChange(checked); }} />
          <p>&nbsp; {props.label}</p>
        </div>
      </>
    );
  }

}

export default Switch;