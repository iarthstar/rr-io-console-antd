import React, { useState } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Row, Col, Card } from 'antd';

import * as initForm from "../forms/device_executable.schema";

import Editor from '../common/editor';
import Radio from '../common/form/widgets/Radio';
import RadioGroup from '../common/form/widgets/RadioGroup';

const Form = withTheme(AntDTheme);

const WIDGETS = {
  "Radio": Radio,
  "RadioGroup": RadioGroup
};


const AddPackage = () => {

  const [formData, setFormData] = useState({});
  const [form, setForm] = useState(initForm);

  const replacer = (k, v) => {
    if(v.startsWith("WIDGET_", 0)) {
      return WIDGETS[v.slice(7)] || Radio;
    } else {
      return v;
    }
  };

  const setFormValues = (key) => (value) => {
    const temp = { ...form };
    try {
      if (key !== 'widgets'){
        temp[key] = JSON.parse(value);
        setForm(temp);
      } else {
        temp[key] = JSON.parse(value, replacer, 2);
        setForm(temp);
      }
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
                onSubmit={(e) => {console.log(e)}}
              />
            </Card>
          </Col>
          <Col span={12}>
          <Card title="Form Schema" bordered={false} style={{ width: "100%" }}>
              <Editor
                code={JSON.stringify(form.widgets, (k, v) => { return typeof v === 'function' ? "WIDGET_"+v.name : v; }, 2)}
                setCode={setFormValues('widgets')}
              />
            </Card>
            <br/>
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
    </>
  );
}

export default AddPackage;