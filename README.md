# AT00BY10 Unit Testing Project

[![Coverage Status](https://coveralls.io/repos/github/ekh0o/AT00BY10/badge.svg?branch=main&kill_cache=1)](https://coveralls.io/github/ekh0o/AT00BY10?branch=main)

## Overview

This repository contains unit tests, CI configuration, and coverage reporting for the **AT00BY10** JavaScript library.


The purpose of this project was to:
- implement unit tests for selected source files
- configure an automated GitHub Actions workflow
- generate and publish coverage reports to Coveralls
- evaluate the quality and production readiness of the tested library

## Tools Used

- Node.js
- npm
- Mocha
- Chai
- c8
- GitHub Actions
- Coveralls

## Tested Files

The following source files were tested:

- `add.js`
- `ceil.js`
- `chunk.js`
- `clamp.js`
- `compact.js`
- `defaultTo.js`
- `divide.js`
- `drop.js`
- `endsWith.js`
- `eq.js`
- `toNumber.js`
- `toString.js`
- `upperFirst.js`
- `words.js`

## Excluded from Testing

The following were excluded from the test scope:

- `src/.internal/`
- other untested utility files in `src/`

The `.internal` directory was intentionally excluded from both testing and coverage reporting.

## Test Strategy

The library was not tested in full. Instead, testing focused on a selected subset of source files that were suitable for unit testing.

During testing, it was observed that some functions did not behave exactly like commonly expected utility-library implementations. For this reason, the final tests were written to verify the **actual implementation behavior** of the library.

## Coverage

Coverage reporting is generated with **c8** and published to **Coveralls** through GitHub Actions.

Current coverage can be seen from the badge above and from the Coveralls report:
- [Coveralls Report](https://coveralls.io/github/ekh0o/AT00BY10?branch=main)

## Continuous Integration

Tests are executed automatically on every push to the `main` branch using **GitHub Actions**.

The workflow:
1. checks out the repository
2. installs Node.js and dependencies
3. runs the unit tests
4. generates coverage reports
5. uploads coverage results to Coveralls

## Notes

- This repository is based on the provided AT00BY10 test target.
- The `.internal` directory is not included in the tests.
- Coverage reporting was limited to the files that were actually tested.
- The project was configured to work in an ES Module environment.

## Final Verdict

Based on the implemented tests and observed results, the library is **not fully production-ready without additional clarification or fixes**.

Although test coverage was high, several functions showed behavior that differed from what is commonly expected from similar utility libraries. This makes the library less predictable without further documentation or refinement.

## Repository

GitHub repository:
- https://github.com/ekh0o/AT00BY10

GitHub repository template for this repository:
- https://github.com/petri-rantanen/AT00BY10