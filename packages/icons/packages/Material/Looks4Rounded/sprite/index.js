/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Looks4Rounded.svg');
}

const Looks4Rounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Looks4Rounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Looks4RoundedHref"
        xlinkHref={`${importPrefix}#Looks4Rounded`}
      />
    </svg>
  );
};

Looks4Rounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Looks4Rounded.defaultProps = {
  size: 1.5,
};

export default Looks4Rounded;
