import React from "react";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>Hello World</p>
      <main>{children}</main>
    </>
  )
}
