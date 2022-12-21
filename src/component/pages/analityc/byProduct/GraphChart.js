import React from "react";
import "../ComplaintReport.css";
import Chart from "react-apexcharts";

function GraphChart() {
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
                  name: "Total Ticket",
                  data: [6612, 4545, 4544, 8787, 1241, 4544],
                },
              ]}
              options={{
                title: {
                  text: "Complaint by Product",
                  style: { fontSize: 20 },
                },
                colors: ["#67B7DC"],

                xaxis: {
                  categories: [
                    "Bintang 0.0%",
                    "Bintang Crystal",
                    "Bintang Pilsener",
                    "Bintang Raddler",
                    "Green Sands",
                    "Heineken",
                  ],
                },

                dataLabels: {
                  style: {
                    colors: ["#67B7DC"],
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

export default GraphChart;
