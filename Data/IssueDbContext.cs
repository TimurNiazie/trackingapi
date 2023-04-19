using Microsoft.EntityFrameworkCore;
using trackingapi.Models;

namespace trackingapi.Models
{
    public class IssueDbContext : DbContext
    {
        public IssueDbContext(DbContextOptions<IssueDbContext> options)
            :base(options)
        {
        } 

        public DbSet<Issue> Issues { get; set; } = null!; 
    }
}
