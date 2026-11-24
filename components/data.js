// Site content in one place. Edit text and links here.
export const email = "okwudiliebuka405@gmail.com";

// Contact links shown in the menu, contact section and footer.
// `external` links open in a new tab; the email link opens the mail app.
export const socials = [
  { label: "GitHub", href: "https://github.com/Jonathan-ebuka", external: true },
  { label: "Email", href: `mailto:${email}`, external: false },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const stack = {
  frontEnd: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git", "GitHub", "GitLab"],
  backend: ["Node.js", "MongoDB", "Supabase", "Firebase"],
  ai: ["AI-assisted coding", "AI API integration", "AI agent development", "AI automation & workflow engineering"],
};
