import StudentForm from "./components/studentFrom.jsx";
import StudentCard from "./components/StudentCard.jsx";
import "./App.css";
import studentImage from "./assets/student.png";
const etudiants=[
  {prenom:"slim",
  nom:"Boubaker",
  email:"slimboubaker@gmail.com",
  telphone:"+216 99 999 999",
  filiere:"Génie logiciel et systeme d'information",
  aneeEtude:"2eme annee",
  groupe:"GLSI 2",
ville:"Mahdia",
image:studentImage,},
{ prenom:"sarra",
  nom:"trabelsi",
  email:"sarra.trabelsi@gmail.com",
  telephone:"+216 22 345 678",
  filiere:"Génie Logiciel et Systèmes d'Information",
   anneeEtude:"2ème année",
  groupe:"GLSI 1",
  ville: "Sousse",
  image: studentImage,
  },
  {
   prenom: "Mariem",
  nom: "Khalfallah",
  email: "mariem.khalfallah@gmail.com",
  telephone: "+216 27 567 890",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneeEtude: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
  image: studentImage,
  }];

function App() {
  return (
    <div className="container">
      {etudiants.map((etudiant)=> (
      <StudentCard 
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
        />
  ))}
    </div>
  );
}
export default App;