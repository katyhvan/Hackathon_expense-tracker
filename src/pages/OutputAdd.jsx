import React from 'react'
import '../styles/outputAdd.css'

const OutputAdd = () => {
  return (
    <>
      <form>
        <div className="add-output">
          <h2>Add Expence </h2>
          <div className="add_inp">
            <input className="inp one" placeholder="Date" type="text" />
            <select className="inp two" name="select">
              <option style={{ display: 'none' }} value="value1" selected>
                Category
              </option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Transportation">Transportation</option>
              <option value="Beauty">Beauty</option>
            </select>
            <input className="inp three" placeholder="Amount" type="text" />
            <input className="inp four" placeholder="Note" type="text" />
          </div>
          <button className="btn_save" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  )
}

export default OutputAdd
