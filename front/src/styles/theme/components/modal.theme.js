export default {
  variants: {
    base: {
      overlay: {
        bg: "dark.700",
        backdropFilter: "blur(40px)",
      },
      closeButton: {
        color: "grey.500",
      },
      header: {
        paddingTop: 12,
        paddingBottom: 3,
        px: 10,
        fontWeight: "medium",
      },
      body: {
        py: 3,
        px: 10,
      },
      footer: {
        paddingTop: 7.5,
        paddingBottom: 10,
        px: 10,
      },
    },
  },
  sizes: {
    md: {
      dialog: {
        maxW: 600,
      },
    },
    lg: {
      dialog: {
        maxW: 680,
      },
    },
  },
  defaultProps: {
    variant: "base",
    size: "md",
  },
};
