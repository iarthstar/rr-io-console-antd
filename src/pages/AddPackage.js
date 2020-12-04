import React, { useState } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Row, Col, Card, Button } from 'antd';

import * as initForm from "../forms/device_executable.schema";

import Editor from '../common/Editor';

import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import Layout from '../common/Layout';

import { downloadFile } from '../utils';
import WIDGETS from '../common/form/widgets';
import UploadFile from '../common/utils/UploadFile';
import { FORM_SCHEMAS_UPLOAD_NODE_ID } from '../constants/Misc';

const Form = withTheme(AntDTheme);


const AddPackage = () => {

  const [formData, setFormData] = useState({});
  const [form, setForm] = useState(initForm);

  const replacer = (k, v) => {
    if (typeof v === "string" && v.startsWith("WIDGET_", 0)) {
      return WIDGETS[v.slice(7)] || WIDGETS["Radio"];
    } else {
      return v;
    }
  };

  const setFormValues = (key) => (value) => {
    const temp = { ...form };
    try {
      if (key !== 'widgets') {
        temp[key] = JSON.parse(value);
        setForm(temp);
      } else {
        temp[key] = JSON.parse(value, replacer, 2);
        setForm(temp);
      }
    } catch (err) {

    }
  };

  const onClickDownload = () => {
    let temp = JSON.stringify({
      schema: form.schema,
      uiSchema: form.uiSchema,
      widgets: form.widgets,
    }, (k, v) => { return typeof v === 'function' ? "WIDGET_" + v.name : v; }, 2);
    temp = JSON.parse(temp);
    downloadFile(temp, `FORM_${new Date().getTime()}`);
  };

  const onClickUpload = () => {
    window[FORM_SCHEMAS_UPLOAD_NODE_ID].click();
  };

  const uploadedFile = (e) => {
    setForm(JSON.parse(e, replacer, 2));
  };

  const topbar = (
    <div class="nav-btns">
      <Button icon={<UploadOutlined />} onClick={onClickUpload}>Click to Upload Form Schemas</Button>
      <UploadFile callback={uploadedFile} />
      &nbsp;&nbsp;&nbsp;
      <Button icon={<DownloadOutlined />} onClick={onClickDownload}>Click to Download Form Schemas</Button>
      &nbsp;&nbsp;&nbsp;
    </div>
  );


  return (
    <Layout topbar={topbar}>

      <div style={{ padding: "1rem" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title="Form" bordered={false} style={{ width: "100%" }}>
              <Form
                schema={form.schema}
                uiSchema={form.uiSchema}
                widgets={form.widgets}
                onSubmit={(e) => { console.log(e) }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Form Schema" bordered={false} style={{ width: "100%" }}>
              <Editor
                code={JSON.stringify(form.widgets, (k, v) => { return typeof v === 'function' ? "WIDGET_" + v.name : v; }, 2)}
                setCode={setFormValues('widgets')}
              />
            </Card>
            <br />
            <Card title="Form Schema" bordered={false} style={{ width: "100%" }}>
              <Editor
                code={JSON.stringify(form.schema, null, 2)}
                setCode={setFormValues('schema')}
              />
            </Card>
            <br />
            <Card title="Form Schema" bordered={false} style={{ width: "100%" }}>
              <Editor
                code={JSON.stringify(form.uiSchema, null, 2)}
                setCode={setFormValues('uiSchema')}
              />
            </Card>
            <br />

          </Col>
        </Row>
      </div>
    </Layout>

  );
}

export default AddPackage;