require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];
const componentPath = process.argv[3];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

let componentDirectory
if (!componentPath) {
  componentDirectory = `./src/components/${componentName}`;
} else {
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(`./src/components/${componentPath}`)
  }
  
  componentDirectory = `./src/components/${componentPath}/${componentName}`;
}

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);