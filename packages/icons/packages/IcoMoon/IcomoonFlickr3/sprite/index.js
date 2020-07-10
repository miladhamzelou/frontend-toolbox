/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonFlickr3.svg');
}

const IcomoonFlickr3 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonFlickr3"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonFlickr3Href"
        xlinkHref={`${importPrefix}#IcomoonFlickr3`}
      />
    </svg>
  );
};

IcomoonFlickr3.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonFlickr3.defaultProps = {
  size: 1.5,
};

export default IcomoonFlickr3;
