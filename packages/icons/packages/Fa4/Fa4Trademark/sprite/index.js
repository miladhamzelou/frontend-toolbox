/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Trademark.svg');
}

const Fa4Trademark = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Trademark"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4TrademarkHref"
        xlinkHref={`${importPrefix}#Fa4Trademark`}
      />
    </svg>
  );
};

Fa4Trademark.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Trademark.defaultProps = {
  size: 1.5,
};

export default Fa4Trademark;
