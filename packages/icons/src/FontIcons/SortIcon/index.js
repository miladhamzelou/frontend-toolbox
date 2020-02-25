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
    <title>sort</title>
    <path d="M30.524 8.853l-5.902-5.76c-0.071-0.089-0.178-0.124-0.284-0.178l-0.196-0.142-0.302-0.053c-0.107-0.018-0.178-0.053-0.284-0.053l-0.178 0.036c-0.142 0-0.267 0.018-0.409 0.071l-0.142 0.107c-0.107 0.053-0.231 0.124-0.338 0.213l-5.902 5.76c-0.313 0.281-0.509 0.687-0.509 1.139 0 0.844 0.684 1.529 1.529 1.529 0.439 0 0.834-0.185 1.113-0.481l0.001-0.001 3.307-3.2v18.649c0 0.844 0.684 1.529 1.529 1.529s1.529-0.684 1.529-1.529v-18.667l3.307 3.218c0.276 0.273 0.656 0.442 1.076 0.442 0.428 0 0.815-0.176 1.093-0.46l0-0c0.268-0.275 0.434-0.652 0.434-1.067 0-0.433-0.18-0.823-0.469-1.102l-0-0zM12.267 19.644l-3.307 3.2v-18.649c0-0.844-0.684-1.529-1.529-1.529s-1.529 0.684-1.529 1.529v18.667l-3.307-3.236c-0.276-0.267-0.652-0.432-1.067-0.432-0.847 0-1.534 0.687-1.534 1.534 0 0.432 0.179 0.823 0.467 1.102l0 0 5.902 5.76c0.107 0.107 0.249 0.178 0.356 0.231l0.142 0.089c0.171 0.071 0.37 0.112 0.578 0.112s0.407-0.041 0.588-0.116l-0.010 0.004 0.124-0.089c0.124-0.071 0.249-0.124 0.356-0.231l5.902-5.76c0.257-0.273 0.415-0.642 0.415-1.047 0-0.844-0.684-1.529-1.529-1.529-0.392 0-0.75 0.148-1.021 0.391l0.001-0.001z" />
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
