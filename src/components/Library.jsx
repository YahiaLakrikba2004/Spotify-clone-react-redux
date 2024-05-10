import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Library = () => {
  const favs = useSelector(state => state.player.favs)

  useEffect(() => {
    const favoriteSongs = favs.map(favId => {})

    // Aggiorna lo stato delle canzoni nella libreria
    setSongs(favoriteSongs)
  }, [favs])

  const [songs, setSongs] = useState([])

  return (
    <div className="library mx-5 w-50">
      <h2 className="text-white">La tua libreria</h2>
      <ListGroup>
        {songs.map((song, index) => (
          <ListGroup.Item key={index}>{song}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Library
