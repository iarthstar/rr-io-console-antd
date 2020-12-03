import React from 'react';
import classNames from 'classnames';

const Radio = (props) => {
  return (
    <>
      <style jsx>{`
        button.radio_btn:focus {
          outline-width: 0px;
        }

        button.radio_btn {
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

        button.selected {
          color: red;
          border: 1px solid red;
        }
        
      `}</style>
      <div>
        {props.options.enumOptions.map(e => (
          <button
            type="button"
            className={classNames({
              radio_btn: true,
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

export default Radio;