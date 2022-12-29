import React from 'react';
// Import Components
import { Row, Col, Card, Media } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';

const axiosOptions={
    headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcyMjQ3OTA3LCJleHAiOjE2NzIzMzQzMDd9.wP0UfxQF1yssyXw-QrghEXx2nZtmlZCwuy02Nw2gTBU"
    }
}
const handle =async (e)=>{
    console.log("click")
    e.preventDefault();
    try {
        const res = axios.get("http://localhost:8080/api/admin/productline/findall",axiosOptions);
        console.log(res);
    } catch(err) {
        console.log(err);
    }
}

const data = [
    { 
        examName: 'Class Test',
        class: '10',
        subject: 'English',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '23 Apr 2020',
        action: '',
    },
    { 
        examName: 'Half Yearly',
        class: '1',
        subject: 'Botony',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '23 Apr 2020',
        action: '',
    },
    { 
        examName: 'Quaterly',
        class: '9',
        subject: 'Biology',
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        date: '26 Nov 2020',
        action: '',
    },
    { 
        examName: 'Class Test',
        class: '8',
        subject: 'Science',
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        date: '18 Sep 2020',
        action: '',
    },
    { 
        examName: 'Quaterly',
        class: '7',
        subject: 'History',
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        date: '23 Jul 2020',
        action: '',
    },
    { 
        examName: 'Class Test',
        class: '2',
        subject: 'Biology',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '15 Oct 2020',
        action: '',
    },
    { 
        examName: 'Half Yearly',
        class: '6',
        subject: 'Botony',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '02 Jun 2020',
        action: '',
    },
    { 
        examName: 'Class Test',
        class: '12',
        subject: 'Mathematics',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '23 Apr 2020',
        action: '',
    },
];

const columns = [
    {
        name: 'Exam Name',
        selector: row=>row.examName,
        sortable: true,
    },
    {
        name: 'Class',
        selector: row=>row.class,
        sortable: true,
    },
    {
        name: 'Subject',
        selector: row=>row.subject,
        sortable: true,
    },
    {
        name: 'Start Time',
        selector: row=>row.startTime,
        sortable: true,
    },
    {
        name: 'End Time',
        selector: row=>row.endTime,
        sortable: true,
    },
    {
        name: 'Date',
        selector:row=>row.date,
        sortable: true,
    },
    {
        name: 'Action',
        selector: row=>row.action,
        sortable: true,
        cell: (row) => <div><a  className="btn btn-sm bg-success-light me-2">
        <FontAwesomeIcon icon={faPencilAlt} onClick={handle}/> </a> <a className="btn btn-sm bg-danger-light"> <FontAwesomeIcon icon={faTrash} /> </a></div>
    },
];


export function ProductlineDashboard() {
   

           
        const tableData = {
            columns,
            data,
        };
        return (
            <div>
                <div className="page-header">
                    <div className="page-header">
                        <Row>
                            <Col className="col">
                                <h3 className="page-title">Productline Dashboard</h3>
                                
                            </Col>
                            <Col className="col-auto text-end float-right ms-auto">
                                <a href="#" className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faDownload} /> Download</a>
                                <a href="/add-exam" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></a>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Card>
                    <DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </Card>
            </div>
        )
    
}
