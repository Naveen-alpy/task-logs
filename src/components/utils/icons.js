import { SvgIcon } from "@mui/material";
import { ReactComponent as tlIcon } from "../../assets/icons/tl.svg";
import { ReactComponent as hmIcon } from "../../assets/icons/home-filled.svg";
import { ReactComponent as pmIcon } from "../../assets/icons/pm.svg";
import { ReactComponent as empIcon } from "../../assets/icons/employee.svg";
import { ReactComponent as tktIcon } from "../../assets/icons/ticket-filled.svg";
import { ReactComponent as prcIcon } from "../../assets/icons/project-filled.svg";
export const TlIcon = (props) => {
  return(
    <SvgIcon component={tlIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const PmIcon = (props) => {
  return(
    <SvgIcon component={pmIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const EmpIcon = (props) => {
  return(
    <SvgIcon component={empIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const HomeIcon = (props) => {
  return(
    <SvgIcon component={hmIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const TicketIcon = (props) => {
  return(
    <SvgIcon component={tktIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const ProjctIcon = (props) => {
  return(
    <SvgIcon component={prcIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}