import { Outlet } from "react-router-dom"

export const TemplateWithoutHeadFoot = () => {
  return (
    <section className="outer_container vhCenter">
      <div className="inner_container">
        <Outlet />
      </div>
    </section>
  )
}