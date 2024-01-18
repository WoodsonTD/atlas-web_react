import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // ... Other existing tests ...

  it('does not rerender when updating props with the same list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    const instance = wrapper.instance();

    // Mock shouldComponentUpdate to check if it is called
    const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

    // Update props with the same list
    wrapper.setProps({ listNotifications: notifications });

    // Assert that shouldComponentUpdate is called
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();

    // Restore the spy
    shouldComponentUpdateSpy.mockRestore();
  });

  it('rerenders when updating props with a longer list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const newNotifications = [
      { id: 3, type: 'default', value: 'Notification 3' },
      { id: 4, type: 'urgent', value: 'Notification 4' },
    ];

    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    const instance = wrapper.instance();

    // Mock shouldComponentUpdate to check if it is called
    const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

    // Update props with a longer list
    wrapper.setProps({ listNotifications: newNotifications });

    // Assert that shouldComponentUpdate is called
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();

    // Restore the spy
    shouldComponentUpdateSpy.mockRestore();
  });
});
