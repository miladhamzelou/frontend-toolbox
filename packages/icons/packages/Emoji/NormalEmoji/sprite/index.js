/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./NormalEmoji.svg');
}

const NormalEmoji = ({ className, size }) => 
  <svg 
    viewBox="0 0 176.000000 183.000000"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`/${process.env.PUBLIC_URL}/sprite.svg#NormalEmoji`} />
  </svg>;

NormalEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

NormalEmoji.defaultProps = {
  size: 1.5,
};

export default NormalEmoji;

