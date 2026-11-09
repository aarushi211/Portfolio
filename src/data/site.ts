export const SITE = {
  name: "Aarushi Jain",
  email: "aarushij.dev@gmail.com",
  github: "https://github.com/aarushi211", linkedin: "https://www.linkedin.com/in/aarushi-jain-01413a207/", youtube: "https://youtube.com/playlist?list=PLK-r5aSmVF6k&si=TyJ-A880ni2z0oIm", resume: "https://drive.google.com/file/d/1AfP4HcNfMaySp4KD7rxT_cxmYilDqPaj/view?usp=sharing",
  photo: "images/AarushiPhoto.jpeg",
  location: "Seattle, WA",
};

export {
  projects,
  categories,
} from "./projects";

export type {
  Project,
} from "./projects";

export {
  experience,
} from "./experience";

export {
  articles,
} from "./articles";

export {
  interests,
} from "./interests";

export {
  toolkit
} from "./toolkit";

export const defaultArch: [string, string][] = [
  ["Inputs", "Describe how data enters the system."],
  ["Core logic", "Describe the model or agent logic."],
  ["Outputs", "Describe what the user sees."],
];

export const placeholders = {
  overview: "Describe the problem, who it is for, and what you built.",
  results: "Add your evaluation numbers and what they show.",
  learnings:
    "Add the key engineering decisions, challenges, and what you would change.",
};