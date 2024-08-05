import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <section>
      <h1>This is me! </h1>
      <h2>The Public Profiles Platform</h2>
      <h3>Wanna see somebody's profile?</h3>
      <Link to="/lolero">Lolero</Link>
    </section>
  );
}

export default App;
