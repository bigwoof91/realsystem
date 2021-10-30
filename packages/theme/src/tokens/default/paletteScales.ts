import { polished } from '@realsystem/styling';

import { makeColorRange } from '../makeColorRange';

import { DefaultPalette } from './palette';

const color = makeColorRange<'color'>('color');

const colors = (palette: DefaultPalette) => ({
  'color-brand': palette.brand,
  ...color<'neutral'>('neutral'),
});

const colorBackground = makeColorRange<'color-background'>('color-background');
const backgroundColors = (palette: DefaultPalette) => ({
  // in use
  'color-background': palette.weak,
  'color-background-inverse': palette.strong,
  ...colorBackground<'brand'>('brand'),
  ...colorBackground<'success'>('success'),
  ...colorBackground<'danger'>('danger'),
  ...colorBackground<'neutral'>('neutral'),

  /** @todo WIP */
  'color-background-overlay': polished.transparentize(0.6, palette.strong),
});

const colorText = makeColorRange<'color-text'>('color-text');
const textColors = (palette: DefaultPalette) => ({
  'color-text': palette.medium,
  'color-text-inverse': palette.weak,
  ...colorText<'brand'>('brand'),
  ...colorText<'success'>('success'),
  ...colorText<'warning'>('warning'),
  ...colorText<'danger'>('danger'),
  ...colorText<'neutral'>('neutral'),
});

const colorBorder = makeColorRange<'color-border'>('color-border');
const borderColors = (palette: DefaultPalette) => ({
  'color-border': palette.neutral,
  ...colorBorder<'brand'>('brand'),
  ...colorBorder<'neutral'>('neutral'),
  ...colorBorder<'success'>('success'),
  ...colorBorder<'warning'>('warning'),
  ...colorBorder<'danger'>('danger'),
  ...colorBorder<'primary'>('primary'),
});

const borders = (palette: DefaultPalette) => ({
  /** @todo WIP */
  'border-0': 0,
  'border-1': '1px solid transparent',
  'border-2': `1px solid ${palette.neutral}`,
  'border-3': `2px solid ${palette.neutral}`,
  'border-4': `4px solid ${palette.neutral}`,
});

const shadow = makeColorRange<'shadow'>('shadow');
const shadowNeutral = shadow<'neutral'>('neutral');

const shadows = (palette: DefaultPalette) => ({
  /** @todo WIP */
  shadow: `0 0 0 1px ${shadowNeutral['shadow-neutral']}neutral`,
  'shadow-strong': `0 0 0 1px ${shadowNeutral['shadow-neutral-strong']}neutral`,
  'shadow-stronger': `0 0 0 1px ${shadowNeutral['shadow-neutral-stronger']}neutral`,
  'shadow-strongest': `0 0 0 1px ${shadowNeutral['shadow-neutral-strongest']}neutral`,
  'shadow-weak': `0 0 0 1px ${shadowNeutral['shadow-neutral-weak']}neutral`,
  'shadow-weaker': `0 0 0 1px ${shadowNeutral['shadow-neutral-weaker']}neutral`,
  'shadow-weakest': `0 0 0 1px ${shadowNeutral['shadow-neutral-weakest']}neutral`,

  'shadow-outline': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral']}, inset 0 0 0 2px #fff`,
  'shadow-outline-strong': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-strong']}, inset 0 0 0 2px #fff`,
  'shadow-outline-stronger': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-stronger']}, inset 0 0 0 2px #fff`,
  'shadow-outline-strongest': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-strongest']}, inset 0 0 0 2px #fff`,
  'shadow-outline-weak': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-weak']}, inset 0 0 0 2px #fff`,
  'shadow-outline-weaker': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-weaker']}, inset 0 0 0 2px #fff`,
  'shadow-outline-weakest': `inset 0 0 0 1px ${shadowNeutral['shadow-neutral-weakest']}, inset 0 0 0 2px #fff`,
});

export { backgroundColors, borderColors, borders, colors, shadows, textColors };
