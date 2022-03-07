import { polished } from '@real-system/styling-library';

import { Palette } from '../../palettes';
import { makeColorRange, makeEachColorRange } from '../utils';

/**
 ** Tokens that require palette
 **/

const backgroundColors = (palette: Palette) => ({
  'color-background': palette.light,
  'color-background-dark': palette.dark,
  'color-background-light': palette.light,
  'color-background-overlay': polished.transparentize(0.6, palette.neutral),
  ...makeEachColorRange<'color-background'>('color-background', palette),
});

const textColors = (palette: Palette) => ({
  'color-text': palette.neutral,
  'color-text-light': palette.light,
  'color-text-dark': palette.dark,
  ...makeEachColorRange<'color-text'>('color-text', palette),
});

const borderColors = (palette: Palette) => ({
  'color-border': palette.neutral,
  'color-border-dark': palette.dark,
  'color-border-light': palette.light,
  ...makeEachColorRange<'color-border'>('color-border', palette),
});

const borders = (palette: Palette) => ({
  /** @todo WIP */
  'border-0': 0,
  'border-1': '1px solid transparent',
  'border-2': `1px solid ${palette.neutral}`,
  'border-3': `2px solid ${palette.neutral}`,
  'border-4': `4px solid ${palette.neutral}`,
});

const shadowBorder = makeColorRange<'shadow-border'>('shadow-border');
const dropShadow = makeColorRange<'drop-shadow'>('drop-shadow');
const overlayShadow = makeColorRange<'overlay-shadow'>('overlay-shadow');
const combinedOverlayNeutral = (palette: Palette) => {
  const makePart = (suffix: string) =>
    overlayShadow<'neutral'>('neutral', palette, {
      suffix,
    })['overlay-shadow-neutral-weak-4'];

  const overlayBefore = makePart('0px 0px 1px');
  const overlayAfter = makePart('0px 16px 24px -8px');

  return `${overlayBefore}, ${overlayAfter}`;
};

const shadows = (palette: Palette) => {
  const shadowBorderBrand = shadowBorder<'primary'>('primary', palette, {
    prefix: '0 0 0 3px',
  });
  const dropShadowNeutral = dropShadow<'neutral'>('neutral', palette, {
    prefix: '0 3px 7px',
  });

  return {
    'shadow-focus': shadowBorderBrand['shadow-border-primary-weak-3'],
    'overlay-shadow-1': combinedOverlayNeutral(palette),
    ...shadowBorderBrand,
    ...dropShadowNeutral,
  };
};

const filter = makeColorRange<'filter-shadow'>('filter-shadow');

const filters = (palette: Palette) => {
  const neutrals = filter<'neutral'>('neutral', palette, {
    override: (color) => `drop-shadow(${color} 0px 2px 6px)`,
  });
  return {
    ...neutrals,
  };
};

export {
  backgroundColors,
  borderColors,
  borders,
  filters,
  shadows,
  textColors,
};
