import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './ImageList.css';

const ImageList = ({ images }) => {
  return (
    <Accordion defaultActiveKey="0">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {images.map((image, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <div className="d-flex align-items-center p-2 rounded custom-hover">
                <img
                  src={`https://picsum.photos/id/${index}/80`}
                  alt={`Kép ${image.filename_str}`}
                  className="me-3 img-thumbnail"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-0">{image.filename_str}</h6>
                  <p className="mb-0">{image.description_str}</p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="mb-3">
                <p className="mb-0"><strong>Azonosító:</strong> {image.id}</p>
                <p className="mb-0"><strong>Méret:</strong> {`${image.ow_i}x${image.oh_i}`}</p>
                <p className="mb-0"><strong>Készítés dátuma:</strong> {image.createDate_dt}</p>
                <p className="mb-0"><strong>Módosítás dátuma:</strong> {image.harvestDate_dt}</p>
                <p className="mb-0"><strong>Formátum:</strong> {image.format_str}</p>
              </div>
              <Button href={`/${image.id}`} variant="primary">Metaadatok</Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </div>
    </Accordion>
  );
}

export default ImageList;
