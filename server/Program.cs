using NaymahDBAPI.Services;
using server.Models;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // add frontend to cors policy
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Configure database settings
builder.Services.Configure<dbSettings>(
    builder.Configuration.GetSection("ServerDB"));

// Register ProjectsService with dependency injection
builder.Services.AddSingleton<ProjectsService>();

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Explicitly configure Kestrel to listen on HTTP and HTTPS
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5297); // HTTP
    serverOptions.ListenAnyIP(7297, listenOptions => listenOptions.UseHttps()); // HTTPS
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowSpecificOrigins");
app.MapControllers(); // Map API controllers


app.Run();