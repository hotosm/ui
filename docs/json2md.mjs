// This file reads the generated components.json (from react-docgen)
// and iterates all elements that have entries.
//
// The props are extracted and placed in a markdown table.
//
// The markdown file must be present under docs/components/{name}.md
// and contain a `## Props` subheading to replace.
//
// The markdown table is updated under the `## Props` subheading.

import fs from "fs";

const jsonData = fs.readFileSync("docs/components.json", "utf-8");
const parsedJson = JSON.parse(jsonData);

for (const filePath in parsedJson) {
  const componentName = filePath.split("/").pop().split(".")[0];
  const componentData = parsedJson[filePath];

  // Create a markdown table header
  const tableHeader = "| Property | Type | Description |\n| --- | --- | --- |";

  // Generate the table rows
  const tableRows = componentData.map((component) => {
    if (component.props) {
      // Only run if props array is not empty
      const prop = Object.keys(component.props)[0];
      const propData = component.props[prop];
      const propType = propData.tsType.name;
      const propDescription = propData.description;
      return `| \`${prop}\` | \`${propType}\` | ${propDescription} |`;
    }
  });

  // Combine the table header and rows
  const markdownTable = [tableHeader, ...tableRows].join("\n");
  const markdownContent = `## Props\n\n${markdownTable}\n`;

  // Read existing file, replace `## Props` section, add newline at end
  const existingContent = fs.readFileSync(
    `docs/components/${componentName.toLowerCase()}.md`,
    "utf-8",
  );
  const modifiedContent = existingContent.replace(
    /## Props([\s\S]*?)(?=##|$)/,
    markdownContent,
  );
  const finalContent = modifiedContent.endsWith("\n")
    ? modifiedContent
    : modifiedContent + "\n";
  fs.writeFileSync(
    `docs/components/${componentName.toLowerCase()}.md`,
    finalContent,
    "utf-8",
  );
}
