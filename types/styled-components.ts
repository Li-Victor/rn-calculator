// styled-components.ts
import * as styledComponents from 'styled-components/native';

interface IThemeInterface {
  special: boolean;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
