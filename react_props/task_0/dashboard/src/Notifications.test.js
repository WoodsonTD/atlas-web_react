
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBeTruthy();
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
});

test('displays menu item when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={false} />);
  const menuItem = wrapper.find('.menu-item');
  expect(menuItem.exists()).toBeTruthy();
});

test('does not display div.Notifications when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={false} />);
  const notificationsDiv = wrapper.find('.Notifications');
  expect(notificationsDiv.hasClass('active')).toBeFalsy();
});

test('displays menu item when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
  const menuItem = wrapper.find('.menu-item');
  expect(menuItem.exists()).toBeTruthy();
});

test('displays div.Notifications when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
  const notificationsDiv = wrapper.find('.Notifications');
  expect(notificationsDiv.hasClass('active')).toBeTruthy();
});
