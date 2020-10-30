import React from "react"
import Loading from "./components/Loading/Loading";
import PersonsTable from "./components/PersonsTable/PersonsTable";
import Search from "./components/Search/Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      filterName: "",
      filterLastname: "",
      filterAge: "",
      isMen: false,
      isFemale: false
    }

    this.handleFilterNameChange = this.handleFilterNameChange.bind(this)
    this.handleFilterLastnameChange = this.handleFilterLastnameChange.bind(this)
    this.handleFilterAgeChange = this.handleFilterAgeChange.bind(this)
    this.handleIsMenChange = this.handleIsMenChange.bind(this)
    this.handleIsFemaleChange = this.handleIsFemaleChange.bind(this)
  }

  handleFilterNameChange(filterName) {
    this.setState({
      filterName
    })
  }

  handleFilterLastnameChange(filterLastname) {
    this.setState({
      filterLastname
    })
  }

  handleFilterAgeChange(filterAge) {
    this.setState({
      filterAge
    })
  }

  handleIsMenChange(isMen) {
    this.setState({
      isMen
    })
  }

  handleIsFemaleChange(isFemale) {
    this.setState({
      isFemale
    })
  }

  async componentDidMount() {
    const response = await fetch(`https://venbest-test.herokuapp.com/`)
    const data = await response.json()

    this.setState({
      isLoading: false,
      data
    })
  }

  render() {
    return (
      <div className="container mt-4">
        <Search filterName={this.state.filterName}
                filterLastname={this.state.filterLastname}
                filterAge={this.state.filterAge}
                isMen={this.state.isMen}
                isFemale={this.state.isFemale}
                onFilterNameChange={this.handleFilterNameChange}
                onFilterLastnameChange={this.handleFilterLastnameChange}
                onFilterAgeChange={this.handleFilterAgeChange}
                onIsMenChange={this.handleIsMenChange}
                onIsFemaleChange={this.handleIsFemaleChange}/>
        {
          this.state.isLoading
            ? <Loading/>
            : <PersonsTable data={this.state.data}
                            filterName={this.state.filterName}
                            filterLastname={this.state.filterLastname}
                            filterAge={this.state.filterAge}
                            isMen={this.state.isMen}
                            isFemale={this.state.isFemale}/>

        }
      </div>
    );
  }
}

export default App;
