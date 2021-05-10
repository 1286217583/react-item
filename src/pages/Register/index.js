import React from 'react'
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Radio
} from 'antd'

import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';

class Register extends React.PureComponent {
  hangleSubmit(values) {
    console.log(values);
  }

  state = {
    gebder: 1
  }

  render() {
    return (
      <div className='page-register'>
        <Row 
          className='page-register__row'
          type='flex' 
          align='middle'
        >
          <Col
            span={8}
            offset={8}
          >
            <Form
              className='page-register__from'
              onFinish={this.hangleSubmit}
            >
              {/* userName start */}
              <Form.Item
                name='username'
                // initialValue='123'
                rules={[
                  {
                    required:true,
                    type: 'email',
                    message: '请输入正确的邮箱'
                  }
                ]}
              >
                <Input 
                  prefix={
                    <UserOutlined                         className="site-form-item-icon"
                  />} 
                  placeholder="Username" 
                />
  
              </Form.Item>
              {/* userName end */}
                    
              {/* password start */}
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    max: 12,
                    min: 6,
                    message: '请输入6到12位的密码'
                  }
                ]}
              >
              <Input
                prefix={
                  <LockOutlined                 className="site-form-item-icon"
                />}
                type="password"
                placeholder="Password"
              />
              </Form.Item>
              {/* password end */}
                
              {/* gender start */}
              <Form.Item
                name='gender'
                rules={[
                  {
                    
                    required: true,
                    message: '请选择你的性别'
                  }
                ]}
                messageVariables={1}
              >
                <Radio.Group
                  onChange={(e) => {
                    this.setState({
                      gebder: e.target.value
                    })
                  }}
                  defaultValue={1}
                >
                  <Radio
                    value= {1}
                  >男</Radio>
                  
                  <Radio
                    value={0}
                  >女</Radio>
                </Radio.Group>
              </Form.Item>
              {/* gender end */}
  
              {/* formButton start */}
              <Form.Item>
                <Button 
                  type="primary"
                  htmlType="submit" className="page-register__button"
                >
                  注册
                </Button>
              </Form.Item>
              {/* formButton end */}
            </Form>
  
          </Col>
        </Row>
      </div>
    )
  }
}

export default Register
