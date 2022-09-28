// import { useAuth } from "../../context/context";
import { useChannelContext } from "../../hooks/UseChannelContext";
import { HeaderContext } from "../../styles/styles";

export default function Header() {
  const { user, logOut } = useChannelContext();

  return (
    <HeaderContext>
      {user && (
        <>
          <div>{user.name}</div>
          <ul>
            <li onClick={logOut}>Logout</li>
          </ul>
        </>
      )}
    </HeaderContext>
  );
}
