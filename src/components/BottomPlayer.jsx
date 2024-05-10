import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux'
import '../BottomPlayer.css'

const BottomPlayer = () => {
  const track = useSelector(state => state.player.selectedTrack)
  return (
    <Container fluid className="fixed-bottom bg-container">
      <Row className="playRow">
        <div className="text-light playInfo d-inline-block text-truncate">
          {track && (
            <div className="mb-5 d-inline-block">
              <div className="d-flex">
                <div
                  style={{
                    backgroundImage: `url(${track.album.cover_medium})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '50px',
                    height: '50px',
                    borderRadius: '5px',
                    marginTop: '15px',
                  }}
                ></div>

                <div className="card-body ms-4 d-inline-block my-3 ">
                  <h5 className="card-title text-light ">{track.title}</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {track.artist.name}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <Col className="w-100">
          <div className="d-flex align-items-center flex-column  playBox w-100">
            <Col
              xs={6}
              md={4}
              lg={2}
              className="playerControls mt-1 w-50 d-flex justify-content-around"
            >
              <a href="#">
                <img src="../playerbuttons/Shuffle.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="../playerbuttons/Previous.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="../playerbuttons/Play.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="../playerbuttons/Next.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="../playerbuttons/Repeat.png" alt="shuffle" />
              </a>
            </Col>

            <Col className="d-flex align-items-center justify-content-center playBar py-1 w-100">
              <span className="text-light trackNow">0:00</span>
              <div className="progress-bg">
                <div className="progress-bar"></div>
              </div>
              {track && (
                <span className="text-light duration">
                  {Math.floor(parseInt(track.duration) / 60)}:
                  {parseInt(track.duration) % 60 < 10
                    ? '0' + (parseInt(track.duration) % 60)
                    : parseInt(track.duration) % 60}
                </span>
              )}
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default BottomPlayer
