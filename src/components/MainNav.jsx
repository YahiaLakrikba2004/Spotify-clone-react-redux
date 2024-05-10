import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainNav = () => {
  return (
    <Row>
      <Col xs={9} lg={11}>
        <div className="mainLinks d-none d-md-flex">
          <a className="text-decoration-none" href="#">
            TRENDING
          </a>
          <a className="text-decoration-none" href="#">
            PODCAST
          </a>
          <a className="text-decoration-none" href="#">
            MOODS AND GENRES
          </a>
          <a className="text-decoration-none" href="#">
            NEW RELEASES
          </a>
          <a className="text-decoration-none" href="#">
            DISCOVER
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default MainNav;
