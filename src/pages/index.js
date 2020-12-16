import React from "react"

import "./App.css"

import Header from "../components/Header/Header"
import Landing from "../components/Landing/Landing"
import Posts from "../components/Posts/Posts"

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Posts />
    </div>
  )
}
