import './App.css'
import skylogo from './images/skylogo.png'
import skymoth from './images/moth.png'
import reactlogo from './images/react-logo.png'
import kenndevlogo from './images/kenndev-logo.png'
import netlifylogo from './images/netlify-logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={skylogo} alt="Sky Cotl logo" width={'250rem'} />

        <h1>
          <img src={skymoth} alt="Sky Moth" width={'50rem'} of />
          Skykid Help Guide
        </h1>
        <h3>Coming Soon!</h3>
      </header>
      <footer>
        <p>
          Powered: <img src={reactlogo} alt="react-logo" width={'20rem'} />
          &nbsp;ReactJS |&nbsp;
          <img src={netlifylogo} alt="Netlify logo" width={'20rem'} /> Netlify
          &nbsp;Developed:&nbsp;
          <img src={kenndevlogo} alt="kenndev-logo" width={'20rem'} />
          &nbsp;KennDev&nbsp; &copy;2023
        </p>
      </footer>
    </div>
  )
}

export default App
