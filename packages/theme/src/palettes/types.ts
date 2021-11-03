import get from 'lodash.get';

import { AddPrefix } from '@real-system/utils';

/**
 * @description all palette keys, regardless of depth
 */
export type PaletteKeys =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'disabled'
  | 'neutral'
  | 'strong'
  | 'weak';

export type PaletteIntents = Extract<
  PaletteKeys,
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
>;
export type PaletteStatuses = Extract<
  PaletteKeys,
  'success' | 'warning' | 'danger' | 'info' | 'disabled'
>;
export type PaletteAccents = Extract<
  PaletteKeys,
  'primary' | 'secondary' | 'tertiary' | 'quaternary'
>;
export type PaletteRest = Extract<
  PaletteKeys,
  'brand' | 'neutral' | 'strong' | 'weak'
>;

export type PaletteAccessors =
  | PaletteKeys
  | AddPrefix<PaletteAccents, 'accent.'>
  | AddPrefix<PaletteStatuses, 'status.'>;

export type Palette<T = string> = {
  accent: { [key in PaletteAccents]: T };
  status: { [key in PaletteStatuses]: T };
} & { [key in PaletteRest]: T };

const getPaletteColor = (palette: Palette, key: PaletteKeys): string => {
  const color =
    get(palette, key, false) ||
    get(palette, `status.${key}`, false) ||
    get(palette, `accent.${key}`, '');
  return color;
};

export { getPaletteColor };
