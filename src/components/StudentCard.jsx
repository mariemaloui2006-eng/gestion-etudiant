
import "./StudentCard.css";
function StudentCard(props) {
  return (
    <div className="card">
      <h1>Fiche étudiant</h1>
      <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
      <p>Email: {props.email}</p>
      <p>Téléphone: {props.telephone}</p>
      <p>Filière: {props.filiere}</p>
      <p>Année: {props.anneeEtude}</p>
      <p>Groupe: {props.groupe}</p>
      <p>Ville: {props.ville}</p>
      <button className="card-btn">Contacter</button>
    </div>
  );
}

export default StudentCard;