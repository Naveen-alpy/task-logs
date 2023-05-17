import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
  return(
    <>
      Home Section Content
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-holder">
          <input type="text" className="form-elements" {...register("firstName")} />
        </div>
        <div className="input-holder">
          <input type="email" className="form-elements" {...register("email")} />
        </div>
        <div className="input-holder">
          <select {...register("gender")}>
            <option value="male">Male</option><option value="female">Female</option><option value="other">Other</option>
          </select>
        </div>
        <div className="input-holder">
          <input type="file" {...register("profileImg")} />
        </div>
        <nav className="project-btn-wrap"><button type="submit" className="project-btn">Approve</button></nav>
      </form>
    </>
  )
}

export default Home;