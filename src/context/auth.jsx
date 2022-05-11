import { createContext, useEffect, useState } from 'react'

export const authContext = createContext()

export function AuthProvider ({ children }) {
  const [user, setUser] = useState({ session: false, user: '' })
  const [success, setSession] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('alkemy')) {
      setUser({ session: true, user: JSON.stringify(localStorage.getItem('alkemy')) })
    }
  }, [success])

  return (<authContext.Provider value={{ user, setSession }}>
        {children}
    </authContext.Provider>)
}
