import React from 'react'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import InfoCard from '../../../../components/CleanComponents/InfoCard/index'
import { tableData } from './data.json'

let overlappingBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]],
}

let overlappingBarOptions = {
  seriesBarDistance: 35,
}

let overlappingResponsiveOptions = [
  [
    '',
    {
      seriesBarDistance: 15,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0]
        },
      },
    },
  ],
]

let stackedBarListener = {
  draw: function(data) {
    'bar' === data.type &&
      data.element.attr({
        style: 'stroke-width: 30px',
      })
  },
}

class Dashboard extends React.Component {
  state = {
    tableData: tableData,
  }

  render() {
    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Office',
        dataIndex: 'office',
        key: 'office',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a, b) => a.salary - b.salary,
      },
    ]

    return (
      <div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <InfoCard form="stats" icon="users" btnType="success" type="success" title="25" content="Active Employees" />
            </div>
            <div className="col-md-3">
              <InfoCard form="stats" icon="calendar" type="danger" title="Mon Jan, 10" content="Next Payroll Date" />
            </div>
            <div className="col-md-3">
              <InfoCard form="stats" icon="coin-dollar" btnType="success" type="info" title="2588.36$" content="Total cash last payroll" />
            </div>
            <div className="col-md-3">
              <InfoCard form="stats" icon="office" btnType="success" type="warning" title="105" content="Total hours last payroll" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="mb-5">
            <ChartistGraph
              className="height-300"
              data={overlappingBarData}
              options={overlappingBarOptions}
              responsive-options={overlappingResponsiveOptions}
              listener={stackedBarListener}
              type="Bar"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
