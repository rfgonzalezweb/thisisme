import { Link, useParams } from "react-router-dom";
import profiles from "./profiles.db";

const Profile = () => {
  const { handler } = useParams();
  const profile = profiles.find((item) => item.handler === handler);

  if (!profile) return null;

  return (
    <main>
      <h2>Hello, this is my profile.</h2>
      <h3>My name is {profile.name}</h3>

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
