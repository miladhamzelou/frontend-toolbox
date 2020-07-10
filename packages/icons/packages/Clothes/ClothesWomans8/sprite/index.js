/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ClothesWomans8.svg');
}

const ClothesWomans8 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ClothesWomans8"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ClothesWomans8Href"
        xlinkHref={`${importPrefix}#ClothesWomans8`}
      />
    </svg>
  );
};

ClothesWomans8.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClothesWomans8.defaultProps = {
  size: 1.5,
};

export default ClothesWomans8;
