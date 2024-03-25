import React from "react"
import { Link } from "../Router"

const Navigation = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about/me"}>Me</Link>
    </div>
  )
}

export default Navigation
