using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models;

public class Project{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id {get; set; }

    public string title {get; set; } = null!;


    public string type {get; set; } = null!;


    public string header {get; set; } = null!;


    public string description {get; set; } = null!;

    public List<Components> Layout {get; set; } = new();

}

public class Components{
    
}