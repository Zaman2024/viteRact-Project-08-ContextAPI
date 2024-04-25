//**** Very Important Note***** */
//-- Another way to do this directly in the UserContect---

//---Context file name shoul be UserContext---

import React, { useState } from 'react'

const UserContext= React.createContext();

export default function UserContext({children}) {
  const [user, setUser] = useState('')

  return (

    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>

  )
}
