import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the pages for pre-rendering based on routes.tsx
const pages = [
  "", // Home page (/)
  "early-life", // /early-life
  "airforce-life", // /airforce-life
  "business-man", // /business-man
  // Dynamic routes - add specific war IDs here if needed
  "life-at-airforce/war-of-1965", // /life-at-airforce/war-of-1965
  "life-at-airforce/war-of-1971", // /life-at-airforce/war-of-1971
];

const distPath = path.resolve("dist");
const template = fs.readFileSync(
  path.resolve(distPath, "client/index.html"),
  "utf-8"
);

// Artificial delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generatePage = async (route) => {
  const cleanRoute = route.replace(/\?/g, "_").replace(/%20/g, "-"); // Replace "?" with "_" for filenames
  const render = (await import("./dist/server/entry-server.js")).render;
  const html = await render(route);

  // Clone the template with template.html [this file if that page not required SSG then SSR will use]
  if (route === "") {
    const filePath = path.join(`${distPath}/client`, "template.html");
    console.log(`✅ Generated: ${filePath}`);
    fs.writeFileSync(filePath, template, "utf-8");
  }

  // Inject head and body content properly
  const outputHtml = template
    .replace("<!--app-head-->", html.head ?? "") // Inject head content
    .replace("<!--app-html-->", html.html ?? ""); // Inject body content

  // Ensure directory exists before writing file
  const outputDir = path.join(`${distPath}/client`, path.dirname(cleanRoute));
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true }); // Create parent directories if needed
  }

  const filePath = path.join(
    `${distPath}/client`,
    route === "/" || route === "" ? "index.html" : `${cleanRoute}.html`
  );

  fs.writeFileSync(filePath, outputHtml, "utf-8");
  console.log(`✅ Generated: ${filePath}`);
};

async function generatePagesSequentially() {
  console.log("🚀 Starting static site generation...\n");
  
  for (const route of pages) {
    try {
      await generatePage(route);
      await delay(1000); // Wait for 1 second before processing the next page (Not req)
    } catch (error) {
      console.error(`❌ Error generating page for route "${route}":`, error);
    }
  }
  
  console.log("\n✨ Static site generation complete!");
}

generatePagesSequentially();
