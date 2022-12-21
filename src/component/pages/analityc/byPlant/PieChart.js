import React from "react";
import "../ComplaintReport.css";
import Chart from "react-apexcharts";

function PieChart() {
  return (
    <React.Fragment>
      <div className="pie-slice fluid mb-3 mt-3 row">
        <div className="row">
          <div className="col-md-3">
            <Chart
              type="pie"
              width={528}
              height={528}
              series={[19, 19, 30]}
              options={{
                title: {
                  text: "Complaint by Plant",
                  style: { fontSize: 20 },
                },
                colors: ["#6771DC", "#67B7DC", "#C767DC"],

                labels: ["Tanggerang", "Tirta Prima Indonesia", "Sanpan Agung"],
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PieChart;
