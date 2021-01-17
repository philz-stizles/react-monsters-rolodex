import React from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchValue: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(jsonData => this.setState({
        ...this.state,
        monsters: jsonData
      }))
  }

  // Non-arrorw Functions require binding "this"
  handleSearch(e) {
    console.log(e)
    console.log(e.currentTarget)
    const { value } = e.currentTarget
    this.setState({ searchValue: value }, () => console.log(this.state))
  }

  // Arrow Functions do not require binding "this"
  filterItems = (searchValue, items) => {
    const filteredItems = items.filter(i => {
      return i.name.toLowerCase().includes(searchValue.toLowerCase()) 
        || i.email.toLowerCase().includes(searchValue.toLowerCase())
    })

    return filteredItems
  }

  render() {
    const { monsters, searchValue } = this.state
    const filteredItems = this.filterItems(searchValue, monsters)

    return (
      <div className="App">
        <header className="App-header">
        </header>
  
        <main>
          <div>
            <h1>Monsters Rolodex</h1>
            <SearchBox placeholder="Search" onSearch={this.handleSearch}/>
          </div>
          <CardList items={filteredItems}/>
        </main>
  
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
