/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5HandHoldingUsdSolid.svg');
}

const Fa5HandHoldingUsdSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5HandHoldingUsdSolid"
      viewBox="0 0 544 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5HandHoldingUsdSolidHref"
        xlinkHref={`${importPrefix}#Fa5HandHoldingUsdSolid`}
      />
    </svg>
  );
};

Fa5HandHoldingUsdSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5HandHoldingUsdSolid.defaultProps = {
  size: 1.5,
};

export default Fa5HandHoldingUsdSolid;
