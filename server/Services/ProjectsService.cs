using server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace NaymahDBAPI.Services;

public class ProjectsService
{
    private readonly IMongoCollection<Project> _projectsCollection;

    public ProjectsService(
        IOptions<dbSettings> dbSettings)
    {
        Console.WriteLine($"ConnectionString: {dbSettings.Value.ConnectionString}");
    Console.WriteLine($"DatabaseName: {dbSettings.Value.DatabaseName}");
    Console.WriteLine($"CollectionName: {dbSettings.Value.ProjectsCollectionName}");
        var mongoClient = new MongoClient(
            dbSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            dbSettings.Value.DatabaseName);

        _projectsCollection = mongoDatabase.GetCollection<Project>(
            dbSettings.Value.ProjectsCollectionName 
        );

    }

    public async Task<List<Project>> GetAsync() =>
        await _projectsCollection.Find(_ => true).ToListAsync();

    public async Task<Project?> GetAsync(string id) =>
        await _projectsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Project newProject) =>
        await _projectsCollection.InsertOneAsync(newProject);

    public async Task UpdateAsync(string id, Project updatedProject) =>
        await _projectsCollection.ReplaceOneAsync(x => x.Id == id, updatedProject);

    public async Task RemoveAsync(string id) =>
        await _projectsCollection.DeleteOneAsync(x => x.Id == id);
}