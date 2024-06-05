import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col, Spinner } from "react-bootstrap";

const Gestion = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    NumTelephone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
        await fetchUserProfile(storedUserId);
      }
    };

    loadUserData();
  }, []);

  const fetchUserProfile = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8081/user/${id}`);
      if (res.status === 200) {
        const userData = res.data;
        setFormData({
          nom: userData.nom,
          prenom: userData.prenom,
          NumTelephone: userData.NumTelephone,
          email: userData.email,
          password: userData.password,
        });
      } else {
        console.error("Erreur:", res.statusText);
      }
    } catch (e) {
      console.error("Erreur lors de la requête HTTP:", e);
    }
    setLoading(false);
  };

  const updateUserProfile = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      try {
        const res = await axios.put(
          `http://localhost:8081/updateUser/${userId}`,
          formData,
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (res.status === 200) {
          toast.success("Profil mis à jour avec succès!");
        } else {
          console.error("Erreur:", res.statusText);
        }
      } catch (e) {
        console.error("Erreur lors de la requête HTTP:", e);
      }
      setLoading(false);
    }
  };

  const validateForm = () => {
    // Add form validation if needed
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container className="mt-5">
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center">
              <h2>Modifier le Profil</h2>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={updateUserProfile}>
                <Form.Group className="mb-3" controlId="nom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="prenom">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="NumTelephone">
                  <Form.Label>Numéro de téléphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="NumTelephone"
                    value={formData.NumTelephone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                  {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Enregistrer"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="text-center mt-3">
            <Link to="/admin/dashboard">Retour</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gestion;
