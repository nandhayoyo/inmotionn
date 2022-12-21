import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "nama",
    text: "Nama",
  },
  {
    dataField: "alamat",
    text: "Alamat",
  },
];

const TableComponent = (props) => {
  return <BootstrapTable keyField="id" data={props.users} columns={columns} />;
};

export default TableComponent;
