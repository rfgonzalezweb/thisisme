import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { handler } = useParams();
  return (
    <main>
      <h2>Hello, this is my profile.</h2>
      <h3>My name is {handler}</h3>

      <Link to="/">Go back to home</Link>
    </main>
  );
};

export default Profile;
