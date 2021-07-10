import React from "react"
import classes from "./Body.module.css"

export default function Body() {
  return (
    <div className={classes.body}>
      <p className={classes.heading}>
        Hi, I'm Yusuf <span>&#128075;&#127996;</span>
      </p>
      <p>
        I'm a First Class BSc Computer Science Graduate (2021), and a React Native Developer
        @ App Sapiens, working with React, React Native Expo & the JAMStack. Based in Manchester, UK.
      </p>
      <p>
        I hope to use this blog to document my journey as an early-career developer and former Computer Science student.
      </p>
      <p>
        Have a read of some of my experiences below{" "}
        <span>&#128071;&#127996;</span>
      </p>
    </div>
  )
}
