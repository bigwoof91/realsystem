import React from 'react';

import { Box } from '@real-system/box';
import { useUID } from '@real-system/utils';

import { circleCircumference, circleGeometry } from './constants';
import { useDelay } from './hooks';
import {
  sizes,
  SpinnerSvg,
  SvgGroup,
  TrackCircle,
  WheelCircle,
} from './styles';
import { SpinnerProps } from './types';

/**
 * @todo refactor to use an icon wrapper w/ a11y in mind i.e. decorative + aria-hidden
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  {
    size = 'md',
    title = 'Loading',
    as = 'span',
    display = 'flex',
    color = 'color-text',
    delay = 250,
    ...restProps
  },
  ref
) {
  const sizeStyles = sizes[size];
  const titleId = useUID();
  const isVisible = useDelay(delay);
  return (
    <Box
      as={as}
      display={display}
      {...restProps}
      position="relative"
      size={sizeStyles.size}
      ref={ref}
      color={color}>
      <SpinnerSvg
        display="block"
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <SvgGroup
          stroke="currentColor"
          strokeLinecap="round"
          fill="transparent"
          strokeWidth={sizeStyles.borderWidth as string}>
          <TrackCircle
            transformOrigin="center"
            {...circleGeometry}
            opacity={isVisible ? 0.25 : 0}
          />
          <WheelCircle
            transformOrigin="center"
            strokeDasharray={circleCircumference}
            opacity={isVisible ? 1 : 0}
            {...circleGeometry}
          />
        </SvgGroup>
      </SpinnerSvg>
    </Box>
  );
});

export { Spinner };
export type { SpinnerProps };
