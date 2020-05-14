/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SnappMarketLogo.svg');
}

const SnappMarketLogo = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? '/sprite.svg' : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SnappMarketLogo"
      viewBox="0 0 200 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use xlinkHref={`${importPrefix}#SnappMarketLogo`} />
    </svg>
  );
};

SnappMarketLogo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SnappMarketLogo.defaultProps = {
  size: 1.5,
};

export default SnappMarketLogo;
