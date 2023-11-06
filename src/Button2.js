import React from 'react'

export default function Button2({count, onClick}) {


  return (
    <div>
        <button onClick={onClick}>Clicked {count} times!</button>
    </div>
  )
}
