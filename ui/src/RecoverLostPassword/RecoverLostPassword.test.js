import React from 'react';
import { shallow } from 'enzyme';
import RecoverLostPassword from './RecoverLostPassword';

describe('structure', () => {
  it('should contain login input', () => {
    const wrapper = shallow(<RecoverLostPassword />);
    expect(wrapper.find('input[name="login"]').length).toBe(1);
  });

  it('should contain reset password button', () => {
    const wrapper = shallow(<RecoverLostPassword />);
    expect(wrapper.find('input[type="submit"]').length).toBe(1);
  });
});

describe('behaviour', () => {
  it('reset password button should initially be disabled', () => {
    const wrapper = shallow(<RecoverLostPassword />);
    const resetPasswordButtom = wrapper.find('input[type="submit"]');
    expect(resetPasswordButtom.props().disabled).toBe(true);
  });

  it('an error should appear under empty login input on blur', () => {
    const wrapper = shallow(<RecoverLostPassword />);
    const loginInput = wrapper.find('input[name="login"]');
    loginInput.simulate('blur');
    expect(wrapper.contains(<p className="validation-message" key={0}>login or email address is required!</p>)).toBe(true);
  });

  it('should enable reset password button when login input is valid', () => {
    const wrapper = shallow(<RecoverLostPassword />);
    const initialState = wrapper.state();
    wrapper.setState({ ...initialState, values: { login: 'mickey' } });
    const resetPasswordButtom = wrapper.find('input[type="submit"]');
    expect(resetPasswordButtom.props().disabled).toBe(false);
  });
});