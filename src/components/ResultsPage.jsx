import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BottomPlayer from './BottomPlayer'
import MainNav from './MainNav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Song from './Song'
import '../ResultPage.css'

const ResultsPage = () => {
  const searchData = useSelector(state => state.home.searchData.data)
  const selTrack = useSelector(state => state.player.selectedTrack)

  return (
    <Col xs={12} md={9} className="offset-md-1 mainPage">
      <MainNav />
      <Col md={8} className="p-5">
        <Row>
          <Col md={10} className="mb-5" id="trackList">
            {searchData &&
              searchData.map(el => (
                <div key={el.id} className="song-wrapper">
                  {el.album && el.album.cover_medium && (
                    <div className="song-cover-wrapper d-flex justify-content-start">
                      <Link
                        to={`/artist/${el.artist.id}`}
                        className="artist-link"
                      >
                        <img
                          className="img-fluid song-cover"
                          src={el.album.cover_medium}
                          alt="Album Cover"
                        />
                      </Link>
                      <Song track={el} />

                      <Link
                        to={`/artist/${el.artist.name}`}
                        className="text-decoration-none"
                      ></Link>
                    </div>
                  )}
                </div>
              ))}
          </Col>
        </Row>
      </Col>
      {selTrack && <BottomPlayer />}
    </Col>
  )
}

export default ResultsPage
