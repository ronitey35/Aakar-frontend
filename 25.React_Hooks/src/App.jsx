import React from "react";
import { AuthProvider } from "./components/ContextHook/auth/AuthProvider";
import Memo from "./components/memoHook/memo";
import CallbackHook from "./components/callbacks/CallbackHook";

function App() {
  return (
    <AuthProvider>
      <h1>Hello</h1>
      <CallbackHook/>
    </AuthProvider>
  );
}

export default App;
