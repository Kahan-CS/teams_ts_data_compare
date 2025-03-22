# Purpose of the Script

This script is designed for the Seneca Hackathon IT team's internal tasks. The primary objective is to compare team data fetched by a Python script (which retrieves responses from Microsoft Forms and Google Forms) with the existing team data.

By "team data," we refer to the internal teams of the Seneca Hackathon organization. The script applies custom modifications to the incoming data based on reported inconsistencies.

---

## Steps to Follow

### 1. Install TypeScript
Ensure TypeScript is installed by running the following command:
```sh
npm i -g typescript
```

### 2. Prepare the Data Files
Place the incoming and current team data into TypeScript files under the `data` folder. And then follow these steps (only for Seneca Hackathon IT team use):
#### a. Current Data
- Copy and paste the data directly.

#### b. Incoming Data
- Perform a **Find & Replace** operation on `' Team'` (note the space before 'Team'). This is **case-sensitive** to ensure the team names align with those in the current data.

#### c. Modifications for Both Files
1. Remove the **Leadership team**.
2. Define dummy variables for `FaLinkedin` and `FaGithub` using the following code:
   
   ```typescript
   // Mock variables
   const FaLinkedin = "FaLinkedin";
   const FaGithub = "FaGithub";
   ```

---

## Running the Script

### 1. Compile TypeScript
Navigate to the directory containing the TypeScript file and run:
```sh
tsc
```

### 2. Execute the Script
After generating the JavaScript files, run:
```sh
node teams_ts_data_compare.js
```

