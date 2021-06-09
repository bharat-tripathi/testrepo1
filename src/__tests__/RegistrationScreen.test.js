import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import RegistrationScreen from '../components/RegistrationScreen';

configure({adapter: new ReactSixteenAdapter()})

let wrapper;
beforeEach(() => {
    wrapper = shallow(<RegistrationScreen/>)
})

describe('Registration test suite', () => {
    it('should render registration form', () => {
        expect(wrapper.find("#register-form").exists()).toBeTruthy()
        expect(wrapper.find("#emailId").length).toEqual(1)
        expect(wrapper.find("#firstName").length).toEqual(1)
        expect(wrapper.find("#lastName").length).toEqual(1)
        expect(wrapper.find("#phone").length).toEqual(1)
        expect(wrapper.find("#password").length).toEqual(1)
        expect(wrapper.find('#confirmPassword').length).toEqual(1)
        expect(wrapper.find('Link').length).toEqual(1)
    })
})

describe('Checking eMail', () => {
    it('should be changed', () => {
        wrapper.find('#emailId').simulate('change', {
            target: {
                name: 'eMail',
                value: 'jai@gamil.com'
            }
        })
        // expect(wrapper.find('#emailId').prop('data-value')).toEqual('jai@gmail.com')
        expect(wrapper.props('eMail')).toEqual('jai@gmail.com');
        // expect(wrapper.find('#emailId').value).toBe('jai@gmail.com')
    })
})