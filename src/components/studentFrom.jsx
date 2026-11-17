import "./StudentForm.css";
import React, { useState, useEffect } from "react";

function StudentForm({ onSubmit, student }) {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    major: ""
  });

  // Remplir le formulaire en cas de modification
  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  // Récupérer les valeurs saisies
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Envoyer les données du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      age: Number(formData.age)
    });

    setFormData({
      name: "",
      age: "",
      email: "",
      major: ""
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <h2>
        {student ? "Modifier étudiant" : "Ajouter étudiant"}
      </h2>

      <div className="form-group">
        <label htmlFor="name">Nom et prénom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Âge :</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="major">Filière :</label>
        <select
          id="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="Informatique">Informatique</option>
          <option value="GLSI">GLSI</option>
          <option value="Réseaux">Réseaux</option>
          <option value="Gestion">Gestion</option>
        </select>
      </div>

      <button type="submit">
        {student ? "Modifier" : "Ajouter"}
      </button>

    </form>
  );
}

export default StudentForm;
