import { create, themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import pkg from '../packages/core/package.json';
import { defaultPalette } from '../packages/components/theme/src/palettes';

export const managerConfig = {
  showAddonsPanel: true,
  showPanel: true,
  showSearchBox: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: true,
  sidebar: {
    // collapsedRoots: [],
  },
  theme: create({
    ...themes.light,
    barSelectedColor: defaultPalette.brand,
    colorPrimary: defaultPalette.neutral,
    colorSecondary: defaultPalette.brand,
    brandTitle: `Real System v${pkg.version}`,
    brandUrl: 'https://github.com/bigwoof91/real-system',
    gridCellSize: 12,
  }),
};

addons.setConfig(managerConfig);
