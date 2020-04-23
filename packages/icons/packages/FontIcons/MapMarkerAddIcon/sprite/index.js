/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./MapMarkerAddIcon.svg');
}

const MapMarkerAddIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`/${process.env.PUBLIC_URL}/sprite.svg#MapMarkerAddIcon`} />
  </svg>;

MapMarkerAddIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MapMarkerAddIcon.defaultProps = {
  size: 1.5,
};

export default MapMarkerAddIcon;

