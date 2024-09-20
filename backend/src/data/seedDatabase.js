const mongoose = require("mongoose");
const dotenv = require("dotenv");
const About = require("../models/aboutSchema");

dotenv.config({ path: "../config.env" });

const DB = process.env.DB;
const PW = process.env.PW;
const DBURL = DB.replace("<db_password>", PW);

const seedData = {
  pageTitle: "About BuyBazaar",
  headerTitle: "Welcome to BuyBazaar",
  headerSubtitle: "Your Local Source for Farm-Fresh Goodness",
  storyTitle: "Our Story",
  storyContent:
    "Founded in 2010 by the Johnson family, BuyBazaar began as a small farm stand on the outskirts of Greenville. What started as a passion for sharing homegrown produce has blossomed into a community hub for fresh, locally-sourced fruits, vegetables, and dairy products. Our journey is rooted in a deep commitment to supporting local farmers and providing our community with the highest quality, freshest produce possible.",
  missionTitle: "Our Mission",
  missionContent:
    "At BuyBazaar, our mission is to bridge the gap between local farmers and our community, providing access to the freshest, highest-quality produce while supporting sustainable agricultural practices. We strive to educate our customers about the benefits of eating local, seasonal foods and to foster a connection between the food on their plates and the hard-working farmers who grow it.",
  visionTitle: "Our Vision",
  visionContent:
    "We envision a future where every community has access to fresh, locally-grown produce, where farmers are fairly compensated for their hard work, and where sustainable agriculture is the norm, not the exception. We aim to be at the forefront of this movement, setting the standard for farm-to-table freshness and community engagement.",
  categories: [
    {
      title: "Farm-Fresh Fruits",
      description:
        "From crisp apples to juicy berries, our fruit selection changes with the seasons to bring you nature's candy at its peak freshness.",
      imageUrl: "/images/fruits.jpg",
    },
    {
      title: "Vibrant Vegetables",
      description:
        "Our vegetable section is a rainbow of nutritious options, from leafy greens to root vegetables, all harvested at the perfect moment.",
      imageUrl: "/images/vegetables.jpg",
    },
    {
      title: "Artisanal Dairy",
      description:
        "We partner with local dairies to bring you the creamiest milk, richest cheeses, and most delightful yogurts, all produced with care and tradition.",
      imageUrl: "/images/dairy.jpg",
    },
    {
      title: "Local Honey & Preserves",
      description:
        "Discover the sweet taste of our region with our selection of local honey and homemade preserves, perfect for spreading or gifting.",
      imageUrl: "/images/honey.jpg",
    },
  ],
  qualityAssuranceTitle: "Our Quality Assurance",
  qualityAssuranceContent:
    "Quality is at the heart of everything we do. We personally visit each farm we partner with to ensure they meet our strict standards for freshness, flavor, and sustainable farming practices. Our produce goes through a rigorous selection process before making it to our shelves, guaranteeing that you're getting the best of the best.",
  sustainabilityTitle: "Commitment to Sustainability",
  sustainabilityContent:
    "We believe in nurturing not just our community, but our planet too. That's why we work exclusively with farmers who practice sustainable agriculture. From water conservation to organic pest control, our partners are leaders in eco-friendly farming. We also minimize waste through composting programs and biodegradable packaging initiatives.",
  teamTitle: "Meet Our Team",
  teamMembers: [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Sarah's passion for fresh produce stems from growing up on her family's apple orchard. She founded BuyBazaar to share the farm-to-table experience with her community.",
      imageUrl: "/images/sarah.jpg",
    },
    {
      name: "Mike Chen",
      role: "Head of Procurement",
      bio: "With over 15 years in the produce industry, Mike's expertise ensures we partner with the best local farms to bring you top-quality fruits and vegetables.",
      imageUrl: "/images/mike.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach Coordinator",
      bio: "Emily organizes our farmer's markets, educational workshops, and community events, bringing our passion for fresh food directly to you.",
      imageUrl: "/images/emily.jpg",
    },
  ],
  locationTitle: "Visit Us",
  locationContent:
    "Find us in the heart of Greenville at 123 Harvest Lane. Our doors are open Monday through Saturday, 8 AM to 7 PM, and Sundays from 10 AM to 5 PM. Come experience the freshness for yourself!",
  ctaText: "Contact Us",
  ctaLink: "/contact",
};

async function seedDatabase() {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected to MongoDB");

    await About.deleteMany({});
    await About.create(seedData);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedDatabase();
