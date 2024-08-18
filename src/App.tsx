// Libs
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Deps
import "./App.css";
import supabase from "./supabaseClient";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabase
      .from("profiles")
      .select(`bio,handler,name`);

    console.log({ data });
    if (data) {
      setProfiles(data);
    }
  };

  return (
    <section>
      <h1>This is me! </h1>
      <h2>The Public Profiles Platform</h2>
      <h3>Wanna see somebody's profile?</h3>

      {profiles.map((profile) => (
        <Link to={`/${profile.handler}`}>{profile.name} - {profile.bio}</Link>
      ))}
    </section>
  );
};

export default App;
