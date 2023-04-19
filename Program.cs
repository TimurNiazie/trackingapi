using Microsoft.EntityFrameworkCore;
using trackingapi.Models;


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddDbContext<IssueDbContext>(opt => 
//    opt.UseInMemoryDatabase("IssueDbContext"));
builder.Services.AddDbContext<IssueDbContext>(options => 
options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// builder.Services.AddDbContext<CardsDbContext>(opt => 
//     opt.UseInMemoryDatabase("CardsDbContext"));
//builder.Services.AddSwaggerGen(c =>
//{
//    c.SwaggerDoc("v1", new() {Title = "IssueDbContext", Version = "v1"});
//});
 
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "IssueDbContext v1"));;
}

app.UseDefaultFiles();
app.UseStaticFiles();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.EnsureDatabaseCreated();
app.Run();
