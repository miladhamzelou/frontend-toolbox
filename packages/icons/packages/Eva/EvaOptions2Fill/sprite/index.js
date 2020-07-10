/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaOptions2Fill.svg');
}

const EvaOptions2Fill = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaOptions2Fill"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaOptions2FillHref"
        xlinkHref={`${importPrefix}#EvaOptions2Fill`}
      />
    </svg>
  );
};

EvaOptions2Fill.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaOptions2Fill.defaultProps = {
  size: 1.5,
};

export default EvaOptions2Fill;
