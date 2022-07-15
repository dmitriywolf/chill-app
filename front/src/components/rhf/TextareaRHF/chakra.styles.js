export const styles = ({ height, hasError }) => ({
  height,
  borderColor: hasError ? "red.500" : "white.500",
  "::-webkit-scrollbar": {
    width: "3px",
    backgroundColor: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "blue.500",
    borderRadius: "3px",
  },
  "::-webkit-scrollbar-button": {
    backgroundColor: "transparent",
    height: "10px",
  },
});
