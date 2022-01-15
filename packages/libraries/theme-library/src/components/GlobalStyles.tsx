import React from 'react';

import { css, StylingGlobals } from '@real-system/styling-library';

import { normalizeStyles } from '../normalize';

const realSystemStyles = css({
  html: {
    fontSize: '0.625rem',
    outlineColor: 'color-border-brand-weak-3',
  },
  body: {
    WebkitFontSmoothing: 'subpixel-antialiased',
    MozOsxFontSmoothing: 'auto',
    fontFamily: 'font-family-text',
    fontWeight: 0,
    letterSpacing: 3,
    backgroundColor: 'color-background',
  },
});

const GlobalStyles = () => (
  <>
    <StylingGlobals styles={normalizeStyles} />
    <StylingGlobals styles={realSystemStyles} />
  </>
);

export { GlobalStyles };
