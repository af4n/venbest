import React from "react"

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleFilterNameChange = this.handleFilterNameChange.bind(this)
    this.handleFilterLastnameChange = this.handleFilterLastnameChange.bind(this)
    this.handleFilterAgeChange = this.handleFilterAgeChange.bind(this)
    this.handleIsMenChange = this.handleIsMenChange.bind(this)
    this.handleIsFemaleChange = this.handleIsFemaleChange.bind(this)
  }

  handleFilterNameChange(e) {
    this.props.onFilterNameChange(e.target.value)
  }

  handleFilterLastnameChange(e) {
    this.props.onFilterLastnameChange(e.target.value)
  }

  handleFilterAgeChange(e) {
    this.props.onFilterAgeChange(e.target.value)
  }

  handleIsMenChange(e) {
    this.props.onIsMenChange(e.target.checked)
  }

  handleIsFemaleChange(e) {
    this.props.onIsFemaleChange(e.target.checked)
  }

  render() {
    return (
      <div>
        <div className="md-form  mb-4">
          <div className="d-flex mb-1">
            <div className="col-2">Имя:</div>
            <input className="form-control col-10"
                   type="text"
                   placeholder="Имя"
                   value={this.props.filterName}
                   onChange={this.handleFilterNameChange}/>
          </div>
          <div className="d-flex mb-1">
            <div className="col-2">Фамилия:</div>
            <input className="form-control col-10"
                   type="text"
                   placeholder="Фамилия"
                   value={this.props.filterLastname}
                   onChange={this.handleFilterLastnameChange}/>
          </div>
          <div className="d-flex mb-1">
            <div className="col-2">Возраст:</div>
            <input className="form-control col-10"
                   type="text"
                   placeholder="Возраст"
                   value={this.props.filterAge}
                   onChange={this.handleFilterAgeChange}/>

          </div>
          <div className="d-flex">
            <div className="col-2">Пол:</div>
            <div className="custom-control custom-checkbox col-2">
              <input type="checkbox"
                     className="custom-control-input"
                     id="defaultUnchecked-men"
                     checked={this.props.isMen}
                     onChange={this.handleIsMenChange}/>
              <label className="custom-control-label" htmlFor="defaultUnchecked-men">Мужской</label>
            </div>
            <div className="custom-control custom-checkbox col-2">
              <input type="checkbox"
                     className="custom-control-input"
                     id="defaultUnchecked-female"
                     checked={this.props.isFemale}
                     onChange={this.handleIsFemaleChange}/>
              <label className="custom-control-label" htmlFor="defaultUnchecked-female">Женский</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;