## Purpose of the Script

This script is designed for the Seneca Hackathon IT team's internal tasks. The primary objective is to compare team data fetched by a Python script (which retrieves responses from Microsoft Forms and Google Forms) with the existing team data. By "team data," we refer to the internal teams of the Seneca Hackathon organization.

The custom instructions for modifying the incoming data are based on the inconsistencies reported in the incoming data from the aforementioned Python script.


## Steps to follow

1. Make sure to have TypeScript installed, use: `npm i -g typescript`
2. You need to input the incoming and current data in TypeScript files under the `data` folder:
    a. For current data, just copy and paste.
    b. For incoming data, you will need to do a Find & Replace on ' Team' (yes, there is a space character at the beginning) (case sensitive) to ensure the team names match the team names in the current data.
    c. In both files:
        1. Remove the Leadership team.
        2. Make dummy variables for `FaLinkedin` and `FaGithub` using the following code:
        ```typescript
        // Mock variables
        const FaLinkedin = "FaLinkedin";
        const FaGithub = "FaGithub";
        ```

## To run

1. Make sure you are in the same directory as the TypeScript file, and then run `tsc`.
2. Now that you have the JavaScript files generated, run `node teams_ts_data_compare.js`.