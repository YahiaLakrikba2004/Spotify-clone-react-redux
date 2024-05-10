import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trackMount, addFavs, delFavs } from '../redux/actions'
import { Link } from 'react-router-dom'

const Song = ({ track }) => {
  const dispatch = useDispatch()
  const favs = useSelector(state => state.player.favs)

  const addFav = () => {
    dispatch(addFavs(track.id))
  }

  const delFav = () => {
    dispatch(delFavs(track.id))
  }

  return (
    <div
      className="py-3 trackHover"
      onClick={() => dispatch(trackMount(track))}
    >
      <Link
        to={`/ArtistPage/${track.artist.id}`}
        className="card-title trackHover px-1"
        style={{
          color: 'white',
          fontSize: '15px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        {track.title} <br />
        {track.artist.name}
      </Link>

      <small className="duration" style={{ color: 'white' }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? '0' + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
        <span>
          {!favs.includes(track.id) ? (
            <i
              className="fa fa-heart-o ms-3 fs-5"
              aria-hidden="true"
              onClick={addFav}
            ></i>
          ) : (
            <i
              className="fa fa-heart ms-3 fs-5 heartIcon"
              aria-hidden="true"
              onClick={delFav}
            ></i>
          )}
        </span>
      </small>
    </div>
  )
}

export default Song
