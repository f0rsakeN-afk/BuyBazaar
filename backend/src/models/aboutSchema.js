const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const teamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  bio: String,
  imageUrl: String,
});

const aboutSchema = new mongoose.Schema(
  {
    pageTitle: String,
    headerTitle: String,
    headerSubtitle: String,
    storyTitle: String,
    storyContent: String,
    missionTitle: String,
    missionContent: String,
    visionTitle: String,
    visionContent: String,
    categories: [categorySchema],
    qualityAssuranceTitle: String,
    qualityAssuranceContent: String,
    sustainabilityTitle: String,
    sustainabilityContent: String,
    teamTitle: String,
    teamMembers: [teamMemberSchema],
    locationTitle: String,
    locationContent: String,
    ctaText: String,
    ctaLink: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("About", aboutSchema);
