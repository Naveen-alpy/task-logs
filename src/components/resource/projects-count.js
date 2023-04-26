export const ProjectCounts = () => {
  return (
    <ul className="tasks_sorts project_count">
      <li>
        <div className="sort_grid">
          <span className="count color-success">88</span>
          <div className="tags">CWP</div>
          <div className="tasks">Custom Web Projects</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-primary">88</span>
          <div className="tags">LP</div>
          <div className="tasks">Landing Pages</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-warning">88</span>
          <div className="tags">WTG</div>
          <div className="tasks">Website To Go</div>
        </div>
      </li>
      <li>
        <div className="sort_grid">
          <span className="count color-hold">88</span>
          <div className="tags">CRO</div>
          <div className="tasks">Templates</div>
        </div>
      </li>
    </ul>
  )
}