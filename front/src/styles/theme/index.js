import { extendTheme } from "@chakra-ui/react";
import {
  // BUTTON,
  FORM_LABEL,
  INPUT,
  MODAL,
  TEXTAREA,
} from "./components";
import COLORS from "./colors";

const theme = extendTheme({
  components: {
    // Button: BUTTON,
    FormLabel: FORM_LABEL,
    Input: INPUT,
    Modal: MODAL,
    Textarea: TEXTAREA,
  },
  colors: COLORS,
});

export default theme;
