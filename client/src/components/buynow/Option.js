import React from 'react'

const Option = () => {
  return (
    <div className='addremoveitem'>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p className='forremovemedia' style={{cursor:"pointer"}}>Delete</p>
      <p className='forremovemedia' style={{cursor:"pointer"}}>Move to Wishlist</p>
    </div>
  )
}

export default Option
