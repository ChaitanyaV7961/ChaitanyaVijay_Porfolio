export const withBase = (path = "") => {
  // Astro's BASE_URL may be provided without a trailing slash.
  // Always insert exactly one slash between the repository base and the path.
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "") + "/";
  const clean = path.replace(/^\/+/, "");
  return clean ? `${base}${clean}` : base;
};

export const site = {
  name: "Chaitanya Vijay",
  descriptor: "Business | Data | AI | Technology",
  email: "",
  linkedin: "",
  github: "https://github.com/ChaitanyaV7961",
  cv: "files/Chaitanya_V_CV.pdf"
};
