import React from "react";
import { Accordion, Button, Table } from "react-bootstrap";
import './ImageList.css';

const ImageList = ({ images }) => {
  return (
    <>
        {/* Mobile-tablet view */}
        
        <Accordion defaultActiveKey="0" className="d-lg-none">
          {images.map((image, index) => (
            <Accordion.Item eventKey={image.id} key={image.id}>
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
        </Accordion>

        {/* Web view */}
        <Table striped bordered hover responsive className="d-none d-lg-table">
          <thead>
          <tr>
              <th>Kép</th>
              <th>Cím</th>
              <th>Leírás</th>
              <th>Azonosító</th>
              <th>Méret</th>
              <th>Készítés dátuma</th>
              <th>Módosítás dátuma</th>
              <th>Formátum</th>
              <th>Metaadatok</th>
          </tr>
          </thead>
          <tbody>
          {images.map((image, index) => (
              <tr key={image.id}>
                  <td>
                      <div className="d-flex align-items-center p-2 rounded custom-hover">
                          <img
                              src={`https://picsum.photos/id/${index}/80`}
                              alt={`Kép ${image.filename_str}`}
                              className="img-thumbnail"
                          />
                      </div>
                  </td>
                  <td>{image.filename_str}</td>
                  <td>{image.description_str}</td>
                  <td>{image.id}</td>
                  <td>{`${image.ow_i}x${image.oh_i}`}</td>
                  <td>{image.createDate_dt}</td>
                  <td>{image.harvestDate_dt}</td>
                  <td>{image.format_str}</td>
                  <td><Button href={`/${image.id}`} variant="primary">Metaadatok</Button></td>
              </tr>
          ))}
          </tbody>
        </Table>
      </>
  );
}

export default ImageList;
