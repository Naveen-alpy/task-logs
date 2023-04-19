export const NoStyledFooter = () => {
  return(
    <footer className="no-styled-footer center">
      <div className="container">
        &copy; {new Date().getFullYear()} TaskLogs. All Rights Reserved.
      </div>
    </footer>
  )
}