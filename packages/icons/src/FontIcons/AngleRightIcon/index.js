import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size, color }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={color}
  >
    <title>angle-right</title>
    <path d="M25.011 15.262l-14.942-14.942c-0.214-0.214-0.46-0.321-0.738-0.321s-0.524 0.107-0.738 0.321l-1.603 1.603c-0.214 0.214-0.321 0.459-0.321 0.738s0.107 0.524 0.321 0.737l12.601 12.601-12.601 12.601c-0.214 0.214-0.321 0.46-0.321 0.737s0.107 0.524 0.321 0.738l1.603 1.603c0.214 0.214 0.46 0.321 0.738 0.321s0.524-0.107 0.738-0.321l14.941-14.942c0.214-0.214 0.321-0.46 0.321-0.738s-0.106-0.524-0.32-0.738z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconName.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default IconName;
