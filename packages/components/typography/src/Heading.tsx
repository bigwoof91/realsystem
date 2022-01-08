import React, { forwardRef } from 'react';

import { Text, TextStyleProps } from '@real-system/text-primitive';

import {
  HeadingAsTags,
  HeadingElement,
  HeadingVariants,
  InternalTypographyProps,
} from './types';

const styles: {
  [key in HeadingVariants]: Pick<
    TextStyleProps,
    'fontSize' | 'lineHeight' | 'mb' | 'fontWeight'
  >;
} = {
  heading1: {
    fontSize: 7,
    lineHeight: 7,
    fontWeight: 3,
    mb: 5,
  },
  heading2: {
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 3,
    mb: 4,
  },
  heading3: {
    fontSize: 4,
    lineHeight: 4,
    fontWeight: 3,
    mb: 3,
  },
  heading4: {
    fontSize: 3,
    lineHeight: 3,
    fontWeight: 3,
    mb: 3,
  },
  heading5: {
    fontSize: 2,
    lineHeight: 2,
    fontWeight: 3,
    mb: 3,
  },
  heading6: {
    fontSize: 1,
    lineHeight: 1,
    fontWeight: 3,
    mb: 1,
  },
};

export type HeadingProps = {
  children?: React.ReactNode;
  variant?: HeadingVariants;
  as?: HeadingAsTags;
} & InternalTypographyProps;

const Heading = forwardRef<HeadingElement, HeadingProps>(
  (
    { variant = 'heading2', children, mb, as = 'div' },
    ref
  ): React.ReactElement => {
    return (
      <Text
        as={as}
        m={0}
        color="color-text"
        {...styles[variant]}
        ref={ref}
        mb={mb ?? styles[variant].mb}>
        {children}
      </Text>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
