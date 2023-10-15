import React from 'react'
import { Container,Row, Col, Table } from 'react-bootstrap'
import Classes from './admin.module.scss'

const AdminData = ({data}) => {
  return (
    <>
    <Container className={Classes.tableContainer}>
        <Row>
            <Col className={Classes.heading}>Customer Data</Col>
        </Row>
    </Container>
        <Table responsive striped bordered hover variant="dark" className={Classes.table}>
            <thead className={Classes.header}>
                <tr clssName={Classes.headerRow}>
                    <th>SR. NO.</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Page</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody className={Classes.body}>
                {data?.map((data,index)=>(
                    <tr key={data?._id??`tabledata-${index}`} className={Classes.bodyRow}>
                        <td>{index+1}</td>
                        <td>{data?.name}</td>
                        <td>{data?.mobile}</td>
                        <td>{data?.page}</td>
                        <td>{data?.date}</td>
                    </tr>)
                )}
            </tbody>
        </Table>
        </>
  )
}

export default AdminData