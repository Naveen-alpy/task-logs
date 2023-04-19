import { Outlet } from "react-router-dom"
import { NoStyledFooter } from "./header_footer/no-style-footer"
import { HeaderWithLogoOnly } from "./header_footer/no-styled-header"

export const TemplateWithoutHeader = () => {
  return(
    <>
      <HeaderWithLogoOnly />
      <Outlet />
      <NoStyledFooter />
    </>
  )
}