import { useState } from "react";

function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  ville,
  image,
  onDelete,
  onEdit,
}) {
  const [showContact, setShowContact] = useState(false);

  function afficherMasquerContact() {
    setShowContact(!showContact);
  }

  return (
    <div className="student-card">

      <img src={image} alt="Student" />

      <h2>
        {prenom} {nom}
      </h2>

      <p>Filière : {filiere}</p>
      <p>Année : {anneeEtude}</p>
      <p>Groupe : {groupe}</p>
      <p>Ville : {ville}</p>

      <button onClick={afficherMasquerContact}>
        {showContact ? "Masquer les contacts" : "Afficher les contacts"}
      </button>

      {showContact && (
        <div>
          <p>Email : {email}</p>
          <p>Téléphone : {telephone}</p>
        </div>
      )}

      <button onClick={() => onEdit(email)}>
        Modifier
      </button>

      <button onClick={() => onDelete(email)}>
        Supprimer
      </button>

    </div>
  );
}

export default StudentCard;