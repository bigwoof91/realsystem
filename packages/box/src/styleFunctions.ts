import { css } from '@realsystem/styling';

import { PseudoPropStyles } from './pseudoPropStyles';

/**
 * Take _ prefixed style props and convert them to custom style props for CSS pseudo selectors
 *
 * @param {BoxProps} props any prop that Box can take
 * @return {*}  {(((props?: Record<string, unknown> | undefined) => CSSObject) | Record<string, never>)}
 */
export const getPseudoStyles = (
  props: any
): ReturnType<typeof css> | Record<string, any> => {
  const pseudoProps = Object.keys(props).filter((propName) =>
    propName.startsWith('_')
  ) as Array<keyof typeof PseudoPropStyles>;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: { [key: string]: any } = {};
  pseudoProps.forEach((pseudoProp) => {
    if (PseudoPropStyles[pseudoProp] != null) {
      pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
    }
  });

  return css(pseudoStyles);
};
