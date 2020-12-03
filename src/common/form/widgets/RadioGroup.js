import React from 'react';
import { Radio } from 'antd';

const RadioGroup = (props) => {
  const {
    autofocus,
    disabled,
    formContext,
    id,
    onBlur,
    onChange,
    onFocus,
    options,
    readonly,
    schema,
    value,
  } = props;

  const { readonlyAsDisabled = true } = formContext;

  const { enumOptions, enumDisabled } = options;

  const handleChange = ({ target: { value: nextValue } }) =>
    onChange(schema.type === 'boolean' ? nextValue !== 'false' : nextValue);

  const handleBlur = ({ target }) => onBlur(id, target.value);

  const handleFocus = ({ target }) => onFocus(id, target.value);

  return (
    <>
      <style jsx>{`

        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
          color: red !important;
          border-color: red !important;
        }

        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
          background-color: red !important;
        }

        .ant-radio-button-wrapper:hover {
          color: red !important;
        }
        
      `}</style>
      <Radio.Group
        disabled={disabled || (readonlyAsDisabled && readonly)}
        id={id}
        name={id}
        onBlur={!readonly ? handleBlur : undefined}
        onChange={!readonly ? handleChange : undefined}
        onFocus={!readonly ? handleFocus : undefined}
        value={`${value}`}
      >
        {enumOptions.map(({ value: optionValue, label: optionLabel }, i) => (
          <Radio.Button
            autoFocus={i === 0 ? autofocus : false}
            disabled={enumDisabled && enumDisabled.indexOf(value) !== -1}
            key={`${optionValue}`}
            value={`${optionValue}`}
          >
            {optionLabel}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};

export default RadioGroup;