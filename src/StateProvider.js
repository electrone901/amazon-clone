// setup data layer to track the basket & user info
import React, { createContext, useContext, useReducer } from 'react'

// creates the data layer
export const StateContext = createContext()

//  provider makes athe data layer available  to the whole  app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// use it the useContext inside of a component
export const useStateValue = () => useContext(StateContext)
