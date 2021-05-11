import React from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  message
} from 'antd'
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';
import { SignIn } from '../../api/UserApi'

class Login extends React.PureComponent {
  state = {
    loading: false
  }

  hangleSubmit = (values) => {
    const {
      handleLogin,
      location,
      history
    } = this.props

    this.setState({
      loading: true
    })

    SignIn(values).then(response => {
      const { data } = response
      if (data.code === 0) {
        handleLogin(data.data)
        message.success('登录成功', .5, () => {
          const redirect = location.state.Redirect
          history.replace(redirect)
        })
      } else {
        message.error(data.msg, 1, () => {
          this.setState({
            loading: false
          })
        })
      }
    })
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
                  loading={ this.state.loading }
                >
                  登 录
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

export default connect(
  null,
  (dispatch) => {
    return {
      handleLogin (user) {
        dispatch({
          type: 'LOGIN',
          user
        })
      }
    }
  }
)(Login)
