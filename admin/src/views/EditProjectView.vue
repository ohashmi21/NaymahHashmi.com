<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProject, updateProject } from "@/providers/ProjectProvider.ts";
import { Project } from '@/models/Project';

// Get route and router instances
const route = useRoute();
const router = useRouter();
const projectId = route.params.id as string;

// Reactive state
const state = reactive<{
  project: Partial<Project>;
  isLoading: boolean;
}>({
  project: {}, // Initialize as an empty object
  isLoading: true,
});

// Fetch the project on component mount
onMounted(async () => {
  try {
    state.project = await getProject(projectId);
  } catch (error) {
    console.error("Error fetching project:", error);
    alert("Failed to load project. Please try again later.");
  } finally {
    state.isLoading = false;
  }
});

// Save the updated project
const saveProject = async () => {
  try {
    await updateProject(projectId, state.project as Project); // Cast state.project to Project
    alert("Project updated successfully!");
    router.push('/projects'); // Redirect to the project list or desired page
  } catch (error) {
    console.error("Error updating project:", error);
    alert("Failed to update project. Please try again.");
  }
};
</script>



<template>
    <main>
      <div id="projectContainer" v-if="!state.isLoading">
        <!-- Editable Title -->
        <div>
          <label for="title">Title:</label>
          <input
            id="title"
            v-model="state.project.title"
            type="text"
            placeholder="Enter title"
          />
        </div>
  
        <!-- Editable Type -->
        <div>
        <label for="type">Type:</label>
        <select id="type" v-model="state.project.type">
            <option value="Interior">Interior</option>
            <option value="Residential">Residential</option>
            <option value="Institutional">Institutional</option>
            <option value="Commercial">Commercial</option>
            <option value="Urban">Urban</option>
        </select>
        </div>

  
        <!-- Editable Header -->
        <div>
          <label for="header">Header:</label>
          <input
            id="header"
            v-model="state.project.header"
            type="text"
            placeholder="Enter header"
          />
        </div>
  
        <!-- Editable Description -->
        <div>
          <label for="description">Description:</label>
          <textarea
            id="description"
            v-model="state.project.description"
            placeholder="Enter description"
          ></textarea>
        </div>
  
        <!-- Editable Layout -->
        <div>
          <label>Layout:</label>
          <div v-for="(component, index) in state.project.layout" :key="index">
            <input
              v-model="state.project.layout[index]"
              type="text"
              placeholder="Enter component"
            />
          </div>
        </div>
  
        <!-- Save Button -->
        <button @click="saveProject">Save Changes</button>
      </div>
  
      <!-- Loading Indicator -->
      <div v-else>
        <p>Loading project...</p>
      </div>
    </main>
</template>
  
  
<style>
main {
    display: flex; 
    justify-content: center; 
    align-items: center;
    text-align: center;
    flex-direction: column; 
    gap: 1em;
  }
  
  #projectContainer {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }
  
  input,
  textarea {
    width: 100%;
    max-width: 400px;
    padding: 0.5em;
    font-size: 1em;
  }
  
  button {
    padding: 0.75em 1.5em;
    font-size: 1em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
</style>  