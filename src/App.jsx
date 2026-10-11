import StudentForm from "./components/studentFrom.jsx";
import "./App.css";
const student="MARIEM";
const age=20;

function App() {
  return (
    <div>
      <h1>Gestion des étudiants</h1>
      <p>Bienvenue dans notre première application.</p>
      <p>Vous avez{age} ans.</p>
      <StudentForm />
    </div>

  );
}

export default App;