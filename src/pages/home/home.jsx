import React from "react"
import { Helmet } from "react-helmet-async"
import Header from "../../components/layout/header/header"
import Main from "../../components/layout/main/main"
import Footer from "../../components/layout/footer/footer"

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header />

      <Main />

      <Footer />
    </React.Fragment>
  )
}
