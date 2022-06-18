import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { GrLocation } from "react-icons/gr";

const List = ({ jobList }) => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          {jobList.length > 0 ? (
            <>
              {jobList.map((jobItem) => {
                const {
                  companyName,
                  companyLogo,
                  jobTitle,
                  seniority,
                  location,
                  _id,
                } = jobItem;

                return (
                  <div className="job-container" key={_id}>
                    <Row>
                      <Col sm={4}>
                        <Row>
                          <Col sm={12}>
                            <img
                              src={companyLogo}
                              alt={companyName}
                              className="avatar"
                            />
                            <p
                              style={{
                                fontWeight: "bold",
                                display: "inline-block",
                                marginLeft: "5px",
                              }}
                            >
                              {companyName}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={4}>
                        <p style={{ marginBottom: 0, textAlign: "center" }}>
                          {jobTitle}
                        </p>
                        <p
                          style={{
                            color: "#c5b9b5",
                            textAlign: "center",
                          }}
                        >
                          {seniority}
                        </p>
                      </Col>
                      <Col sm={4} style={{ textAlign: "center" }}>
                        <button className="refer-btn">Refer now</button>
                        <div className="location-align">
                          {location[0] && <GrLocation />}
                          <p
                            style={{
                              display: "inline-block",
                              marginLeft: "5px",
                            }}
                          >
                            {location[0]}
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} style={{ textAlign: "center" }}>
                        <button className="seemore-btn">See more...</button>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </>
          ) : (
            <h1>Fetching Data Failed.</h1>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default List;
