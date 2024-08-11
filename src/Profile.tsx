import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } = import.meta.env;

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

const Profile = () => {
  const { handler } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabase
      .from("profiles")
      .select(`bio,handler,name, links ( name, url)`)
      .eq("handler", handler);
    console.log({ data });
    if (data && data[0]) {
      setProfile(data[0]);
    }
  };

  if (!profile) return null;

  return (
    <main>
      <h2>Hello, this is my profile.</h2>
      <h3>My name is {profile.name}</h3>
      <h4>{profile.bio}</h4>

      {profile.links.length > 0 && (
        <ul>
          {profile.links.map((link) => (
            <li key={link.name}>
              <a target="_blank" href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <Link to="/">Go back to home</Link>
    </main>
  );
};

export default Profile;
