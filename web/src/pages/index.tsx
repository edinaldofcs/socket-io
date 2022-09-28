import type { NextPage } from "next";
import Chat from "../components/chat";
import Footer from "../components/footer";
import Header from "../components/header";
import { useChannelContext } from "../hooks/UseChannelContext";
import { MainContext } from "../styles/styles";


const Home: NextPage = () => {
  const { login, user } = useChannelContext()

  function entrarComGoogle() {
    login("edinaldo", "edinaldofcs@gmail.com");
  }

  return (
    <>
      <Header />
      <MainContext>
        {!user ? (
          <div className="login">
            <h2>Chat</h2>
            {/* <Login/> */}
            <button onClick={entrarComGoogle}>Entrar com Google</button>
          </div>
        ) : (
          <Chat/>
        )}
      </MainContext>
      <Footer />
    </>
  );
};

export default Home;
