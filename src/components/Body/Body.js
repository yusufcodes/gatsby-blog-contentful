import React from "react"
import classes from "./Body.module.css"

export default function Body() {
  return (
    <div className={classes.body}>
      <p className={classes.heading}>
        Hi, I'm Yusuf <span>&#128075;&#127996;</span>
      </p>
      <p>
        I'm a final year Computer Science student based in Manchester, working
        part-time as a developer along the way.
      </p>
      <p>
        Currently working with all things JavaScript: React, Gatsby, the
        JAMStack, and more! <span>&#128104;&#127997;&#8205;&#128187;</span>
      </p>
      <p>
        Have a read of some of my experiences below{" "}
        <span>&#128071;&#127996;</span>
      </p>
    </div>
  )
}
