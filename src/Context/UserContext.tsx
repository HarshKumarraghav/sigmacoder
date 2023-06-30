import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: any) => {
  const [authData, setAuthData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  /**
   * The function `loadData` checks if the user is logged in and retrieves the access token from local
   * storage, then sets the authentication data and updates the loading state accordingly.
   */
  const loadData = () => {
    try {
      const value = localStorage.getItem("isLoggedIn");
      const access_token = localStorage.getItem("access_token");
      if (value === "true" && access_token) {
        setAuthData({ access_token: access_token, isLoggedIn: value });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  /**
   * The signOut function removes the "isLoggedIn" and "access_token" items from localStorage and sets
   * the authData state to null.
   */
  const signOut = () => {
    try {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("access_token");
      setAuthData(null);
    } catch (error) {
      console.log(error);
    }
  };
  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
used to call the `loadData` function when the component is mounted (i.e., when it is first
rendered). */
  useEffect(() => {
    loadData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
/**
 * The useAuth function returns the authentication context.
 * @returns The `useAuth` function returns the `context` object obtained from the `useContext` hook.
 */
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, AuthContext, useAuth };
