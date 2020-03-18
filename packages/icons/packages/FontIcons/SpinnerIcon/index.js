import * as React from 'react';
import PropTypes from 'prop-types';

const SpinnerIcon = ({ className, size, color }) => (
  <svg
    data-testid="SpinnerIcon"
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
    <title>spinner</title>
    <path d="M16 9.472c-1.030 0-1.865-0.835-1.865-1.865v-5.596c0-1.030 0.835-1.865 1.865-1.865s1.865 0.835 1.865 1.865v5.596c0 1.030-0.835 1.865-1.865 1.865zM16 31.155c-0.644 0-1.166-0.522-1.166-1.166v-5.596c0-0.644 0.522-1.166 1.166-1.166s1.166 0.522 1.166 1.166v5.596c0 0.644-0.522 1.166-1.166 1.166zM11.805 10.48c-0.604 0-1.192-0.314-1.516-0.875l-2.798-4.846c-0.483-0.836-0.196-1.906 0.64-2.389s1.906-0.196 2.389 0.64l2.798 4.846c0.483 0.836 0.196 1.906-0.64 2.389-0.275 0.159-0.576 0.235-0.873 0.235zM22.995 29.164c-0.363 0-0.715-0.188-0.91-0.525l-2.798-4.846c-0.29-0.502-0.118-1.143 0.384-1.433s1.143-0.118 1.433 0.384l2.798 4.846c0.29 0.502 0.118 1.143-0.384 1.433-0.165 0.095-0.346 0.141-0.524 0.141zM8.729 13.436c-0.277 0-0.557-0.070-0.814-0.219l-4.846-2.798c-0.781-0.451-1.048-1.449-0.597-2.229s1.449-1.048 2.229-0.597l4.846 2.798c0.781 0.451 1.048 1.449 0.597 2.229-0.302 0.524-0.851 0.816-1.415 0.816zM28.114 23.927c-0.158 0-0.319-0.040-0.465-0.125l-4.846-2.798c-0.446-0.258-0.599-0.828-0.341-1.274s0.828-0.599 1.274-0.341l4.846 2.798c0.446 0.258 0.599 0.828 0.341 1.274-0.173 0.299-0.486 0.466-0.809 0.466zM7.607 17.515h-5.596c-0.837 0-1.516-0.678-1.516-1.515s0.678-1.515 1.516-1.515h5.596c0.837 0 1.516 0.678 1.516 1.515s-0.678 1.515-1.516 1.515zM29.989 16.933c-0 0 0 0 0 0h-5.596c-0.515-0-0.933-0.418-0.933-0.933s0.418-0.933 0.933-0.933c0 0 0 0 0 0h5.596c0.515 0 0.933 0.418 0.933 0.933s-0.418 0.933-0.933 0.933zM3.886 24.394c-0.483 0-0.954-0.251-1.213-0.7-0.386-0.669-0.157-1.525 0.512-1.911l4.846-2.798c0.669-0.387 1.525-0.157 1.911 0.512s0.157 1.525-0.512 1.911l-4.846 2.798c-0.22 0.127-0.461 0.188-0.698 0.188zM23.27 12.736c-0.322 0-0.636-0.167-0.809-0.466-0.258-0.446-0.105-1.016 0.341-1.274l4.846-2.798c0.446-0.257 1.016-0.105 1.274 0.341s0.105 1.016-0.341 1.274l-4.846 2.798c-0.147 0.085-0.307 0.125-0.465 0.125zM9.004 29.397c-0.218 0-0.438-0.055-0.64-0.172-0.613-0.354-0.823-1.138-0.469-1.752l2.798-4.846c0.354-0.613 1.138-0.823 1.752-0.469s0.823 1.138 0.469 1.752l-2.798 4.846c-0.237 0.411-0.668 0.641-1.112 0.641zM20.196 9.664c-0.158 0-0.319-0.040-0.465-0.125-0.446-0.258-0.599-0.828-0.341-1.274l2.798-4.846c0.258-0.446 0.828-0.599 1.274-0.341s0.599 0.828 0.341 1.274l-2.798 4.846c-0.173 0.299-0.486 0.466-0.809 0.466z" />{' '}
  </svg>
);

SpinnerIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

SpinnerIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default SpinnerIcon;
