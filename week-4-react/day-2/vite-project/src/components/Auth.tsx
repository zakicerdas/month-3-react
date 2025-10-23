import React, { createContext, useContext, useMemo, useState } from "react";

type User = {
  id: number;
  username: string;
};

type AuthState = {
  user: User | null;
  token: string | null; 
};

type AuthContextValue = {
  state: AuthState;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, token: null });
  const [loading, setLoading] = useState(false);

  
  const login = async (username: string, _password: string) => {
    setLoading(true);
    try {

      const user: User = { id: Date.now(), username };
      const token = "inmemory-token-" + user.id;
   
      await new Promise((r) => setTimeout(r, 250));
      setState({ user, token });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setState({ user: null, token: null });
  };

  const value = useMemo(() => ({ state, login, logout, loading }), [state, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
