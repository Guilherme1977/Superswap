import React from "react";
import "./App.css";
import Swap from "./pages/Swap";
import NavBar from "./components/NavBar/NavBar";
import { useMoralis } from "react-moralis";
import ThemeContext from "./context/theme-context";

function App(): JSX.Element {
  const { isLight } = React.useContext(ThemeContext);
  // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // add your logic here
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated]);

  //   const login = async () => {
  //     if (!isAuthenticated) {

  //       await authenticate({signingMessage: "Log in using Moralis" })
  //         .then(function (user) {
  //           console.log("logged in user:", user);
  //           console.log(user!.get("ethAddress"));
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   }

  //   const logOut = async () => {
  //     await logout();
  //     console.log("logged out");
  //   }

  return (
    <div className={isLight ? styles.containerLight : styles.containerDark}>
      <NavBar />
      <Swap />
    </div>
  );
}

export default App;

const styles = {
  containerLight:
    "w-screen h-screen bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 overflow-hidden",
  containerDark:
    "w-screen h-screen bg-gradient-to-r from-indigo-800 via-blue-900 to-zinc-800",
};
