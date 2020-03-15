import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Slider } from './core/index';
import { StyledSimpleCarousel } from './core/styles';

const SimpleCarousel = (props) => {
  const {
    className, children, slideConfig, showingSlide, refresh,
  } = props;
  const sliderRed = useRef(null);
  // eslint-disable-next-line no-unused-vars
  let newSlider = null;

  useEffect(() => {
    newSlider = new Slider({
      slider: sliderRed.current,
      ...slideConfig,
    });
    goTo(showingSlide);
  }, [showingSlide]);

  useEffect(() => {
    newSlider = new Slider({
      slider: sliderRed.current,
      ...slideConfig,
    });
    onRefresh(refresh);
  }, [refresh]);

  const goTo = (index) => {
    if (typeof index === 'number' || index >= 0) {
      newSlider.goTo(index);
    }
  };

  const onRefresh = () => {
    if (refresh) {
      newSlider.refresh(refresh);
    }
  };

  return (
    <StyledSimpleCarousel>
      <div className={`slider ${className}`} ref={sliderRed}>
        <div className="wrapper">
          <div className="slides">{children}</div>
        </div>
      </div>
    </StyledSimpleCarousel>
  );
};
SimpleCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  slideConfig: PropTypes.object.isRequired,
  showingSlide: PropTypes.number,
  refresh: PropTypes.bool,
};
SimpleCarousel.defaultProps = {
  className: '',
};
export default SimpleCarousel;
