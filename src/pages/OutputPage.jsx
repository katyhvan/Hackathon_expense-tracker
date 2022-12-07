import React from 'react'
import InfoPage from './InfoPage'

const OutputPage = () => {
  return (
    <>
      <InfoPage />
      <div className="containerList">
        <div className="List">
          <div className="List_text">
            <div className="card_blk">
              <div className="list_txt">
                <p>Date</p>
              </div>
              <div className="list_txt">
                <p>Category</p>
              </div>
              <div className="list_txt">
                <p>Note</p>
              </div>
              <div className="list_txt">
                <p>Total</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card_blk">
              <div className="card_txt">
                <p>Dec 27, 2022</p>
              </div>
              <div className="card_txt">
                <p>Transportation</p>
              </div>
              <div className="card_txt">
                <p>Shampoo</p>
              </div>
              <div className="card_txt">
                <p>12000$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OutputPage
