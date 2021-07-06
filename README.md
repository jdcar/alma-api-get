# Alma API GET request [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [License](#license)
* [Questions](#questions)
## Description
This is a very basic program for making a GET request using the ALMA API in node with axios. The bibliographic record is in MARCXML.

## Installation Instructions
Clone down the repository, cd into the api-api-get folder, and "npm install" to get the dependencies. 

Add the mmsid from your database on line 8 that you want to GET.

You will need Alma API keys from your institution in order to use the APIs. I hide the keys in a file called "config.js".

In the alma-api-get folder, create a 'config.js' file. 

Add this with your API keys in quotes:

module.exports = config = {
    PRODUCTION_API_KEY : 'ENTER_PRODUCTION_KEY_HERE',
    SANDBOX_API_KEY : 'ENTER_SANDBOX_KEY_HERE',
  }

Run with "node index.js"

## License
MIT. Copyright (c) 2021 Jamie Carlstone
## Questions
* https://github.com/jdcar
* Email: jamie.carlstone at northwestern.edu