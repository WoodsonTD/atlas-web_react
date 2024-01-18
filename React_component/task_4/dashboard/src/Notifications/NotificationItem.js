import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { value } = this.props;
    return (
      <li onClick={this.handleClick} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
