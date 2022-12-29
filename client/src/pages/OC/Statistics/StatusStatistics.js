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
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useEffect,useState } from 'react';






export function StatusStatistics() {
    let data = [
        {
            productID:"1",
            productLine:"BMW",
            productName:"BMW i8",
            decription:"tuyet voi",
            status:"Solded",
            storeID:"1"
        },
        {
            productID:"1",
            productLine:"BMW",
            productName:"BMW i10",
            decription:"tuyet voi",
            status:"Solded",
            storeID:"1"
        },
        {
            productID:"1",
            productLine:"BMW",
            productName:"BMW i11",
            decription:"tuyet voi",
            status:"Solded",
            storeID:"1"
        },
        {
            productID:"2",
            productLine:"BMW",
            productName:"BMW i10",
            decription:"tuyet voi",
            status:"Solded",
            storeID:"1"
        },
        {
            productID:"3",
            productLine:"Mer",
            productName:"Mer S400",
            decription:"tuyet voi",
            status:"Ready",
            storeID:"1"
        },
        {
            productID:"4",
            productLine:"Mer",
            productName:"Mer S500",
            decription:"tuyet voi",
            status:"Ready",
            storeID:"1"
        },


    ];
    const { token } = useContext(AuthContext);
    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }
    console.log("token", token)
    const columns = [
        {
            name: 'ProductID',
            selector: row => row.productID,
            sortable: true,
        },
        {
            name: 'Productline',
            selector: row => row.productLine,
            sortable: true,
        },
        {
            name: 'Product name',
            selector: row => row.productName,
            sortable: true,
        },

        {
            name: 'Decription',
            selector: row => row.decription,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        

    ];

    const [tableData, setTableData] = useState({ columns, data });
    useEffect(() => {

        const getData = async () => {

            try {
                const res = await axios.get("http://localhost:8080/api/admin/factory/findall", axiosOptions);
                console.log(res.data);
                
                setTableData({ columns, data })
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [])


    return (
        <div>
            <div className="page-header">
                <div className="page-header">
                    <Row>
                        <Col className="col">
                            <h3 className="page-title">Factory </h3>

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
