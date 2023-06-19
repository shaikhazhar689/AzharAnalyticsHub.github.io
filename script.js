<!DOCTYPE html>
<html>
<head>
  <title>Data Analyst Portfolio</title>
  <style>
    /* CSS styles... */
  </style>
</head>
<body>
  <header>
    <h1>Data Analyst Portfolio</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <div class="container">
    <section id="about">
      <h2>About Me</h2>
      <p>I am a data analyst with one year of experience in Excel, PowerBI, SQL, Tableau, Python, and R language. I have worked on various portfolio projects to enhance my skills and gain practical knowledge in data analysis.</p>
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <div class="project">
        <h3>Excel Data Analysis</h3>
        <p>Description of the Excel project...</p>
      </div>
      <div class="project">
        <h3>PowerBI Dashboard</h3>
        <p>Description of the PowerBI project...</p>
      </div>
      <div class="project">
        <h3>SQL Database Querying</h3>
        <p>Description of the SQL project...</p>
      </div>
      <div class="project">
        <h3>Tableau Visualization</h3>
        <p>Description of the Tableau project...</p>
      </div>
      <div class="project">
        <h3>Python Data Analysis</h3>
        <p>Description of the Python project...</p>
      </div>
      <div class="project">
        <h3>R Data Analysis</h3>
        <p>Description of the R project...</p>
      </div>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </section>
  </div>
  
  <script>
    // JavaScript code goes here
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>
