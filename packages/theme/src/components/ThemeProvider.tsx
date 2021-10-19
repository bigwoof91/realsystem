import {
  DefaultTheme,
  PrimitiveThemeConsumer as ThemeConsumer,
  PrimitiveThemeContext as ThemeContext,
  PrimitiveThemeProvider,
  PrimitiveThemeProviderProps,
  primitiveUseTheme as useTheme,
  primitiveWithTheme as withTheme,
} from '@realsystem/styling';

import { THEMES } from '../themes';
import { GlobalStyles } from '..';

export type ThemeProviderProps = {
  theme?: DefaultTheme;
} & Pick<PrimitiveThemeProviderProps<ThemeProviderProps>, 'children'>;

const ThemeProvider = ({
  children,
  ...otherProps
}: ThemeProviderProps): React.ReactElement => {
  return (
    <PrimitiveThemeProvider theme={THEMES.DEFAULT} {...otherProps}>
      <>
        <GlobalStyles />
        {children}
      </>
    </PrimitiveThemeProvider>
  );
};

export { ThemeConsumer, ThemeContext, ThemeProvider, useTheme, withTheme };
