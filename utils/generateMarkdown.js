const licenseBadgeHandler = licenseChoice => {
  if (licenseChoice === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (licenseChoice === 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (licenseChoice === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (licenseChoice === 'BSD 2-Clause "Simplified" License') {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (licenseChoice === 'BSD 3-Clause "New" or "Revised" License') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (licenseChoice === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (licenseChoice === 'Creative Commons Zero v1.0 Universal') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else if (licenseChoice === 'Eclipse Public License 2.0') {
    return `[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
  }
  else if (licenseChoice === 'GNU Affero General Public License v3.0') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (licenseChoice === 'GNU General Public License v2.0') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if (licenseChoice === 'GNU Lesser General Public License v2.1') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)`
  }
  else if (licenseChoice === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (licenseChoice === 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  else if (licenseChoice === 'None') {
    return ''
  }
}

const licenseDescriptionHandler = licenseChoice => {
  if (licenseChoice === 'None') {
    return 'No License!'
  }
  else if (licenseChoice === 'Apache License 2.0') {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (licenseChoice === 'MIT License') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (licenseChoice === 'BSD 2-Clause "Simplified" License') {
    return `This version allows unlimited redistribution for any purpose as long as its copyright notices and the license's disclaimers of warranty are maintained. `
  }
  else if (licenseChoice === 'BSD 3-Clause "New" or "Revised" License') {
    return `This version allows unlimited redistribution for any purpose as long as its copyright notices and the license's disclaimers of warranty are maintained. The license also contains a clause restricting use of the names of contributors for endorsement of a derived work without specific permission.`
  }
  else if (licenseChoice === 'Boost Software License 1.0') {
    return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (licenseChoice === 'Creative Commons Zero v1.0 Universal') {
    return `The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. CC0 is used to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.`
  }
  else if (licenseChoice === 'Eclipse Public License 2.0') {
    return `The Eclipse Public License is a free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation. It replaces the Common Public License and removes certain terms relating to litigations related to patents.`
  }
  else if (licenseChoice === 'GNU Affero General Public License v3.0') {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`
  }
  else if (licenseChoice === 'GNU General Public License v2.0') {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
  else if (licenseChoice === 'GNU General Public License v3.0') {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
  else if (licenseChoice === 'GNU Lesser General Public License v2.1') {
    return `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`
  }
  else if (licenseChoice === 'Mozilla Public License 2.0') {
    return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`
  }
  else if (licenseChoice === 'The Unlicense') {
    return `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${licenseBadgeHandler(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${licenseDescriptionHandler(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have any questions, please contact me via [email](${data.email}) or on [Github](http://github.com/${data.githubUsername}).`;
}

module.exports = generateMarkdown;