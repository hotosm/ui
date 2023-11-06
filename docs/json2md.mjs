import fs from "fs";

// Read JSON data from a file
const jsonData = fs.readFileSync("docs/components.json", "utf-8");

// Parse the JSON data to a JavaScript object
const parsedJson = JSON.parse(jsonData);

// Extract the data from the parsed JSON object
const firstComponent = parsedJson["src/example/Example.ts"];

// Create a markdown table header
const tableHeader = "| Property | Type | Description |\n| --- | --- | --- |";

// Generate the table rows
const tableRows = firstComponent.map((component) => {
  const prop = Object.keys(component.props)[0];
  const propData = component.props[prop];
  const propType = propData.tsType.name;
  const propDescription = propData.description;
  return `| \`${prop}\` | \`${propType}\` | ${propDescription} |`;
});

// Combine the table header and rows
const markdownTable = [tableHeader, ...tableRows].join("\n");
const markdownContent = `# Example Component\n\n${markdownTable}`;

// Write the generated markdown table to a file
fs.writeFileSync("docs/components/example.md", markdownContent, "utf-8");
