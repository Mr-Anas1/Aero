import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // Load projects from AsyncStorage when the app starts
  useEffect(() => {
    const loadProjects = async () => {
      const storedProjects = await AsyncStorage.getItem("projects");
      setProjects(storedProjects ? JSON.parse(storedProjects) : []);
    };
    loadProjects();
  }, []);

  // Function to add a new project and update context
  const addProject = async (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    await AsyncStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
