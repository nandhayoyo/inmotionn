import React from "react";
import "../ComplaintReport.css";
import Chart from "react-apexcharts";

function BarChart() {
  return (
    <React.Fragment>
      <div className="pie-slice fluid mb-3 mt-3 row">
        <div className="row">
          <div className="col-md-3">
            <Chart
              type="bar"
              width={1000}
              height={528}
              series={[
                {
                  name: "Ticket Open",
                  data: [40, 10],
                },
                {
                  name: "Ticket Closed",
                  data: [60, 50],
                },
              ]}
              options={{
                chart: {
                  stacked: true,
                },
                title: {
                  text: "Compaint by Status and Investigator",
                  style: { fontSize: 20 },
                },
                colors: ["#C767DC", "#6771DC"],

                xaxis: {
                  categories: ["Stephen", "Ratih"],
                },

                dataLabels: {
                  style: {
                    colors: ["#fff"],
                  },
                },

                yaxis: {
                  title: {
                    text: "Total Ticket",
                  },
                },
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BarChart;
