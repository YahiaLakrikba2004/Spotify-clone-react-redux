import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rockThunk, popThunk, hiphopThunk } from "../redux/actions";
import AlbumCard from "./AlbumCard";
import MainNav from "./MainNav";
import BottomPlayer from "./BottomPlayer";

const HomePage = () => {
  const selTrack = useSelector((state) => state.player.selectedTrack);
  const [rockRandomArtists, setRockRandomArtists] = useState([]);
  const [popRandomArtists, setPopRandomArtists] = useState([]);
  const [hiphopRandomArtists, setHiphopRandomArtists] = useState([]);
  const dispatch = useDispatch();
  const rockArtists = useSelector((state) => state.home.selections.rockArtists);
  const popArtists = useSelector((state) => state.home.selections.popArtists);
  const hiphopArtists = useSelector(
    (state) => state.home.selections.hiphopArtists
  );
  const rockData = useSelector((state) => state.home.selectionsData.rockData);
  const popData = useSelector((state) => state.home.selectionsData.popData);
  const hiphopData = useSelector(
    (state) => state.home.selectionsData.hiphopData
  );

  // Serie di fetch via redux action
  // Picka random 4 artist, se già pickati re-itera il comando (evita cloni), per ognuno fetcha

  useEffect(() => {
    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }
    rockRandomArtists.forEach((el) => dispatch(rockThunk(el)));
  }, []);
  useEffect(() => {
    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    popRandomArtists.forEach((el) => dispatch(popThunk(el)));
  }, []);
  useEffect(() => {
    while (hiphopRandomArtists.length < 4) {
      let artist =
        hiphopArtists[Math.floor(Math.random() * hiphopArtists.length)];
      if (!hiphopRandomArtists.includes(artist)) {
        hiphopRandomArtists.push(artist);
      }
    }
    hiphopRandomArtists.forEach((el) => dispatch(hiphopThunk(el)));
  }, []);

  const rockPick = rockData[0];
  const rockPick1 = rockData[1];
  const rockPick2 = rockData[2];
  const rockPick3 = rockData[3];
  const popPick = popData[0];
  const popPick1 = popData[1]; // strano workaround, se non così non funziona...
  const popPick2 = popData[2]; // Da automatizzare il tutto (array -> map)
  const popPick3 = popData[3];
  const hiphopPick = hiphopData[0];
  const hiphopPick1 = hiphopData[1];
  const hiphopPick2 = hiphopData[2];
  const hiphopPick3 = hiphopData[3];

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <MainNav />
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-4"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-4 mx-1" 
              id="rockSection"
            >
              {rockData.length > 0 && <AlbumCard songInfo={rockPick[0]} />}
              {rockData.length > 1 && <AlbumCard songInfo={rockPick1[0]} />}
              {rockData.length > 2 && <AlbumCard songInfo={rockPick2[0]} />}
              {rockData.length > 3 && <AlbumCard songInfo={rockPick3[0]} />}
              
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 mx-1"
              id="popSection"
            >
              {popData.length > 0 && <AlbumCard songInfo={popPick[0]} />}
              {popData.length > 1 && <AlbumCard songInfo={popPick1[0]} />}
              {popData.length > 2 && <AlbumCard songInfo={popPick2[0]} />}
              {popData.length > 3 && <AlbumCard songInfo={popPick3[0]} />}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 mx-1"
              id="hipHopSection"
            >
              {hiphopData.length > 0 && <AlbumCard songInfo={hiphopPick[0]} />}
              {hiphopData.length > 1 && <AlbumCard songInfo={hiphopPick1[0]} />}
              {hiphopData.length > 2 && <AlbumCard songInfo={hiphopPick2[0]} />}
              {hiphopData.length > 3 && <AlbumCard songInfo={hiphopPick3[0]} />}
            </div>
          </div>
        </Col>
      </Row>
      {selTrack && <BottomPlayer />}
    </div>
  );
};
export default HomePage;
