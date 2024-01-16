import { createContext, useState } from "react"

export const TestContext = createContext()

export const TestProvider = ({ children }) => {
  const [count, setCount] = useState(10)
  // prettier-ignore
  return (
        <TestContext.Provider value={{count, setCount}}>
            {children}
        </TestContext.Provider>
    )
}
