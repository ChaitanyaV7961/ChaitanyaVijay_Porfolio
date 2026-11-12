export const withBase = (path = "") => {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
};

export const site = {
  name: "Chaitanya V.",
  descriptor: "Business | Data | AI | Technology",
  email: "",
  linkedin: "",
  github: "https://github.com/ChaitanyaV7961",
  cv: "/files/Chaitanya_V_CV.pdf"
};
