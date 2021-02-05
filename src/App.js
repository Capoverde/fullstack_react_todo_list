import './syle/App.scss'

function App () {
  const headerText = 'fullstack todo list'

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='header-text'>{headerText}</h1>
      </header>
    </div>
  )
}

export default App
