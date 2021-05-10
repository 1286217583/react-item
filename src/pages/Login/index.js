import React from 'react'
import {
  Row,
  Col,
  Form,
  Input,
  Button
} from 'antd'

import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';


class Login extends React.PureComponent {
  hangleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className='page-login'>
        <Row 
          className='page-login__row'
          type='flex' 
          align='middle'
        >
          <Col
            span={8}
            offset={8}
          >
            <Form
              className='page-login__from'
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
  
              {/* formButton start */}
              <Form.Item>
                <Button 
                  type="primary"
                  htmlType="submit" className="page-login__form-button"
                >
                  Log in
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

export default Login
