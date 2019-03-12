/**
 * App Light Theme
 */
import { createMuiTheme } from '@material-ui/core/styles';
import AppConfig from '../../constants/AppConfig';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
    palette: {
        primary: {
            main: AppConfig.themeColors.info
        },
        secondary: {
            main: AppConfig.themeColors.warning
        }
    }
});

export default theme;