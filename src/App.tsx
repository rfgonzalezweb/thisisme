// Libs
import { Link } from "react-router-dom";

// Deps
import "./App.css";
import profiles from "./profiles.db";

import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
const { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } = import.meta.env;

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

const App = () => {
  const firstProfile = profiles[0];

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("profiles").select();
    console.log({ data });
  }

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
