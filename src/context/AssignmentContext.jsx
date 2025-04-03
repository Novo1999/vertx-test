import { createContext, useContext, useState } from "react";

const AssignmentContext = createContext(null);

export const AssignmentProvider = ({ children }) => {
  const [assignment, setAssignment] = useState(0);

  const toggleAssignment = () => {
    setAssignment(Math.max(0, 1 - assignment))
  }

  return (
    <AssignmentContext.Provider value={{ assignment, toggleAssignment }}>
      {children}
    </AssignmentContext.Provider>
  );
};

export const useAssignment = () => useContext(AssignmentContext);
