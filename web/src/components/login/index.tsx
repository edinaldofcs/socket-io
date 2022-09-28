import { useAuth } from "../../context/context";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { GetStaticProps } from "next";

export default function Login() {
  const { user } = useAuth();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.NEXT_PUBLIC_Client_Id,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  function responseGoogle(res: any) {
    console.log(res);
  }

  function failure() {
    console.log("Deu ruim");
  }

  return (
    <GoogleLogin
      clientId={`${process.env.NEXT_PUBLIC_Client_Id}`}
      buttonText="Entrar com Google"
      onSuccess={responseGoogle}
      onFailure={failure}
    />
  );
}
