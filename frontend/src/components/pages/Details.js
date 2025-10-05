import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DataRow = (props) => (
  <tr>
    <td>{props.data.displayName}</td>
    <td>{props.data.age}</td>
    <td>{props.data.hours}</td>
    <td>
      <Link
      style={{marginRight:"10px"}}
        className="btn btn-primary btn-sm me-2"
        to={"/edit/" + props.data._id}
      >
        Edit
      </Link>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => props.deleteData(props.data._id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { datas: [] };
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount() {
    this.getDataList();
  }

  getDataList() {
    axios
      .get("http://localhost:5000/data/details")
      .then((response) => {
        this.setState({ datas: response.data });
      })
      .catch((err) => console.log(err));
  }

  deleteData(id) {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:5000/data/${id}`)
        .then((res) => {
          console.log(res.data);
          // Remove deleted row from state
          this.setState({
            datas: this.state.datas.filter((data) => data._id !== id),
          });
        })
        .catch((err) => console.log(err));
    }
  }

  dataList() {
    return this.state.datas.map((data, i) => (
      <DataRow data={data} deleteData={this.deleteData} key={i} />
    ));
  }

  render() {
    return (
      <div className="container mt-4">
        <h4 className="mb-3">User Details</h4>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Display Name</th>
              <th>Age</th>
              <th>Hours of Exercise</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.dataList()}</tbody>
        </table>
      </div>
    );
  }
}
