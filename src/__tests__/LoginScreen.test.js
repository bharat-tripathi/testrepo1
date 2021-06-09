import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import LoginScreen from '../components/LoginScreen';

configure({adapter: new ReactSixteenAdapter()})

let wrapper;
beforeEach(() => {
    wrapper = shallow(<LoginScreen/>)
})

describe('Login test suite', () => {
    it('should render login form', () => {
        expect(wrapper.find("#login-form").exists()).toBeTruthy()
        expect(wrapper.find("#username").length).toEqual(1)
        expect(wrapper.find("#password").length).toEqual(1)
        expect(wrapper.find('Link').length).toEqual(2)
    })
})

describe('Email test suite', () => {
    it('state should be changed', () => {
        wrapper.find('#username').simulate('change', {
            target: {name: 'username', value: 'jai@gmail.com'}
        })
        expect(wrapper.state('username')).toEqual('jai@gmail.com')
    })
})

describe('Password test suite', () => {
    it('state should be changed', () => {
        wrapper.find('#password').simulate('change', {
            target: {name: 'password', value: 'jai123'}
        })
        expect(wrapper.state('password')).toEqual('jai123')
    })
})

// describe('Link', () => {
//     it('should render correctly', () => {
//         expect(render).toHaveBeenCalledWith(<Link className="text-info" to="/home" />, 'element-node');
//         expect(render).toHaveBeenCalledTimes(1);
//     });
// });

