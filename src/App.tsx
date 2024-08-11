// Libs
import { Link } from "react-router-dom";

// Deps
import "./App.css";
import profiles from "./profiles.db";

const App = () => {
  const firstProfile = profiles[0];

  return (
    <section>
      <h1>This is me! </h1>
      <h2>The Public Profiles Platform</h2>
      <h3>Wanna see somebody's profile?</h3>

      <Link to={`/${firstProfile.handler}`}>{firstProfile.name}</Link>
    </section>
  );
};

export default App;
