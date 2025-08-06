# Sort Challenge

A package sorting function that categorizes packages based on their dimensions and weight.

## Installation

This project uses Node.js ES modules and the built-in test runner. Make sure you have Node.js version 18.0.0 or higher installed.

```bash
node --version  # Should be >= 18.0.0
```

## Continuous Integration

This project includes GitHub Actions for automated testing. Tests run automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` branch
- Multiple Node.js versions (18.x, 20.x, 22.x) for compatibility testing

## Development Guidelines

### Line Endings
This project uses LF (Unix-style) line endings consistently across all platforms:
- `.gitattributes` file enforces LF line endings for all text files
- Git is configured with `core.autocrlf=false` and `core.eol=lf`
- This ensures consistent behavior across Windows, macOS, and Linux

## Running Tests

To run the test suite, use one of the following commands:

```bash
npm test
```

or

```bash
npm run test
```

Both commands will execute the test file `sortChallenge.test.js` and display the results.

## Usage

The `sort` function takes four parameters:
- `width` (number): Package width
- `height` (number): Package height  
- `length` (number): Package length
- `mass` (number): Package mass/weight

```javascript
import { sort } from './sortChallenge.js';

const result = sort(100, 100, 100, 10);
console.log(result); // "STANDARD"
```

## Classification Rules

- **STANDARD**: Normal packages that are neither bulky nor heavy
- **SPECIAL**: Packages that are either bulky OR heavy (but not both)
- **REJECTED**: Packages that are both bulky AND heavy, or have invalid units or arguments.
   - We are using REJECTED for invalid units / arguments because we want to stay within the 
     original allowance of the 3 values defined to retain API continuity.

### Bulky Criteria
A package is considered bulky if:
- Volume > 1,000,000 cubic units, OR
- Any dimension (width, height, or length) ≥ 150 units

### Heavy Criteria
A package is considered heavy if:
- Mass ≥ 20 units
