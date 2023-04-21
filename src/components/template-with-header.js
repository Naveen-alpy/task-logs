import { Outlet } from "react-router-dom"
import Header from "./header_footer/header"
import Footer from "./header_footer/footer"

export const TemplateWithHeader = () => {
  return(
    <>
      <Header />
      <section id="content_wrapper">
        <div className="container_wrapper"><Outlet /></div>
      </section>
      <div className="has_sidebar"><Footer /></div>      
    </>
  )
}