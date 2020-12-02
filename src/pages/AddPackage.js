import React, { useState } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Row, Col, Card } from 'antd';

import * as initForm from "../forms/device_executable.schema";
import Editor from '../common/editor';

const Form = withTheme(AntDTheme);


const AddPackage = () => {

  const [formData, setFormData] = useState({});
  const [form, setForm] = useState(initForm);

  const setFormValues = (key) => (value) => {
    const temp = { ...form };
    try {
      temp[key] = JSON.parse(value);
      setForm(temp);
    } catch (err) {

    }
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title="Form" bordered={false} style={{ width: "100%" }}>
              <Form
                schema={form.schema}
                uiSchema={form.uiSchema}
                widgets={form.widgets}
                onSubmit={setFormData}
              />
            </Card>
          </Col>
          <Col span={12}>
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddPackage;