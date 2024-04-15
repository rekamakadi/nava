import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const ImageDataEditor = ({ image }) => {
  const { id } = useParams();
  const [editedImage, setEditedImage] = useState(image || {});
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedImage(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    fetch(`http://localhost:3000/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedImage)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(`Image with id: ${id} is saved`)
      navigate(`/${id}`);
    })
    .catch(error => {
      console.error('Error updating image data:', error);
    });
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(`Image with id: ${id} is deleted`);
      navigate('/');
    })
    .catch(error => {
      console.error('Error deleting image:', error);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    return handleUpdate();
  };

  const handleCancel = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="container">
      <h3>Szerkesztés</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formSlug">
          <Form.Label>Rövidített cím (slug)</Form.Label>
          <Form.Control
            type="text"
            name="slug"
            value={editedImage.slug || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCreationDate">
          <Form.Label>Készítés dátuma</Form.Label>
          <Form.Control
            type="date"
            name="creation_date"
            value={editedImage.creation_date || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCountry">
          <Form.Label>Ország</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={editedImage.country || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formImageText">
          <Form.Label>Képszöveg</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="image_text"
            value={editedImage.image_text || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBackgroundInfo">
          <Form.Label>Háttérinfó</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="background_info"
            value={editedImage.background_info || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhotographer">
          <Form.Label>Fotós</Form.Label>
          <Form.Control
            type="text"
            name="photographer"
            value={editedImage.photographer || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formAKRCodes">
          <Form.Label>AKR kódok</Form.Label>
          <Form.Control
            type="text"
            name="akr_codes"
            value={editedImage.akr_codes || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="danger" onClick={handleDelete} className="me-2">
          Törlés
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Mégse
        </Button>
        <Button variant="primary" type="submit">
          Mentés
        </Button>
      </Form>
    </div>
  );
};

export default ImageDataEditor;
