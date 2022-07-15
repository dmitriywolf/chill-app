import React from "react";
import Header from "components/Header/Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
