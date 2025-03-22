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