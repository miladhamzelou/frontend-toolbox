import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AngleLeftIcon } from '@snappmarket/icons/sprite';

import {
  StyledBreadcrumbWrapper,
  StyledBreadcrumbItem,
  StyledBreadcrumbItemSeparator,
  StyledBreadcrumbItemWrapper,
} from './styles';

const Breadcrumb = props => {
  const { items, className, ...rest } = props;
  const breadcrumbItems = items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <StyledBreadcrumbItemWrapper key={index}>
      {!!index && (
        <StyledBreadcrumbItemSeparator>
          <AngleLeftIcon size={1.3} color="gray" />
        </StyledBreadcrumbItemSeparator>
      )}
      <StyledBreadcrumbItem>
        {item.link ?
          <Link data-testid="breadcrumbLink" to={item.link}>{item.title}</Link>
          :
          item.title
        }
      </StyledBreadcrumbItem>
    </StyledBreadcrumbItemWrapper>
    /* eslint-enable indent */
  ));
  return (
    <StyledBreadcrumbWrapper data-testid="breadcrumb" className={className} {...rest}>
      {breadcrumbItems}
    </StyledBreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  items: [],
};

export default Breadcrumb;
