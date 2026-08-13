using CampusEats.Api.Services;
using CampusEats.Api.Data;
using Microsoft.EntityFrameworkCore;
using CampusEats.Api.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IMenuService, MenuService>(); // one per request

builder.Services.AddDbContext<AppDbContext>(opt =>
 opt.UseNpgsql(builder.Configuration
 .GetConnectionString("Default")));

 

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
 var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
 if (!db.MenuItems.Any())
 {
 db.MenuItems.AddRange(
 new MenuItem { Name = "Kottu Roti", Price = 750m, Category = "Mains" },
 new MenuItem { Name = "Fried Rice", Price = 850m, Category = "Mains" },
 new MenuItem { Name = "Watalappan", Price = 350m, Category = "Dessert" });
 db.SaveChanges();
 }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

