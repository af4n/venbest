import React from "react";
import PersonTableRow from "./PersonTableRow/PersonTableRow"

class PersonsTable extends React.Component {
  render() {
    const rows = []
    const filterName = this.props.filterName
    const filterLastname = this.props.filterLastname
    const filterAge = this.props.filterAge
    const isMen = this.props.isMen
    const isFemale = this.props.isFemale

    this.props.data.forEach((item) => {
      if (item.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
        return
      } else if (item.lastname.toLowerCase().indexOf(filterLastname.toLowerCase()) === -1) {
        return
      } else if (item.age.toString().indexOf(filterAge) === -1) {
        return
      } else if (isMen && item.sex !== "m") {
        return
      } else if (isFemale && item.sex !== "f") {
        return
      }
      rows.push(
        <PersonTableRow item={item}
                        key={item.name}/>
      )
    })

    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Возраст</th>
          <th>Пол</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    )
  }
}

export default PersonsTable;