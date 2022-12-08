import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Legend,
} from 'chart.js'

import '../styles/DiagramPage.css'
import InfoPage from './InfoPage'
import '../styles/DiagramPage.css'

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Legend)

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Legend)

const DiagramPage = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      datasets: [
        {
          data: [10, 10, 10, 10, 10, 10],
          backgroundColor: [
            '#BA131A',
            '#DE565C',
            '#FF7278',
            '#FFA4A7',
            '#CE8487',
            'rgba(141, 89, 91, 1)',
          ],
        },
      ],
    })
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    })
  }, [])

  return (
    <>
      <InfoPage />
      <div className="diagram-page">
        <div className="diagram-container">
          <div className="diagram__parent-block">
            <div className="diagram__child-block">
              <div className="chart-block">
                <Pie
                  className="chart"
                  options={chartOptions}
                  data={chartData}
                />
                <div className="chart-white-block"></div>
              </div>
              <div className="diagram-info-block">
                <h3 className="diagram-info-title">Graph of Expenses</h3>
                <ul>
                  <li>
                    <p className="element food">Food</p>
                    <p className="price">12$</p>
                  </li>
                  <li>
                    <p className="element education">Education</p>
                    <p className="price">15.67$</p>
                  </li>
                  <li>
                    <p className="element healt">Healt</p>
                    <p className="price">43.98$</p>
                  </li>
                  <li>
                    <p className="element tranportation">Tranportation</p>
                    <p className="price">3$</p>
                  </li>
                  <li>
                    <p className="element beauty">Beauty</p>
                    <p className="price"> 98$</p>
                  </li>
                  <li>
                    <p className="element food2">Food</p>
                    <p className="price">12000$</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiagramPage
