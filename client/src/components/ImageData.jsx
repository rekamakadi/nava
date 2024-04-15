import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const ImageData = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  function fetchImageById() {
    fetch(`http://localhost:3000/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setImage(data))
      .catch(error => console.error("Error fetching image data:", error));
  }
  
  useEffect(() => {
    fetchImageById();
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }
  
  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12}>
          <h3>Metaadatok</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <img
            src={`https://picsum.photos/600/400`}
            alt={`Kép ${image.filename_str}`}
            className="img-fluid mb-4"
          />
        </Col>
        <Col xs={12} md={6}>
          <p><strong>Azonosító:</strong> {image.id}</p>
          <p><strong>Fájlnév:</strong> {image.filename_str}</p>
          <p><strong>Gyűjtemény:</strong> {image.coll_str}</p>
          <p><strong>Riport:</strong> {image.status_i}</p>
          <p><strong>Technikai infó:</strong> {image.pictureType_str}</p>
          <p><strong>Eredeti képszám:</strong> {image.serialinfo_str}</p>
          <p><strong>Master Format:</strong> {image.format_str}</p>
          <p><strong>MetadataSet:</strong> {image.mid_str}</p>
          <p><strong>Kiadás dátuma:</strong> {image.createDate_dt}</p>
          <p><strong>Utolsó módosítás:</strong> {image.harvestDate_dt}</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button href="/" className="btn btn-secondary me-2">Vissza</Button>
          <Button href={`/update/${image.id}`} className="btn btn-primary">
            Szerkesztés
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageData;
