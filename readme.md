Steps to follow:

1. Make sure to have typescript installed, use : `npm i -g typescript`
2. You need to input the incoming and current data in ts files under data folder:
    a. For current, just copy paste
    b. For incoming, you will need to do a Find&Replace on ' Team' (yes there is a space character in beg.) (case sensitive) which is will make sure the team names match the team names in the current data.
    c. In both the files:
        c1. Remove the Leadership team
        c2. Make dummy variables for FaLinkedin and FaGithub using the following code:
        `// Mock variables
        const FaLinkedin = "FaLinkedin";
        const FaGithub = "FaGithub";
        `
To run:

1. just make sure you are in the same directory as the ts file, and then do `tsc`
2. Now that you have the js files generated run the `node teams_ts_data_compare.js` 