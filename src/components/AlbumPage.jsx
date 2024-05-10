import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumArt from "./AlbumArt";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { albumThunk } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";
import MainNav from "./MainNav";
import BottomPlayer from "./BottomPlayer";

const AlbumPage = () => {
  const albumData = useSelector((state) => state.album.album.data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const selTrack = useSelector((state) => state.player.selectedTrack);

  useEffect(() => {
    dispatch(albumThunk(id));
  }, []);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <MainNav />
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          {albumData && <AlbumArt album={albumData} />}
        </Col>

        <Col md={8} className="p-5">
          <Row>
            {albumData && (
              <Col md={10} className="mb-5" id="trackList">
                {albumData.tracks.data.map((el) => (
                  <Song key={el.id} track={el} />
                ))}
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      {selTrack && <BottomPlayer />}
    </Col>
  );
};
export default AlbumPage;
