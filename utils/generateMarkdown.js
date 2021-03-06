//Description 

//Table of Contents

//installation

//Usage

//License

//contribution guidelines

//test instructions


function renderDescription (description){
  if(description) {
    return `


     ${description}`;
  }
}
function renderInstallation (installation){
  if(installation) {
    return `


     ${installation}`;
  }
}
function renderUsage (usage){
  if(usage) {
    return `


     ${usage}`;
  }
}
function renderContribution (contribution){
  if(contribution) {
    return `


     ${contribution}`;
  }
}
function renderTest (test){
  if(test) {
    return `


     ${test}`;
  }
}
function renderQuestions (username, repo, email){
  if(username, repo, email) {
    return `

      Here's how you can contact me:

      GitHub username:${username} 
      Link to repository: ${repo} 
      Email: ${email}`;
  }
}



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "![MIT](https://img.shields.io/badge/license-MIT-blue)"
  }else if(license === "APACHE 2.0"){
    return "![APACHE 2.0](https://img.shields.io/badge/license-APACHE%202.0-green)"
  }else if(license === "GPL") {
    return "![GPL](https://img.shields.io/badge/license-GPL-red)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/MIT)`
  } else if (license === "APACHE 2.0") {
    return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/Apache-2.0)`
  }else if (license === "GPL") {
    return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/GPL-3.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, author) {
  if (license === "MIT"){
    return `Copyright 2022 ${author}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === "APACHE 2.0") {
    return `Copyright 2022 ${author}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
    
  }else if (license === "GPL") {
    return `Copyright 2022 ${author}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.`
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  # Table of Contents

  -[Description](#Description)

  -[Installation Instructions](#Installation)

  -[Usage](#Usage)

  -[Contribution](#Contribution)

  -[Test Instructions](#Test)

  -[Questions?](#Questions)

  ${renderLicenseLink(data.license)}


  ${renderLicenseSection(data.license, data.author)}

  ## Description ${renderDescription(data.description)}

  ## Installation ${renderInstallation(data.installation)}

  ## Usage ${renderUsage(data.usage)}
  
  ## Contribution ${renderContribution(data.contribution)}
  
  ## Test ${renderTest(data.test)}

  ## Questions ${renderQuestions(data.username, data.repo, data.email)}
  
`;
}

module.exports = generateMarkdown;
