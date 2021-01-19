// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None" || license !== "") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None" || license !== "") {
    return `* [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None" || license !== "") {
    return `## License
This is Licensed under the ${license} license`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table Of Contents
* [Installation](#installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
${renderLicenseLink(data.license)}
## Installation
${data.installation}
${renderLicenseSection(data.license)}
## Usage
${data.usage}
## Credits
${data.credits}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
${data.username}
  `;
}

module.exports = generateMarkdown;
