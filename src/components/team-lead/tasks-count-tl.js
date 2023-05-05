export const TasksCountTL = () => {
  return (
    <ul className="tasks_sorts tasks_count">
      <li>
        <div className="sort_grid">
          <span className="count color-progress">88</span>
          <div className="tags">Not Started</div>
          <div className="tasks">Tasks in queue</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-danger">88</span>
          <div className="tags">Critical</div>
          <div className="tasks">Need Priority</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-primary">88</span>
          <div className="tags">Working On</div>
          <div className="tasks">Tasks assigne</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-warning">88</span>
          <div className="tags">On Hold</div>
          <div className="tasks">Pending from others</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-hold">88</span>
          <div className="tags">Awaiting Feeds</div>
          <div className="tasks">Confirmation required</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-success">88</span>
          <div className="tags">Completed</div>
          <div className="tasks">Approvals waiting</div>
        </div>
      </li>
    </ul>
  )
}