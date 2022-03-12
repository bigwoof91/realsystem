import type { TextPrimitiveProps } from '@real-system/text-primitive';

export type CommonTextProps = Omit<TextPrimitiveProps, 'as' | 'size'>;
export type TextAsTags = Extract<
  keyof JSX.IntrinsicElements,
  'p' | 'span' | 'div' | 'label'
>;

export type HeadingAsTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'span'
  | 'header';
export type HeadingElement =
  | HTMLDivElement
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLLabelElement;
