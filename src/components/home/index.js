import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
  return(
    <>
      Home Section Content
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-holder">
          <input type="text" className="form-elements" {...register("firstName", {required: true})} aria-invalid={errors.firstName ? "true" : "false"} />
          {errors.firstName?.type === 'required' && <span className="error" role="alert">First Name is Required</span>}
        </div>
        <div className="input-holder">
          <input type="email" className="form-elements" {...register("email", 
            {required: "Email Address is required", 
            validate: { matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email address must be a valid address",
          },})} aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
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