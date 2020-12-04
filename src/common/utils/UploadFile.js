import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {FORM_SCHEMAS_UPLOAD_NODE_ID } from "../../constants/Misc";

const UploadFile = (props) => {
  const {
    callback
  } = props;

  const handleFileChange = ({ target: { files } }) => {
    // showLoading();
    if (!isEmpty(files)) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = (event) => {
        if (event.target.readyState == FileReader.DONE) { // DONE == 2
          callback(event.target.result);
          // hideLoading();
        }
      };

      const blob = file.slice(0, file.size);
      reader.readAsBinaryString(blob);
    } else {
      // hideLoading();
    }
  }

  return (
    <input
      type="file"
      id={FORM_SCHEMAS_UPLOAD_NODE_ID}
      style={{ display: "none" }}
      multiple={false}
      onChange={handleFileChange}
    />
  );
};

export default UploadFile;