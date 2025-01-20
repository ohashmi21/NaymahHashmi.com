<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import fetchData from "@/providers/ProjectsProvider.ts";
import { ProjectCategoryProvider } from "@/providers/ProjectCategoryProvider.ts";
import { RouterLink } from 'vue-router';


// Reactive state
const state = reactive({
  projects: [], // Initialize as an array
  projectsCategory: ProjectCategoryProvider.PROJECT_CATEGORIES[0]?.name.toLowerCase() || "",
  isLoading: true,
});

// Computed property for filtered projects
const filteredProjects = computed(() =>
  state.projects.filter(
    (project) => project.type.toLowerCase() === state.projectsCategory.toLowerCase()
  )
);

// Fetch data on mount
onMounted(async () => {
  try {
    state.projects = await fetchData();
    state.isLoading = false; // Set loading to false after fetching
    console.log("Fetched Projects:", state.projects);

  } catch (error) {
    console.error("Error fetching projects:", error);
  }
});
</script>


<<template>
  <div class="PageContainer">
    <!-- Navigation Bar -->
    <div class="CategoriesContainer">
      <div 
        v-for="category in ProjectCategoryProvider.PROJECT_CATEGORIES" 
        :key="category.name" 
        v-bind:style="{ color: category.color }" 
        id="categories"
      >
        <button 
          @click="state.projectsCategory = category.name.toLowerCase()" 
          v-bind:style="{ background: category.color }">
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- Centered Projects -->
    <div class="ProjectsContainer">
      <h2 v-if="state.projectsCategory">Projects in Category {{ state.projectsCategory }}</h2>
      <div v-if="state.isLoading">Loading projects...</div>
      <div v-else>
        <div v-for="project in filteredProjects" :key="project.id">
          <RouterLink :to="'/projects/' + project.id">{{ project.title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
.CategoriesContainer {
  display: inline-flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 1em;
}

#categories{
  cursor: pointer;
}
</style>