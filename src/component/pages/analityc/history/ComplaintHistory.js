import React, { useEffect, useState } from "react";
import "../ComplaintReport.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";

function ComplaintHistory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("http://localhost:3300/comments").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const customTotal = (to, size) => (
    <span
      className="react-bootstrap-table-pagination-total"
      style={{ marginLeft: 10 }}
    >
      Showing {to} from {size} ticket
    </span>
  );

  const columns = [
    {
      dataField: "name",
      text: "Issue Investigator",
      sort: true,
    },
    {
      dataField: "category",
      text: "Category",
    },
    {
      dataField: "subcategory",
      text: "Sub Category",
    },
    {
      dataField: "brand",
      text: "Brand",
    },
    {
      dataField: "type",
      text: "Packaging Type",
    },
    {
      dataField: "tbc",
      text: "Average Days (TBC)",
    },
    {
      dataField: "source",
      text: "Source",
    },
    {
      dataField: "conc",
      text: "Conclusion",
    },
  ];

  const options = {
    paginationSize: 12,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "12",
        value: 12,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="pie-slice mb-5 row">
        <h5 className="mb-5 mt-">Complaint History</h5>

        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory(options)}
        />
      </div>
    </React.Fragment>
  );
}

export default ComplaintHistory;
