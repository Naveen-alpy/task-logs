import DataTable from 'react-data-table-component';
import pImg1 from "../../assets/images/avatar/img-1.jpg";
import pImg2 from "../../assets/images/avatar/img-2.jpg";
import pImg3 from "../../assets/images/avatar/img-3.jpg";
import pImg4 from "../../assets/images/avatar/img-4.jpg";
import { useState } from 'react';

export const TLTasktableIntro = (props) => {
  const [classVal, setClassVal] = useState("Not Started")

  const updateStatus = (status,id) => {
    const updatedTabledata = tableData.map(el => {return el.id === id ? {...el,status} : el})
    setTableData(updatedTabledata)
    setClassVal(status)
  }
  
  const tableHeads = [
    {
      name: '#',
      selector: row => row.id,
      maxWidth: '50px',
      minWidth: '30px'
    }, {
      name: 'Name',
      selector: row => (<div><div className='th_title clear'>{row.title}</div><div className='th_text text-off'>{row.taskId}</div></div>),
      sortable: true
    }, {
      name: 'Type',
      selector: row => (<span className="btn_tasks primary">{row.tckType}</span>),
      maxWidth: '200px'
    }, {
      name: 'Status',
      selector: row => (<span className={`btn_tasks ${row.status.replace(/ +/g, '-').toLowerCase()}`}>{row.status}</span>),
      maxWidth: '180px',
      minWidth: '30px'
    }, {
      name: 'Start Date',
      selector: row => row.stDate,
      sortable: true,
      maxWidth: '140px',
      minWidth: '30px'
    }, {
      name: 'End Date',
      selector: row => row.enDate,
      sortable: true,
      maxWidth: '140px',
      minWidth: '30px'
    }, {
      name: 'Est. Hour',
      selector: row => (<span className='est_time'>{row.estTime}</span>),
      maxWidth: '100px',
      minWidth: '30px'
    }, {
      name: 'Assigned To',
      selector: row => (<div className='user_profile vCenter m-inline-end'>{row.rsrcImg.map((rsrcIm,i)=>(<figure className='vhCenter profileImg' key={i}><img height="30px" width="30px" src={rsrcIm} alt={row.asgnTo} /></figure>))}</div>),
      maxWidth: '220px'
    }, {
      name: 'Priority',
      selector: row => (<span className={`btn_tasks ${row.priority.replace(/ +/g, '-').toLowerCase()}`}>{row.priority}</span>),
      sortable: true,
      maxWidth: '130px',
      minWidth: '30px'
    }
  ]
  const [tableData, setTableData] = useState([
    {
      id: 1,
      title: 'PhysioActive',
      taskId: '171894002',
      addLinks: 'Document Links',
      hasEmail: 'yes',
      tckType: 'Revision',
      status: 'Not Started',
      stDate: '06 Mar 2023',
      enDate: '07 Mar 2023',
      estTime: '1.00',
      asgnTo: ["salman","Devina","Saranya","suhail"],
      rsrcImg: [pImg1, pImg2, pImg3, pImg4],
      priority: "Low"
    }, {
      id: 2,
      title: 'Elite Med Spa',
      taskId: '171894002',
      addLinks: 'Document Links dummy content',
      hasEmail: 'No',
      tckType: 'SEO',
      status: 'Not Started',
      stDate: '07 Mar 2023',
      enDate: '07 Mar 2023',
      estTime: '0.30',
      asgnTo: ['Suhail'],
      rsrcImg: [pImg4],
      priority: "High"
    }, {
      id: 3,
      title: 'Northwood Mortgage',
      taskId: '151008005',
      addLinks: 'Document Links dummy content',
      hasEmail: 'No',
      tckType: 'Content Adding',
      status: 'Not Started',
      stDate: '05 Mar 2023',
      enDate: '10 Mar 2023',
      estTime: '40.00',
      asgnTo: ['Devina'],
      rsrcImg: [pImg2],
      priority: "Medium"
    }
  ])
  return (
    <DataTable 
      columns={tableHeads}
      data={tableData}
      striped={true}
      /* selectableRows */
      pagination
      fixedHeader
      fixedHeaderScrollHeight='400px'
    />
  )
}