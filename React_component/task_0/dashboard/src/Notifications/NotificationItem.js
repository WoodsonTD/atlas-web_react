import PropTypes from 'prop-types';

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
};
