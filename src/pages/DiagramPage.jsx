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
import { useExpense } from '../contexts/ExpenseContextProvider'

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Legend)

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Legend)

const DiagramPage = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const {
    expenses,
    getExpense,
    showDiagram,
    food,
    education,
    beauty,
    healt,
    transportation,
  } = useExpense()

  useEffect(() => {
    getExpense()
  }, [])

  useEffect(() => {
    showDiagram()
  }, [expenses])

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      datasets: [
        {
          data: [food, education, healt, transportation, beauty],
          backgroundColor: [
            '#BA131A',
            '#DE565C',
            '#FF7278',
            '#FFA4A7',
            '#CE8487',
            '#8d595b',
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
                    <p className="price">{food}$</p>
                  </li>
                  <li>
                    <p className="element education">Education</p>
                    <p className="price">{education}$</p>
                  </li>
                  <li>
                    <p className="element healt">Health</p>
                    <p className="price">{healt}$</p>
                  </li>
                  <li>
                    <p className="element tranportation">Transportation</p>
                    <p className="price">{transportation}$</p>
                  </li>
                  <li>
                    <p className="element beauty">Beauty</p>
                    <p className="price"> {beauty}$</p>
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
