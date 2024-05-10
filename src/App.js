import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import AlbumPage from './components/AlbumPage'
import ArtistPage from './components/ArtistPage'
import Library from './components/Library' // Importa il componente Library
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ResultsPage from './components/ResultsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Row>
            <Sidebar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artist-page/:id" element={<ArtistPage />} />
              <Route path="/album-page/:id" element={<AlbumPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/library" element={<Library />} />{' '}
            </Routes>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
