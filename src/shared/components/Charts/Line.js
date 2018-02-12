import React from "react";
import { VictoryGroup, VictoryLine } from "victory";

import { ChartWrapper } from "./Index";

export default class LineChart extends React.Component {
  render() {
    // const { data, title, xAxisDomain, yAxisDomain } = this.props;
    const { columns, data } = this.props;

    return (
      <div>
        <ChartWrapper
          columns={columns}
        >
          <VictoryGroup
            colorScale={[
              '#026fc9',
              '#5b9dfd',
              '#004598'
            ]}
          >
            {data.map((row, i) =>
              <VictoryLine
                data={row}
                key={i}
                interpolation="natural"
                standalone={false}
              />
            )}
          </VictoryGroup>
        </ChartWrapper>
      </div>
    );
  }
}
