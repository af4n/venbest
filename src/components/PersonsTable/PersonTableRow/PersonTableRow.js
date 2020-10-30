import React from "react"

const PersonTableRow = ({item}) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.lastname}</td>
      <td>{item.age}</td>
      <td>{item.sex}</td>
    </tr>
  )
}

export default PersonTableRow;