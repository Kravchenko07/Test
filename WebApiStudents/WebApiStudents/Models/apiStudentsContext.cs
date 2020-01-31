using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApiStudents.Models
{
    public partial class apiStudentsContext : DbContext
    {
        public apiStudentsContext()
        {
        }

        public apiStudentsContext(DbContextOptions<apiStudentsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Student> Student { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("DataSource=C:\\Users\\duran.robert\\Downloads\\sample.db3 ");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasIndex(e => e.Username)
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.Career)
                    .IsRequired()
                    .HasColumnType("VARCHAR(50)");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnType("VARCHAR(20)");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnType("VARCHAR(20)");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnType("VARCHAR(20)");
            });
        }
    }
}
