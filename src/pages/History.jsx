import {React} from 'react'
import Header from '../components/Header'                                                                               
import Footer from '../components/Footer'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div>
      <Header />
    <div className="" style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <div className="mx-4 d-flex justify-content-between align-items-center ">
        <h1 className="mt-3 text-decoration-underline">HISTORY</h1>
        <Link to={'/home'} className="text-decoration-none" style={{color:'blueviolet'}}>
         <h1 className="fw-bold fs-4 px-2 py-2 rounded home-btn">BACK TO <i class="fa-solid fa-house"></i></h1>
        </Link>
        </div>
        <Table striped bordered hover responsive="md" className="mt-2 text-nowrap">
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Date</th>
          <th>- - -</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Avesham</td>
          <td><Link className="text-primary" to={"https://youtu.be/yH7eDWTH5iM?si=JcdWjv3smPn8Jscl"}>https://youtu.be/yH7eDWTH5iM?si=JcdWjv3smPn8Jscl</Link></td>
          <td>11/07/2025</td>
          <td><i class="fa-solid fa-trash text-danger"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Arm</td>
          <td><Link className="text-primary" to={"https://youtu.be/yH7eDWTH5iM?si=JcdWjv3smPn8Jscl"}>https://youtu.be/yH7eDWTH5iM?si=JcdWjv3smPn8Jscl</Link></td>
          <td>11/07/2025</td>
          <td><i class="fa-solid fa-trash text-danger"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Minnal vala</td>
          <td><Link className="text-primary" to={"https://youtu.be/yH7eDWTH5iM?si=JcdWjv3smPn8Jscl"}>https://youtu.be/yH7eDWTH5iM?si=JcdWjv3smPn8Jscl</Link></td>
          <td>11/07/2025</td>
          <td><i class="fa-solid fa-trash text-danger"></i></td>
        </tr>
      </tbody>
    </Table>
   </div>
      <Footer/>
    </div>
  )
}

export default History
