import React from 'react';
import './App.css';
import Contacts from './Contacts';
import { Users } from './users'

function App() {

  const [searchedName, setSearchedName] = React.useState("")
  const keys = ['first_name', 'last_name', 'email']
  
  const search = data => {
    return data.filter(
      item =>
        keys.some(key => item[key].toLowerCase().includes(searchedName))
    )
  }

  return (
    <main>
      <h1>Contact Search Application</h1>
      <input type="text" placeholder='Search...' onChange={e => setSearchedName(e.target.value)} />
      <Contacts data={search(Users)} />
    </main>
  );
}

export default App;
