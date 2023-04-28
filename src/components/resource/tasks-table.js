import DataTable, { ExpanderComponentProps } from 'react-data-table-component';

export const ResourceTasksTable = (props) => {
  
  const tableHeads = [
    {
      name: '#',
      selector: row => row.id,
    }, {
      name: 'Name',
      selector: row => row.title,
      sortable: true
    }, {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    }, {
      name: 'Start Date',
      selector: row => row.stDate,
      sortable: true
    }, {
      name: 'End Date',
      selector: row => row.enDate,
      sortable: true
    }, {
      name: 'Time',
      selector: row => row.estTime
    }, {
      name: 'Assigned To',
      selector: row => row.asgnTo
    }, {
      name: 'Time',
      selector: row => row.estTime,
      sortable: true
    }, {
      name: 'Priority',
      selector: row => row.priority,
      sortable: true
    }
  ]
  const tableData = [
    {
      id: 1,
      title: 'Beetlejuice',
      estTime: '1.00',
      estbtn: "button"
    }, {
      id: 2,
      title: 'Ghostbusters',
      estTime: '0.30'
    }
  ]
  const ExpandedComponent = ({ data }) => <div>{data.estbtn}</div>;
  return (
    <DataTable 
      columns={tableHeads}
      data={tableData}
      striped={true}
      selectableRows
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='400px'
    />
  )
}