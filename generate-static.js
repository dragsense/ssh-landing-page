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
const clientDistPath = path.join(distPath, "client");

// Ensure dist/client directory exists
if (!fs.existsSync(clientDistPath)) {
  fs.mkdirSync(clientDistPath, { recursive: true });
}

// Read the built template (this should exist after build:client)
const templatePath = path.join(clientDistPath, "index.html");
if (!fs.existsSync(templatePath)) {
  throw new Error(
    `Template file not found: ${templatePath}\nPlease run 'npm run build:client' first.`
  );
}

const template = fs.readFileSync(templatePath, "utf-8");

// Artificial delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generatePage = async (route) => {
  const cleanRoute = route.replace(/\?/g, "_").replace(/%20/g, "-"); // Replace "?" with "_" for filenames
  const render = (await import("./dist/server/entry-server.js")).render;
  const html = await render(route);

  // Inject head and body content properly
  const outputHtml = template
    .replace("<!--app-head-->", html.head ?? "") // Inject head content
    .replace("<!--app-html-->", html.html ?? ""); // Inject body content

  // Ensure directory exists before writing file
  const outputDir = path.join(clientDistPath, path.dirname(cleanRoute));
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true }); // Create parent directories if needed
  }

  const filePath = path.join(
    clientDistPath,
    route === "/" || route === "" ? "index.html" : `${cleanRoute}.html`
  );

  fs.writeFileSync(filePath, outputHtml, "utf-8");
  console.log(`✅ Generated: ${filePath}`);
};

// Generate template.html separately (for SSR fallback)
// This is a clean copy of the template with placeholders intact
const generateTemplate = () => {
  const templateFilePath = path.join(clientDistPath, "template.html");
  
  // Ensure directory exists
  if (!fs.existsSync(clientDistPath)) {
    fs.mkdirSync(clientDistPath, { recursive: true });
  }
  
  // Write the clean template (with placeholders <!--app-head--> and <!--app-html-->)
  fs.writeFileSync(templateFilePath, template, "utf-8");
  console.log(`✅ Generated: ${templateFilePath}`);
};

async function generatePagesSequentially() {
  console.log("🚀 Starting static site generation...\n");
  
  // First, generate template.html for SSR fallback
  try {
    generateTemplate();
  } catch (error) {
    console.error(`❌ Error generating template.html:`, error);
  }
  
  // Then generate all static pages
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
