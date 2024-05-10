const AlbumArt = ({ album }) => {
  return (
    <div>
      <img src={album.cover_big} className="card-img img-fluid" alt="Album" />
      <div className="mt-4 text-center">
        <p className="album-title">{album.title}</p>
      </div>
      <div className="text-center">
        <p className="artist-name">{album.artist.name}</p>
      </div>
      <div className="mt-4 text-center">
        <button id="btnPlay" className="btn btn-success" type="button">
          Play
        </button>
      </div>
    </div>
  );
};
export default AlbumArt;
