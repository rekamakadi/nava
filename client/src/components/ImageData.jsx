import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const ImageData = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  function fetchImageById() {
    fetch(`http://localhost:5000/${id}`)
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Metaadatok</h3>
          <img
            src={`https://picsum.photos/600/400`}
            alt={`Kép ${image.filename_str}`}
            className="img-fluid"
          />
          <p>{`Azonosító: ${image.id}`}</p>
          <p>{`Fájlnév: ${image.filename_str}`}</p>
          <p>{`Gyűjtemény: ${image.coll_str}`}</p>
          <p>{`Riport: ${image.status_i}`}</p>
          <p>{`Technikai infó: ${image.technical_info}`}</p>
          <p>{`Eredeti képszám: ${image.serialinfo_str}`}</p>
          <p>{`Master Format: ${image.format_str}`}</p>
          <p>{`MetadataSet: ${image.mid_str}`}</p>
          <p>{`Kiadás dátuma: ${image.createDate_dt}`}</p>
          <p>{`Utolsó módosítás: ${image.harvestDate_dt}`}</p>
          <Button href="/" className="btn btn-secondary me-2">Vissza</Button>
          <Button href={`/update/${image.id}`} className="btn btn-primary">
            Szerkesztés
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ImageData;
