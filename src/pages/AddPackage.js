import React, { useState } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import classNames from 'classnames';

import { schema } from "../forms/device_executable.schema";

const Form = withTheme(AntDTheme);

const uiSchema = {
  executable_type: {
    "ui:widget": "radio"
  }
};

const CustomRadio = function (props) {
  return (
    <>
      <style jsx>{`
        button:first-child {
          margin-left: 0rem;
        }

        button {
          margin-left: 0.25rem;
        }

        button:focus {
          outline-width: 0px;
        }

        .manifestMultioptionButton {
          font-weight: normal;
          cursor: pointer;
          border-radius: 4px;
          padding: 5px 16px;
          vertical-align: middle;
          background-color: #fafafa;
          border: 1px solid #000000D9;
          margin-right: 10px;
          height: 32px;
        }

        .selected {
          color: red;
          border: 1px solid red;
        }
      `}</style>
      <div>
        {props.options.enumOptions.map(e => (
          <button 
            type="button" 
            className={classNames({
              manifestMultioptionButton: true,
              selected: props.value === e.value
            })} 
            onClick={() => props.onChange(e.value)}
          >
            {e.label}
          </button>
        ))}
      </div>
    </>
  );
};

const widgets = {
  RadioWidget: CustomRadio
};

const AddPackage = () => {

  const [formData, setFormData] = useState({});

  return (
    <>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onSubmit={setFormData}
      />
    </>
  );
}

export default AddPackage;