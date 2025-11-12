// components/Courses/coursesData.ts

export const coursesData = {
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence & Machine Learning",
    subtitle:
      "Master the art of building intelligent systems — from Python and Data Analysis to Deep Learning, NLP, and Generative AI. Get hands-on experience with real-world AI applications powered by TensorFlow, PyTorch, and Hugging Face.",
    image: "/assets/courses/ai.png",
    rating: 4.9,
    students: 12873,
    difficulty: "Intermediate",
    durationWeeks: 12,
    price: 19999,
    currency: "INR",
    seatsLeft: 73,
    enrollCta: "Enroll Now",
    overview: `This comprehensive Artificial Intelligence & Machine Learning program is designed to transform you into a skilled AI practitioner.
You’ll start by building a strong foundation in Python, data analysis, and mathematics for ML — the building blocks of intelligent systems.
Then, you’ll move into machine learning algorithms, model training, and evaluation.
The course also dives deep into deep learning with TensorFlow and PyTorch, enabling you to build and optimize neural networks for vision and language tasks.
You’ll also explore NLP using Hugging Face Transformers, and finish with cutting-edge topics like Generative AI, LLMs, RAG, and Agentic AI.
Every module includes hands-on labs, capstone projects, and real-world AI problem-solving experience.`,
    highlights: [
      "Live Projects & Capstones",
      "Certificate of Completion",
      "24/7 Mentor Support",
      "Downloadable Resources + Notebooks",
    ],
    sidebarHighlights: [
      "Flexible deadlines",
      "Peer Code Reviews",
      "Career Guidance",
    ],
    modules: [
      {
        title: "Module 1: Python for AI & Data Science",
        duration: "2 weeks",
        summary: "Python basics, NumPy, Pandas, EDA and Jupyter workflows",
        lessons: [
          "Python fundamentals and syntax",
          "Data structures, loops, and functions",
          "Working with NumPy and Pandas",
          "Exploratory data analysis with Jupyter Notebook",
        ],
      },
      {
        title: "Module 2: Data Analysis & Visualization",
        duration: "1.5 weeks",
        summary: "Data cleaning, visualization and feature engineering",
        lessons: [
          "Data cleaning and preprocessing",
          "Visualization with Matplotlib and Seaborn",
          "Feature engineering and scaling",
          "Understanding real-world datasets",
        ],
      },
      {
        title: "Module 3: Mathematics for Machine Learning",
        duration: "1.5 weeks",
        summary:
          "Linear algebra, calculus basics for gradients and optimization",
        lessons: [
          "Linear algebra and matrix operations",
          "Calculus and gradient descent intuition",
          "Probability and statistics for ML",
          "Optimization fundamentals",
        ],
      },
      {
        title: "Module 4: Machine Learning Fundamentals",
        duration: "2 weeks",
        summary: "Classic ML algorithms and evaluation",
        lessons: [
          "Supervised vs Unsupervised Learning",
          "Regression, Classification, and Clustering",
          "Model evaluation and cross-validation",
          "Decision Trees, Random Forests, and Ensemble methods",
        ],
      },
      {
        title: "Module 5: Deep Learning with PyTorch & TensorFlow",
        duration: "2.5 weeks",
        summary: "Neural networks, CNNs, training & optimization",
        lessons: [
          "Introduction to Neural Networks",
          "Building deep models using PyTorch",
          "TensorFlow workflows and model optimization",
          "Convolutional Neural Networks (CNNs) and Image Classification",
        ],
      },
      {
        title: "Module 6: NLP with Hugging Face",
        duration: "1.5 weeks",
        summary: "Transformers, embeddings, fine-tuning",
        lessons: [
          "Text preprocessing and embeddings",
          "Transformers and Attention Mechanism",
          "Fine-tuning BERT and GPT models",
          "Sentiment Analysis and Chatbot Projects",
        ],
      },
      {
        title: "Module 7: Generative AI, LLMs, RAG & Agentic AI",
        duration: "1 week",
        summary: "Large models, RAG pipelines and autonomous agents",
        lessons: [
          "Understanding Generative Models and Diffusion Models",
          "Building and fine-tuning Large Language Models",
          "Retrieval-Augmented Generation (RAG) with LangChain",
          "Introduction to Agentic AI and building autonomous agents",
        ],
      },
      {
        title: "Capstone Projects & AI Applications",
        duration: "1.5 weeks",
        summary: "4 real-world capstones to showcase in your portfolio",
        lessons: [
          "Project 1: Predictive Analytics for Business Decisions",
          "Project 2: Image Classification using CNNs",
          "Project 3: Building a Chatbot with Hugging Face",
          "Project 4: LLM-based RAG pipeline with Agentic AI",
        ],
      },
    ],
    faq: [
      {
        q: "Is this course suitable for beginners?",
        a: "Absolutely! The course starts with Python basics and gradually progresses into advanced AI and ML topics. It’s structured for both beginners and intermediate learners.",
      },
      {
        q: "Do I need prior coding experience?",
        a: "Some basic understanding of programming is helpful but not mandatory. Python fundamentals are covered in the first module.",
      },
      {
        q: "Are there practical projects included?",
        a: "Yes, every module includes mini-projects, and you’ll complete 4 end-to-end capstone projects to apply what you’ve learned.",
      },
      {
        q: "Will I get access to model deployment lessons?",
        a: "Yes, the course includes real-world deployment using Flask and FastAPI for ML and AI models.",
      },
      {
        q: "Is this course aligned with current industry trends?",
        a: "Definitely! You’ll work with modern AI frameworks like TensorFlow, PyTorch, and Hugging Face, and explore Generative AI, LLMs, RAG, and Agentic AI applications.",
      },
    ],
  },

  // ... other courses (apply same new fields)

  // =============================
  // 2️⃣ Data Analysis
  // =============================
  "data-analysis": {
    slug: "data-analysis",
    title: "Data Analysis & Business Intelligence",
    subtitle:
      "Unlock the power of data. Learn how to analyze, visualize, and communicate insights using Python, Power BI, and Excel.",
    image: "/assets/courses/d_Analysis.jpg",
    rating: 4.8,
    students: 9742,
    difficulty: "Beginner to Intermediate",
    durationWeeks: 10,
    price: 14999,
    currency: "INR",
    seatsLeft: 61,
    enrollCta: "Join the Program",
    overview: `This course equips you with the analytical mindset and technical tools to transform raw data into actionable insights.
You’ll master Excel, Power BI, and Python for data analysis, learn how to clean and visualize data effectively, and create professional dashboards for decision-making.
The program is ideal for aspiring data analysts, business intelligence professionals, and managers who want to make data-driven decisions.`,
    highlights: [
      "Hands-on with Power BI and Python",
      "Excel automation & dashboards",
      "Certificate upon completion",
      "Real-world datasets & case studies",
    ],
    sidebarHighlights: [
      "Career-ready BI Projects",
      "Mentor Support 24/7",
      "Flexible Schedule",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Data Analytics",
        duration: "1.5 weeks",
        summary: "Learn the basics of analytics and KPIs",
        lessons: [
          "Understanding the data lifecycle",
          "Types of analytics: Descriptive, Diagnostic, Predictive, Prescriptive",
          "Key business metrics and KPIs",
          "Case studies on data-driven decisions",
        ],
      },
      {
        title: "Module 2: Excel for Data Analytics",
        duration: "2 weeks",
        summary: "Excel cleaning, formulas, automation, dashboards",
        lessons: [
          "Data cleaning and preparation in Excel",
          "Advanced formulas, PivotTables, and Lookups",
          "Dashboards and automation using Macros",
          "Data visualization with charts and conditional formatting",
        ],
      },
      {
        title: "Module 3: Power BI & Dashboarding",
        duration: "2 weeks",
        summary: "Interactive dashboards using Power BI",
        lessons: [
          "Power Query and DAX functions",
          "Building interactive dashboards",
          "Connecting Power BI with SQL and APIs",
          "Storytelling with data visualization",
        ],
      },
      {
        title: "Module 4: Python for Data Analysis",
        duration: "2 weeks",
        summary: "EDA and visualization with Python",
        lessons: [
          "Using Pandas and NumPy for data manipulation",
          "Exploratory Data Analysis (EDA)",
          "Matplotlib and Seaborn visualizations",
          "Integrating Python reports with BI tools",
        ],
      },
      {
        title: "Capstone Projects",
        duration: "2.5 weeks",
        summary: "Apply all tools in real case studies",
        lessons: [
          "Sales Forecasting Dashboard using Power BI",
          "Customer Retention Analysis using Python",
          "Excel KPI Dashboard for Business Insights",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need programming knowledge?",
        a: "Not necessarily. The course starts with Excel and Power BI before moving to basic Python for analytics.",
      },
      {
        q: "Can I use these skills for business roles?",
        a: "Yes. It’s designed for professionals aiming to make data-driven decisions.",
      },
      {
        q: "Will I learn Power BI deeply?",
        a: "Absolutely! You’ll master dashboarding and data storytelling with Power BI.",
      },
    ],
  },

  // =============================
  // 3️⃣ SAP
  // =============================
  sap: {
    slug: "sap",
    title: "SAP Functional & Technical Training",
    subtitle:
      "Become an SAP professional by mastering core enterprise modules like FICO, MM, and HANA with real-world projects.",
    image: "/assets/courses/sap.jpg",
    rating: 4.7,
    students: 8125,
    difficulty: "Intermediate",
    durationWeeks: 11,
    price: 17999,
    currency: "INR",
    seatsLeft: 58,
    enrollCta: "Start Learning SAP",
    overview: `This course provides a complete understanding of SAP systems — both functional and technical sides.
You’ll learn how to configure and manage key modules like Finance (FICO), Material Management (MM), and HANA.
By the end, you’ll be able to implement and manage SAP systems confidently with hands-on exposure.`,
    highlights: [
      "Hands-on SAP access",
      "Industry-standard training",
      "SAP certification guidance",
      "Lifetime access to resources",
    ],
    sidebarHighlights: [
      "Module-wise Assignments",
      "Career Counseling",
      "Mentorship from SAP Experts",
    ],
    modules: [
      {
        title: "Module 1: Introduction to SAP Ecosystem",
        duration: "1.5 weeks",
        summary: "ERP basics and SAP architecture",
        lessons: [
          "Understanding ERP and SAP architecture",
          "SAP navigation and user roles",
          "Functional vs Technical modules overview",
        ],
      },
      {
        title: "Module 2: SAP FICO Module",
        duration: "3 weeks",
        summary: "Financial Accounting & Reporting",
        lessons: [
          "Financial Accounting configuration",
          "General Ledger, Accounts Payable/Receivable",
          "Asset Accounting and Financial Reporting",
        ],
      },
      {
        title: "Module 3: SAP MM & Logistics",
        duration: "2.5 weeks",
        summary: "Procurement & Inventory Management",
        lessons: [
          "Procurement and inventory workflows",
          "Vendor and purchase order management",
          "Integration between MM and FICO modules",
        ],
      },
      {
        title: "Module 4: SAP HANA",
        duration: "2 weeks",
        summary: "Data modeling and optimization",
        lessons: [
          "In-memory database concepts",
          "Modeling with SAP HANA Studio",
          "Performance optimization and reporting",
        ],
      },
      {
        title: "Capstone Projects",
        duration: "2 weeks",
        summary: "Simulated enterprise SAP projects",
        lessons: [
          "Configuring SAP FICO for a manufacturing firm",
          "SAP MM end-to-end procurement project",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need prior ERP knowledge?",
        a: "No, it starts from scratch with SAP basics and access setup.",
      },
      {
        q: "Will I get practical exposure?",
        a: "Yes! You’ll work on real SAP sandbox environments and case studies.",
      },
    ],
  },

  // =============================
  // 4️⃣ Cyber Security
  // =============================
  // =============================
  // 4️⃣ Full Stack Python
  // =============================
  "full-stack-python": {
    slug: "full-stack-python",
    title: "Full Stack Python Development",
    subtitle:
      "Build modern web applications from scratch using Python, Django, FastAPI, React, and PostgreSQL. Learn to design, develop, and deploy full-stack projects end-to-end.",
    image: "/assets/courses/py.jpeg",
    rating: 4.8,
    students: 10342,
    difficulty: "Intermediate",
    durationWeeks: 14,
    price: 18999,
    currency: "INR",
    seatsLeft: 64,
    enrollCta: "Start Your Full Stack Journey",
    overview: `This Full Stack Python Development course gives you everything you need to become a professional full-stack developer. 
You'll master front-end technologies (HTML, CSS, React) and back-end frameworks (Django, FastAPI), 
learn how to design APIs, integrate databases like PostgreSQL and MongoDB, and deploy your apps to AWS or Render.
Every module blends theory, projects, and professional best practices so you can confidently build and deploy production-grade applications.`,
    highlights: [
      "Hands-on Django & React integration",
      "API development with FastAPI",
      "Real-world deployment projects",
      "Certificate of Completion",
    ],
    sidebarHighlights: [
      "Full-stack projects portfolio",
      "Code reviews by mentors",
      "Career guidance sessions",
    ],
    modules: [
      {
        title: "Module 1: Frontend Foundations",
        duration: "2 weeks",
        summary: "HTML, CSS, JS, and responsive web design",
        lessons: [
          "HTML5 semantic structure",
          "CSS3, Flexbox & Grid layouts",
          "JavaScript fundamentals",
          "Responsive design with Tailwind CSS",
        ],
      },
      {
        title: "Module 2: React for Frontend Development",
        duration: "2 weeks",
        summary: "Modern frontend development with React",
        lessons: [
          "React components and state management",
          "React Hooks and Context API",
          "Routing and API calls with Axios",
          "Building reusable UI components",
        ],
      },
      {
        title: "Module 3: Python & Django Backend",
        duration: "2.5 weeks",
        summary: "Django models, views, and templates",
        lessons: [
          "Django setup and project structure",
          "Models, migrations, and ORM",
          "Views, URLs, and template rendering",
          "Authentication and admin customization",
        ],
      },
      {
        title: "Module 4: REST APIs with FastAPI",
        duration: "2 weeks",
        summary: "Building modern APIs using FastAPI",
        lessons: [
          "Introduction to FastAPI and Pydantic",
          "CRUD operations and routing",
          "JWT authentication and middleware",
          "Connecting FastAPI with databases",
        ],
      },
      {
        title: "Module 5: Database Management",
        duration: "1.5 weeks",
        summary: "PostgreSQL and MongoDB integration",
        lessons: [
          "Relational DB design with PostgreSQL",
          "Using Django ORM and SQLAlchemy",
          "MongoDB and NoSQL concepts",
          "Database optimization and indexing",
        ],
      },
      {
        title: "Module 6: DevOps & Deployment",
        duration: "2 weeks",
        summary: "CI/CD, Docker, and cloud deployment",
        lessons: [
          "Dockerizing Django & React apps",
          "CI/CD using GitHub Actions",
          "Deploying to AWS, Render, or Vercel",
          "Monitoring and debugging production apps",
        ],
      },
      {
        title: "Capstone Project",
        duration: "2 weeks",
        summary: "End-to-end web app with React + Django",
        lessons: [
          "Design and plan the project architecture",
          "Integrate REST API with React frontend",
          "Add authentication and admin panel",
          "Deploy and document the full project",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need prior Python knowledge?",
        a: "Basic Python familiarity is helpful, but the course starts with a refresher on Python essentials.",
      },
      {
        q: "Will I learn both frontend and backend?",
        a: "Yes! You’ll master React for frontend and Django/FastAPI for backend.",
      },
      {
        q: "Is this course beginner-friendly?",
        a: "Yes, it’s designed for intermediate learners but includes foundational material.",
      },
      {
        q: "Are deployment topics covered?",
        a: "Absolutely. You’ll learn to containerize apps with Docker and deploy them to AWS or Render.",
      },
    ],
  },

  // =============================
  // 5️⃣ Full Stack Java
  // =============================
  "full-stack-java": {
    slug: "full-stack-java",
    title: "Full Stack Java Development",
    subtitle:
      "Become a Java full-stack developer by mastering Spring Boot, React, and MySQL. Learn to build and deploy enterprise-grade applications.",
    image: "/assets/courses/java.jpg",
    rating: 4.7,
    students: 9824,
    difficulty: "Intermediate",
    durationWeeks: 15,
    price: 19999,
    currency: "INR",
    seatsLeft: 55,
    enrollCta: "Join Full Stack Java Program",
    overview: `This Full Stack Java program is designed to help you become a professional full-stack engineer. 
You'll master backend development with Java, Spring Boot, and JPA, then learn frontend skills with React.
The program also covers REST APIs, security, deployment, and cloud integrations.
By the end, you’ll have hands-on experience building production-grade applications using Java technologies.`,
    highlights: [
      "Comprehensive Spring Boot training",
      "Frontend mastery with React",
      "Integration with MySQL and REST APIs",
      "Professional-grade deployment guides",
    ],
    sidebarHighlights: [
      "Real-world enterprise projects",
      "Mock interviews & career support",
      "Code reviews & mentorship",
    ],
    modules: [
      {
        title: "Module 1: Core Java & OOPs",
        duration: "2 weeks",
        summary: "Java foundations and object-oriented principles",
        lessons: [
          "Java syntax, data types, and loops",
          "Object-Oriented Programming concepts",
          "Collections, Streams, and Lambdas",
          "Exception handling and I/O operations",
        ],
      },
      {
        title: "Module 2: Spring Boot & REST APIs",
        duration: "2.5 weeks",
        summary: "Backend API development using Spring Boot",
        lessons: [
          "Spring Boot setup and annotations",
          "Dependency Injection and Beans",
          "Creating RESTful APIs with Spring MVC",
          "Connecting APIs with MySQL using JPA",
        ],
      },
      {
        title: "Module 3: React Frontend Development",
        duration: "2 weeks",
        summary: "Frontend UI with React and Axios integration",
        lessons: [
          "React components and state management",
          "Routing and dynamic pages",
          "API integration with Spring Boot backend",
          "Styling with Tailwind CSS and responsive design",
        ],
      },
      {
        title: "Module 4: Security & Authentication",
        duration: "2 weeks",
        summary: "Spring Security and JWT authentication",
        lessons: [
          "Spring Security configuration",
          "JWT authentication and authorization",
          "Role-based access control",
          "Session management best practices",
        ],
      },
      {
        title: "Module 5: DevOps & Deployment",
        duration: "2 weeks",
        summary: "Docker, CI/CD, and AWS deployment",
        lessons: [
          "Containerizing apps with Docker",
          "Setting up CI/CD pipelines",
          "Deploying to AWS and Render",
          "Monitoring and scaling applications",
        ],
      },
      {
        title: "Capstone Project",
        duration: "2 weeks",
        summary: "Enterprise-level full-stack project",
        lessons: [
          "Project setup and planning",
          "Backend and frontend integration",
          "Testing and deployment",
          "Documentation and final presentation",
        ],
      },
    ],
    faq: [
      {
        q: "Will I learn Spring Boot in depth?",
        a: "Yes! You’ll go from basics to advanced Spring Boot, including REST APIs and Security.",
      },
      {
        q: "Is React covered as part of the course?",
        a: "Yes, you’ll build a React frontend integrated with your Spring Boot backend.",
      },
      {
        q: "Do you include deployment?",
        a: "Yes, you’ll learn Docker, CI/CD pipelines, and AWS deployment.",
      },
    ],
  },

  // =============================
  // 6️⃣ Cyber Security & Ethical Hacking
  // =============================
  "cyber-security": {
    slug: "cyber-security",
    title: "Cyber Security & Ethical Hacking",
    subtitle:
      "Master cybersecurity from fundamentals to advanced ethical hacking. Learn network defense, penetration testing, and secure coding.",
    image: "/assets/courses/cyber.jpg",
    rating: 4.8,
    students: 11456,
    difficulty: "Intermediate",
    durationWeeks: 12,
    price: 17999,
    currency: "INR",
    seatsLeft: 69,
    enrollCta: "Become a Cyber Expert",
    overview: `This Cyber Security & Ethical Hacking course teaches you how to secure systems, networks, and data in the digital age. 
You’ll gain a deep understanding of vulnerabilities, exploits, and ethical hacking tools. 
From reconnaissance and penetration testing to digital forensics and malware analysis — every topic is covered through real-world labs and simulations.`,
    highlights: [
      "Hands-on penetration testing labs",
      "Real-time attack simulations",
      "Certified Ethical Hacking concepts",
      "24/7 expert mentorship",
    ],
    sidebarHighlights: [
      "Access to cybersecurity sandbox",
      "Industry-recognized certificate",
      "Capstone red team projects",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Cybersecurity",
        duration: "1.5 weeks",
        summary: "Foundations and security models",
        lessons: [
          "Understanding cybersecurity fundamentals",
          "Threat types and security principles",
          "CIA Triad and risk management basics",
        ],
      },
      {
        title: "Module 2: Networking & Security Tools",
        duration: "2 weeks",
        summary: "Networking essentials and tools",
        lessons: [
          "TCP/IP, OSI model, and protocols",
          "Wireshark, Nmap, and Metasploit basics",
          "Network configuration and monitoring",
        ],
      },
      {
        title: "Module 3: Ethical Hacking Methodologies",
        duration: "2 weeks",
        summary: "Scanning, enumeration, and exploitation",
        lessons: [
          "Information gathering and footprinting",
          "Vulnerability scanning with Nessus",
          "Exploitation techniques and payloads",
          "Post-exploitation and privilege escalation",
        ],
      },
      {
        title: "Module 4: Web Application Security",
        duration: "2 weeks",
        summary: "OWASP Top 10 and secure web coding",
        lessons: [
          "Cross-site scripting (XSS) and SQL injection",
          "Session hijacking and CSRF prevention",
          "Security testing for web APIs",
        ],
      },
      {
        title: "Module 5: Defensive Security & Forensics",
        duration: "2 weeks",
        summary: "Network defense and investigation",
        lessons: [
          "Firewalls, IDS/IPS, and SIEM tools",
          "Incident response and threat hunting",
          "Digital forensics and malware analysis",
        ],
      },
      {
        title: "Capstone Red Team Project",
        duration: "2 weeks",
        summary: "Simulate real-world attacks ethically",
        lessons: [
          "Setting up attack simulation labs",
          "Performing penetration testing report",
          "Red vs Blue team exercises",
        ],
      },
    ],
    faq: [
      {
        q: "Is prior experience in networking required?",
        a: "Basic understanding of computers and networks helps, but we cover networking essentials early on.",
      },
      {
        q: "Will I perform live hacking exercises?",
        a: "Yes! The program includes sandbox labs and ethical penetration testing simulations.",
      },
      {
        q: "Will I get a certification?",
        a: "Yes, you’ll receive a certificate of completion and guidance toward CEH certification prep.",
      },
    ],
  },
};
