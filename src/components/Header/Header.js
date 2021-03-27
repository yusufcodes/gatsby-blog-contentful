import React from "react"
import classes from "./Header.module.css"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div className={classes.root}>
      <Link to="/" className={classes.link}>
        <h1 className={classes.heading}>yusufcodes</h1>
      </Link>
    </div>
  )
}
