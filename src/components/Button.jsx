import React from 'react'

const button = ({ color, bgColor, text, borderRadius }) => {
  return (
    <button 
    type="button"
    style={{ backgroundColor: bgColor, color: color, 
    borderRadius }}
    className={`text-$(size) p-3
    hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default button
