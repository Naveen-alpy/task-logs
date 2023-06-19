import { SvgIcon } from "@mui/material";
import { ReactComponent as tlIcon } from "../../assets/icons/tl.svg";
import { ReactComponent as hmIcon } from "../../assets/icons/home-filled.svg";
import { ReactComponent as pmIcon } from "../../assets/icons/pm.svg";
import { ReactComponent as empIcon } from "../../assets/icons/employee.svg";
import { ReactComponent as tktIcon } from "../../assets/icons/ticket-filled.svg";
import { ReactComponent as prcIcon } from "../../assets/icons/project-filled.svg";
import { ReactComponent as logIcon } from "../../assets/icons/logins.svg";
import { ReactComponent as closeIcon } from "../../assets/icons/close.svg";
import { ReactComponent as addIcon } from "../../assets/icons/add-alt.svg";
import { ReactComponent as addIconAlt } from "../../assets/icons/add.svg";
import { ReactComponent as trashIcon } from "../../assets/icons/trash-filled.svg";
import { ReactComponent as pencilEdit } from "../../assets/icons/pencil.svg";
import { ReactComponent as cameraProfile } from "../../assets/icons/camera-fill.svg";
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
export const LoginIcon = (props) => {
  return(
    <SvgIcon component={logIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const CloseIcon = (props) => {
  return(
    <SvgIcon component={closeIcon} inheritViewBox sx={{fontSize:props.size}} />
  )
}
export const TrashFilled = (props) => {
  return(
    <SvgIcon component={trashIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const AddIcon = (props) => {
  return(
    <SvgIcon component={addIcon} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const AddIconAlt = (props) => {
  return (
    <SvgIcon component={addIconAlt} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const PencileditFilled = (props) => {
  return(
    <SvgIcon component={pencilEdit} inheritViewBox sx={{fontSize: props.size}} />
  )
}
export const CameraFilled = (props) => {
  return(
    <SvgIcon component={cameraProfile} inheritViewBox sx={{fontSize: props.size}} />
  )
}