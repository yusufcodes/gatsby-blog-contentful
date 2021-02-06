/* eslint-disable */

import React from "react"
import Header from "../components/Header/Header"
import Body from "../components/Body/Body"
import Footer from "../components/Footer/Footer"

import "./App.css"

import Posts from "../components/Posts/Posts"

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Posts />
      <Footer />
    </div>
  )
}
