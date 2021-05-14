import React from "react"
import classes from "./Body.module.css"

export default function Body() {
  return (
    <div className={classes.body}>
      <p className={classes.heading}>
        Hi, I'm Yusuf <span>&#128075;&#127996;</span>
      </p>
      <p>
        I'm a BSc Computer Science Graduate (2021), and a React Native Developer
        @ App Sapiens, working with React, React Native & the JAMStack.
      </p>
      <p>
        I hope to use this blog to document my journey as a student and
        early-career developer.
      </p>
      <p>
        Currently working with all things JavaScript: React Native Expo, React,
        Gatsby, the JAMStack, and more!{" "}
        <span>&#128104;&#127997;&#8205;&#128187;</span>
      </p>
      <p>
        Have a read of some of my experiences below{" "}
        <span>&#128071;&#127996;</span>
      </p>
    </div>
  )
}
