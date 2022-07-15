export default {
  variants: {
    base: {
      field: {
        w: "full",
        h: "40px",
        py: "10px",
        borderColor: "white.500",
        borderWidth: "1px",
        borderStyle: "solid",
        bgColor: "white.900",
        borderRadius: "none",
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
  },
  defaultProps: {
    variant: "base",
  },
};
