import React from "react"
import classes from "./Header.module.css"
import { Link } from "gatsby"

export default function Header() {
  return (
    <Link to="/" className={classes.link}>
      <h1 className={classes.heading}>yusufcodes</h1>
    </Link>
  )
}
