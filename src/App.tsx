import { useState, useEffect } from "react";
import "./App.css";
import TaskManager from "./task-manager";
import Auth from "./auth";
import { supabase } from "./supabase-client";

function App() {
  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    // setSession(null);
  };
  return (
    <>
      {session ? (
        <>
          <button onClick={() => logout()}>Log Out</button>
          <TaskManager />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
