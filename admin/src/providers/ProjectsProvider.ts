import axios from 'axios';
import { Project } from '@/models/Project';

const fetchData = async (): Promise<Project[]> => {
  const processedProjects: Project[] = []; // Initialize an empty array to be returned
  try {
    const response = await axios.get('https://localhost:7297/api/projects');

    // Process the fetched data to the project schema
    response.data.forEach((item: any) => {
      const project = new Project(
        item.id,
        item.title,
        item.type,
        item.header,
        item.description,
        item.layout
      );
      processedProjects.push(project);
    });

    console.log('Processed Projects:', processedProjects);
    return processedProjects;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
