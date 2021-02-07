/* eslint-disable */

import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/Header/Header"
import Body from "../components/Body/Body"
import Footer from "../components/Footer/Footer"

import "./App.css"

import Posts from "../components/Posts/Posts"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>yusufcodes</title>
        <link rel="canonical" href="https://www.yusufcodes.com" />
      </Helmet>
      <Header />
      <Body />
      <Posts />
      <Footer />
    </div>
  )
}
