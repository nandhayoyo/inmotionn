import React from "react";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BarChart from "./byStatus/BarChart";
import Piechart from "./byPlant/PieChart";
import "./ComplaintReport.css";
import GraphChart from "./byProduct/GraphChart";
import ComplaintHistory from "./history/ComplaintHistory";

const ComplainReport = () => {
  const NavIcon = styled(Link)`
    margin-left: 10px;
    font-size: 2rem;
    height: 25px;
    width: 20px;
    display: flex;
    align-items: center;
  `;

  return (
    <React.Fragment>
      <div id="complaintreport">
        <div className="complaint container-fluid mb-3 mt-4 col">
          <NavIcon>
            <AiIcons.AiFillSignal />
          </NavIcon>
          <h5 style={{ marginLeft: 5 }}>Complaint Report.</h5>
        </div>
        <div className="complaint container-fluid mb-3 mt-3 row">
          <h4>Complaint Report</h4>
        </div>
        <div className="pie-slice flex row">
          <Piechart />
          <GraphChart />
          <BarChart />
          <ComplaintHistory />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComplainReport;
