// Task Categories
export const TaskCategories = () => {
  const taskCat = [
    {
      name: "Revision", value: "revision"
    }, {
      name: "Pre Launch", value: "prelaunch"
    }, {
      name: "Launch", value: "launch"
    }, {
      name: "Post Launch", value: "postlaunch"
    }, {
      name: "Content Adding", value: "contentadding"
    }, {
      name: "SEO", value: "seo"
    }
  ]
  return (<>
    {taskCat.map((cats,i) => (
      <option key={i} value={cats.value}>{cats.name}</option>
    ))}
  </>)
}

// Task Priority
export const TaskPriorities = () => {
  const taskPrio = [
    {
      name: "Low", value: "low"
    }, {
      name: "Medium", value: "medium"
    }, {
      name: "High", value: "high"
    }
  ]
  return (<>
    {taskPrio.map((prio,i) => (
      <option key={i} value={prio.value}>{prio.name}</option>
    ))}
  </>)
}

// Project Categories
export const ProjectCategories = () => {
  const prjctCat = [
    {
      name: "CWP", value: "cwp"
    }, {
      name: "E-Commerce", value: "ecommerce"
    }, {
      name: "LP", value: "lp"
    }, {
      name: "CRO", value: "cro"
    }, {
      name: "WTG", value: "wtg"
    }
  ]
  return (<>
    {prjctCat.map((cat,i) => (
      <option key={i} value={cat.value}>{cat.name}</option>
    ))}
  </>)
}

// Role of Employee
export const EmployeeRole = () => {
  const userRole = [
    {
      role: "Project Manager",
      values: "pm"
    }, {
      role: "Team Lead",
      values: "tl"
    }, {
      role: "Senior",
      values: "senior"
    }, {
      role: "Intermediate",
      values: "intermediate"
    }, {
      role: "Junior",
      values: "junior"
    }, {
      role: "Trainee",
      values: "trainee"
    }
  ]
  return (<>
    {userRole.map((role,i) => (
      <option key={i} value={role.values}>{role.role}</option>
    ))}
  </>)
}

// Department of Employee
export const EmployeeDepartment = () => {
  const userDepartment = [
    {
      name: "Creative",
      values: "creative"
    }, {
      name: "Developing",
      values: "developing"
    }, {
      name: "Programing",
      values: "programing"
    }, {
      name: "QA",
      values: "qa"
    }
  ]
  return (<>
    {userDepartment.map((dept,i) => (
      <option key={i} value={dept.values}>{dept.name}</option>
    ))}
  </>)
}

// Team of the Employee
export const EmployeeTeam = () => {
  const userTeam = [
    {
      name: "OASIS",
      values: "oasis"
    }, {
      name: "BEACON",
      values: "beacon"
    }
  ]
  return (<>
    {userTeam.map((team,i) => (
      <option key={i} value={team.values}>{team.name}</option>
    ))}
  </>)
}

// Employees in Programming Department
export const ProgramingResource = () => {
  const prgrmEmployee = [
    {
      name: "Kiran", value: "kiran"
    }, {
      name: "Devina", value: "devina"
    }, {
      name: "Radhika", value: "radhika"
    }, {
      name: "Salman", value: "salman"
    }, {
      name: "Suhail", value: "suhail"
    }
  ]
  return (<>
    {prgrmEmployee.map((prEmp, i) => (
      <option key={i} value={prEmp.value}>{prEmp.name}</option>
    ))}
  </>)
}

// Employee in Developing Department
export const DevelopingResource = () => {
  const devEmployee = [
    {
      name: "Naveen", value: "naveen"
    }, {
      name: "Biju", value: "biju"
    }, {
      name: "Ranjith", value: "ranjith"
    }, {
      name: "Freddy", value: "freddy"
    }, {
      name: "Sarath", value: "sarath"
    }, {
      name: "Ajay Kumar", value: "ajaykumar"
    }, {
      name: "Saranya", value: "saranya"
    }, {
      name: "Robin", value: "robin"
    }, {
      name: "Jibin", value: "jibin"
    }, {
      name: "Amal", value: "amal"
    }
  ]
  return (<>
    {devEmployee.map((devEmp, i) => (
      <option key={i} value={devEmp.value}>{devEmp.name}</option>
    ))}
  </>)
}