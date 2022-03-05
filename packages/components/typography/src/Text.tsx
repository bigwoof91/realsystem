import React, { forwardRef } from 'react';

import { TextPrimitive } from '@real-system/text-primitive';

import { Heading } from './Heading';
import { HelpText } from './HelpText';
import { Label } from './Label';
import { CommonTextProps, TextAsTags, TextVariants } from './types';

type TextVariantMap = {
  [key in TextVariants]: Extract<TextAsTags, 'p' | 'span'>;
};

const TYPOGRAPHY_VARIANT_MAP: TextVariantMap = {
  paragraph: 'p',
  inline: 'span',
};

export type TextProps = {
  children?: React.ReactNode;
  variant?: keyof typeof TYPOGRAPHY_VARIANT_MAP;
  as?: TextAsTags;
} & CommonTextProps;

export interface TextComponent
  extends React.ForwardRefExoticComponent<TextProps> {
  Heading: typeof Heading;
  Label: typeof Label;
  HelpText: typeof HelpText;
}

const variants = {
  paragraph: {
    lineHeight: 2,
    marginBottom: 2,
  },
  inline: {
    lineHeight: 2,
    marginBottom: 2,
  },
};

// @ts-expect-error Heading (component) property is defined on the fn object after this is defined
const Text: TextComponent = forwardRef<
  HTMLParagraphElement | HTMLSpanElement,
  TextProps
>(function Text(
  { children, variant = 'paragraph', as, ...restProps },
  ref
): React.ReactElement {
  const variantStyles = variants?.[variant];
  return (
    <TextPrimitive
      {...variantStyles}
      {...restProps}
      as={as || TYPOGRAPHY_VARIANT_MAP[variant]}
      ref={ref}>
      {children}
    </TextPrimitive>
  );
});

Text.Heading = Heading;
Text.Label = Label;
Text.HelpText = HelpText;

export { Text };
