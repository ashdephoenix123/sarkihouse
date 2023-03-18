import React, { useState } from 'react'

const Colorsavailable = ({ colors=[""], updateColor, selectedColor }) => {

  return (
    <>
      <div className="available">
        {colors.map((eachColor, index) => {
          return <button key={index} className="available__color" style={{ backgroundColor: eachColor }} onClick={()=> {updateColor(eachColor)}}>
            {selectedColor === eachColor && <>&#10003;</>}
          </button>
        })}
      </div>
    </>
  )
}

export default Colorsavailable
