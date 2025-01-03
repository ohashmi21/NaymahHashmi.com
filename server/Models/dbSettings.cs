namespace server.Models;

public class dbSettings
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
    public string ProjectsCollectionName { get; set; } = null!; // Match appsettings.json
}
