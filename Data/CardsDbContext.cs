using Microsoft.EntityFrameworkCore;

namespace trackingapi.Models
{
    public class CardsDbContext : DbContext
    {
        public CardsDbContext(DbContextOptions<IssueDbContext> options)
            :base(options)
        {
        } 

        public DbSet<Cards> Cards { get; set; } = null!; 
    }
}