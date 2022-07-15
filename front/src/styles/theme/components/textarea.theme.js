export default {
  variants: {
    base: {
      borderColor: "white.500",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "5xl",
      bgColor: "white.900",
      fontFamily: "normal",
      fontWeight: "normal",
      fontSize: "sm",
      lineHeight: "5",
      color: "black.900",
      _active: {
        bgColor: "white.900",
      },
      _focus: {
        bgColor: "white.900",
      },
      _autofill: {
        bgColor: "white.900",
      },
      _disabled: {
        color: "dark.300",
      },
      _readOnly: {
        bgColor: "grey.100",
        color: "dark.300",
      },
    },
  },

  defaultProps: {
    variant: "base",
  },
};
