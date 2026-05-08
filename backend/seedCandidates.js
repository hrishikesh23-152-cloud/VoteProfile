const mongoose = require('mongoose');
const Candidate = require('./models/Candidate');
require('dotenv').config();

const candidates = [
  {
    name: "Alice Johnson",
    bio: "Passionate about student welfare and environmental sustainability.",
    position: "President",
    image: "https://via.placeholder.com/300x300/FF6B6B/FFFFFF?text=Alice",
    agenda: [
      { title: "Improve Campus Facilities", description: "Upgrade classrooms and recreational areas.", icon: "🏫" },
      { title: "Student Welfare Programs", description: "Implement mental health support.", icon: "❤️" },
      { title: "Environmental Initiatives", description: "Promote green energy.", icon: "🌱" },
      { title: "Technology Integration", description: "Modernize classrooms.", icon: "💻" }
    ],
    achievements: [
      { title: "Dean's List", description: "Academic excellence.", year: "2023-2024", icon: "🎓" },
      { title: "Leadership Award", description: "Outstanding contributions.", year: "2024", icon: "🏆" }
    ],
    projects: [
      { title: "Campus Green Initiative", description: "Planted 500 trees.", image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Green+Project", category: "Environment" },
      { title: "Student Tech Hub", description: "Established tech center.", image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Tech+Hub", category: "Technology" }
    ]
  },
  {
    name: "Bob Smith",
    bio: "Focused on academic excellence and innovation.",
    position: "Vice President",
    image: "https://via.placeholder.com/300x300/4ECDC4/FFFFFF?text=Bob",
    agenda: [
      { title: "Academic Excellence", description: "Enhance curriculum.", icon: "📚" },
      { title: "Innovation Hub", description: "Create startup incubator.", icon: "💡" },
      { title: "Diversity Programs", description: "Promote inclusivity.", icon: "🤝" },
      { title: "Career Services", description: "Improve job placement.", icon: "💼" }
    ],
    achievements: [
      { title: "Hackathon Winner", description: "First place.", year: "2024", icon: "💡" },
      { title: "Research Publication", description: "Published paper.", year: "2024", icon: "📚" }
    ],
    projects: [
      { title: "Mental Health Awareness", description: "Organized workshops.", image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental+Health", category: "Welfare" },
      { title: "Sports Complex Renovation", description: "Renovated facilities.", image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Sports", category: "Facilities" }
    ]
  },
  // Add 10 more candidates with similar structure
  {
    name: "DEEPMONI KALITA",
    bio: "Dedicated to sports and extracurricular activities.",
    position: "GENERAL SPORTS SECRETARY",
    image: "",
    agenda: [
      { title: "Sports Facilities", description: "Improve gym and fields.", icon: "⚽" },
      { title: "Extracurricular Clubs", description: "Support student clubs.", icon: "🎭" },
      { title: "Fitness Programs", description: "Promote health.", icon: "🏃" },
      { title: "Events Organization", description: "Host tournaments.", icon: "🏆" }
    ],
    achievements: [
      { title: "MVP Award", description: "Basketball MVP.", year: "2023", icon: "🏀" },
      { title: "Volunteer of the Year", description: "200+ hours.", year: "2023", icon: "🤝" }
    ],
    projects: [
      { title: "Campus Green Initiative", description: "Planted trees.", image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Green", category: "Environment" },
      { title: "Tech Hub", description: "Modern computers.", image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Tech", category: "Technology" }
    ]
  },
  {
    name: "Diana Prince",
    bio: "Advocate for women's rights and equality.",
    position: "Cultural Secretary",
    image: "https://via.placeholder.com/300x300/FFA07A/FFFFFF?text=Diana",
    agenda: [
      { title: "Gender Equality", description: "Promote equality.", icon: "♀️" },
      { title: "Cultural Events", description: "Host festivals.", icon: "🎉" },
      { title: "Diversity Inclusion", description: "Support minorities.", icon: "🌈" },
      { title: "Art Programs", description: "Encourage creativity.", icon: "🎨" }
    ],
    achievements: [
      { title: "Leadership Award", description: "Contributions.", year: "2024", icon: "🏆" },
      { title: "Dean's List", description: "Excellence.", year: "2023", icon: "🎓" }
    ],
    projects: [
      { title: "Mental Health Campaign", description: "Awareness.", image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental", category: "Welfare" },
      { title: "Sports Renovation", description: "Facilities.", image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Sports", category: "Facilities" }
    ]
  },
  {
    name: "Eve Adams",
    bio: "Tech enthusiast and innovation driver.",
    position: "Technical Secretary",
    image: "https://via.placeholder.com/300x300/98D8C8/FFFFFF?text=Eve",
    agenda: [
      { title: "Digital Transformation", description: "Modernize systems.", icon: "💻" },
      { title: "Coding Workshops", description: "Teach programming.", icon: "👨‍💻" },
      { title: "AI Integration", description: "Implement AI.", icon: "🤖" },
      { title: "Cybersecurity", description: "Protect data.", icon: "🔒" }
    ],
    achievements: [
      { title: "Hackathon Winner", description: "Innovation.", year: "2024", icon: "💡" },
      { title: "Research Pub", description: "Paper.", year: "2024", icon: "📚" }
    ],
    projects: [
      { title: "Green Initiative", description: "Trees.", image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Green", category: "Environment" },
      { title: "Tech Hub", description: "Center.", image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Tech", category: "Technology" }
    ]
  },
  {
    name: "Frank Miller",
    bio: "Environmental activist.",
    position: "Environment Secretary",
    image: "https://via.placeholder.com/300x300/FFD93D/FFFFFF?text=Frank",
    agenda: [
      { title: "Sustainability", description: "Green campus.", icon: "🌱" },
      { title: "Waste Management", description: "Reduce waste.", icon: "♻️" },
      { title: "Renewable Energy", description: "Solar panels.", icon: "☀️" },
      { title: "Conservation", description: "Protect nature.", icon: "🌳" }
    ],
    achievements: [
      { title: "Volunteer Award", description: "Service.", year: "2023", icon: "🤝" },
      { title: "MVP", description: "Sports.", year: "2023", icon: "🏀" }
    ],
    projects: [
      { title: "Mental Health", description: "Support.", image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental", category: "Welfare" },
      { title: "Sports", description: "Renovation.", image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Sports", category: "Facilities" }
    ]
  },
  {
    name: "Grace Lee",
    bio: "Academic focus.",
    position: "Academic Secretary",
    image: "https://via.placeholder.com/300x300/6BCF7F/FFFFFF?text=Grace",
    agenda: [
      { title: "Curriculum", description: "Enhance.", icon: "📚" },
      { title: "Tutoring", description: "Support.", icon: "👨‍🏫" },
      { title: "Research", description: "Encourage.", icon: "🔬" },
      { title: "Scholarships", description: "Aid.", icon: "💰" }
    ],
    achievements: [
      { title: "Dean's List", description: "Excellence.", year: "2023", icon: "🎓" },
      { title: "Leadership", description: "Award.", year: "2024", icon: "🏆" }
    ],
    projects: [
      { title: "Green", description: "Initiative.", image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Green", category: "Environment" },
      { title: "Tech", description: "Hub.", image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Tech", category: "Technology" }
    ]
  },
  {
    name: "Henry Wilson",
    bio: "Sports enthusiast.",
    position: "Sports Coordinator",
    image: "https://via.placeholder.com/300x300/4A90E2/FFFFFF?text=Henry",
    agenda: [
      { title: "Athletics", description: "Programs.", icon: "🏃" },
      { title: "Competitions", description: "Host.", icon: "🏆" },
      { title: "Fitness", description: "Centers.", icon: "💪" },
      { title: "Teams", description: "Support.", icon: "⚽" }
    ],
    achievements: [
      { title: "MVP", description: "Award.", year: "2023", icon: "🏀" },
      { title: "Volunteer", description: "Year.", year: "2023", icon: "🤝" }
    ],
    projects: [
      { title: "Mental", description: "Health.", image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental", category: "Welfare" },
      { title: "Sports", description: "Complex.", image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Sports", category: "Facilities" }
    ]
  },
  {
    name: "Ivy Chen",
    bio: "Cultural promoter.",
    position: "Cultural Head",
    image: "https://via.placeholder.com/300x300/E91E63/FFFFFF?text=Ivy",
    agenda: [
      { title: "Festivals", description: "Host.", icon: "🎉" },
      { title: "Arts", description: "Promote.", icon: "🎨" },
      { title: "Diversity", description: "Celebrate.", icon: "🌈" },
      { title: "Events", description: "Organize.", icon: "🎭" }
    ],
    achievements: [
      { title: "Leadership", description: "Award.", year: "2024", icon: "🏆" },
      { title: "Dean's", description: "List.", year: "2023", icon: "🎓" }
    ],
    projects: [
      { title: "Green", description: "Project.", image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Green", category: "Environment" },
      { title: "Tech", description: "Center.", image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Tech", category: "Technology" }
    ]
  },
  {
    name: "Jack Taylor",
    bio: "Tech innovator.",
    position: "Innovation Lead",
    image: "https://via.placeholder.com/300x300/9C27B0/FFFFFF?text=Jack",
    agenda: [
      { title: "Innovation", description: "Hub.", icon: "💡" },
      { title: "Startups", description: "Support.", icon: "🚀" },
      { title: "Tech", description: "Events.", icon: "💻" },
      { title: "Collaboration", description: "Foster.", icon: "🤝" }
    ],
    achievements: [
      { title: "Hackathon", description: "Winner.", year: "2024", icon: "💡" },
      { title: "Research", description: "Pub.", year: "2024", icon: "📚" }
    ],
    projects: [
      { title: "Mental", description: "Awareness.", image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental", category: "Welfare" },
      { title: "Sports", description: "Renovation.", image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Sports", category: "Facilities" }
    ]
  },
  {
    name: "Kate Johnson",
    bio: "Welfare advocate.",
    position: "Welfare Secretary",
    image: "https://via.placeholder.com/300x300/00BCD4/FFFFFF?text=Kate",
    agenda: [
      { title: "Health", description: "Services.", icon: "🏥" },
      { title: "Support", description: "Programs.", icon: "❤️" },
      { title: "Counseling", description: "Provide.", icon: "🗣️" },
      { title: "Aid", description: "Financial.", icon: "💰" }
    ],
    achievements: [
      { title: "Volunteer", description: "Award.", year: "2023", icon: "🤝" },
      { title: "MVP", description: "Sports.", year: "2023", icon: "🏀" }
    ],
    projects: [
      { title: "Green", description: "Initiative.", image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Green", category: "Environment" },
      { title: "Tech", description: "Hub.", image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Tech", category: "Technology" }
    ]
  },
  {
    name: "Liam Davis",
    bio: "Finance expert.",
    position: "Finance Secretary",
    image: "https://via.placeholder.com/300x300/8BC34A/FFFFFF?text=Liam",
    agenda: [
      { title: "Budget", description: "Management.", icon: "💰" },
      { title: "Funding", description: "Secure.", icon: "🏦" },
      { title: "Transparency", description: "Ensure.", icon: "📊" },
      { title: "Grants", description: "Apply.", icon: "📝" }
    ],
    achievements: [
      { title: "Dean's", description: "List.", year: "2023", icon: "🎓" },
      { title: "Leadership", description: "Award.", year: "2024", icon: "🏆" }
    ],
    projects: [
      { title: "Mental", description: "Health.", image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Mental", category: "Welfare" },
      { title: "Sports", description: "Complex.", image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Sports", category: "Facilities" }
    ]
  }
];

const seedCandidates = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Candidate.deleteMany(); // Clear existing
    await Candidate.insertMany(candidates);
    console.log('Candidates seeded');
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

seedCandidates();