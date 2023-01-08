import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "1rem",
        border: "1px solid red",
      }}
    >
      <Link href="/">Rishu raj</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>
    </div>
  );
};

export default Navbar;