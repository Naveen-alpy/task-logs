import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ToastError, ToastSuccess } from "../utils/tools";

const EntryLogin = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm({
    defaultValues:{
      username:"",
      password:''
    }
  })

  const login = ({username,password}) => {
    const requestOptions = {
      method: 'GET'
    };

  fetch(`https://asia-south1.gcp.data.mongodb-api.com/app/tasklougeservices-dogac/endpoint/login?username=${username}&password=${password}`, requestOptions)
    .then(response => response.json())
    .then(res => {
      if(res.result){
        ToastSuccess("Welcome Back!");
        navigate("/dashboard");
      } else {
        ToastError("Something Went Wrong. Please Try Again!")
      }
    })
    .catch(error => console.log('error', error));
  }

  return (
    <>
      <header className="project_heading_widget">
        <h1 className="heading_title tt-none">Log in</h1>
        <small>Welcome to TaskLogs, please put your login credentials below to start using the APP</small>
      </header>
      <form onSubmit={handleSubmit(login)}>
        <div className="input-holder form-elements log_mail vCenter no-wrap">
          <label className="placeholder_lab" htmlFor="en_mail">E-mail address</label>
          <input type="text" id="en_mail" className="input_field" {...register('username',{required:true})} />
          <label htmlFor="en_mail" className="mailExt">@tasklogs.com</label>
        </div>
        <div className="input-holder">
          <label className="placeholder_lab" htmlFor="en_pass">Password</label>
          <input type="password" id="en_pass" className="form-elements" {...register('password',{required:true})} />
        </div>
        <div className="input-holder center project-btn-wrap">
          <button type="submit" className="project-btn">Login</button>
        </div>
      </form>
    </>
  )
}

export default EntryLogin