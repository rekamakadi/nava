import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const ImageList = ({ images }) => {
  return (
    <Accordion defaultActiveKey="0">
      {images.map((image, index) => (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>
          <img
            src={`https://picsum.photos/id/${index}/200/300`}
            alt={`Kép ${image.filename_str}`}
            style={{ marginRight: '10px', width: '50px', height: 'auto' }}
          />
          {`${image.filename_str} - ${image.description_str}`}
        </Accordion.Header>
        <Accordion.Body>
          <p>{`Azonosító: ${image.id}`}</p>
          <p>{`Méret: ${image.ow_i}x${image.oh_i}`}</p>
          <p>{`Készítés dátuma: ${image.createDate_dt}`}</p>
          <p>{`Módosítás dátuma: ${image.harvestDate_dt}`}</p>
          <p>{`Formátum: ${image.format_str}`}</p>
          <Button href={`/${image.id}`}>Metaadatok</Button>
        </Accordion.Body>
      </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default ImageList;