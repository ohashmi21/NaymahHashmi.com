import axios from 'axios';
import { Project } from '@/models/Project';

export async function getProject(id: string): Promise<Project> {
    try{
    const response = await axios.get(`https://localhost:7297/api/projects/${id}`);
    return response.data
    }catch (error){
        console.error('Error Fetching Project', error);
        throw new Error('Failed to fetch project');
    }
  }


export async function updateProject(id: string, project: Project): Promise<void>{
    try{
        const response = await axios.put(`https://localhost:7297/api/projects/${id}`, project);
        return response.data
    } catch (error){
        console.error('Error updating project', error);
        throw new Error('Failed to update project');
    }
}
