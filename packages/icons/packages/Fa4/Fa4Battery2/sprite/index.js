/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Battery2.svg');
}

const Fa4Battery2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Battery2"
      viewBox="0 0 2304 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4Battery2Href"
        xlinkHref={`${importPrefix}#Fa4Battery2`}
      />
    </svg>
  );
};

Fa4Battery2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Battery2.defaultProps = {
  size: 1.5,
};

export default Fa4Battery2;
