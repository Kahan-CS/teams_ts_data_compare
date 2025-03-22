"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Load the TS files (they could be exporting an object rather than an array)
const incoming = require("./data/incoming");
const current = require("./data/current");
// Helper to get the teams array from the imported data
function getTeamsArray(data) {
    if (Array.isArray(data)) {
        return data;
    }
    else if (Array.isArray(data.default)) {
        return data.default;
    }
    else if (Array.isArray(data.teams)) {
        return data.teams;
    }
    else {
        throw new Error("Unexpected data format. Expected an array of teams.");
    }
}
// Function to extract members from teams
function extractMembers(data) {
    const teams = getTeamsArray(data);
    const membersMap = {};
    teams.forEach((team) => {
        if (team.members && Array.isArray(team.members)) {
            team.members.forEach((member) => {
                if (member.socialLinks && member.socialLinks.length > 0) {
                    if (!membersMap[member.name]) {
                        membersMap[member.name] = [];
                    }
                    membersMap[member.name].push(member.description);
                }
            });
        }
    });
    return membersMap;
}
// Extract members from both files
const incomingMembers = extractMembers(incoming);
const currentMembers = extractMembers(current);
const mismatchedDescriptions = [];
const missingInCurrent = [];
const removedFromIncoming = [];
// Check for mismatched descriptions & missing members
for (const name in incomingMembers) {
    if (currentMembers[name]) {
        if (JSON.stringify(incomingMembers[name].sort()) !==
            JSON.stringify(currentMembers[name].sort())) {
            mismatchedDescriptions.push(name);
        }
    }
    else {
        missingInCurrent.push(name);
    }
}
// Check for removed members (present in current but not in incoming)
for (const name in currentMembers) {
    if (!incomingMembers[name]) {
        removedFromIncoming.push(name);
    }
}
// Print results
console.log("Mismatched Descriptions:", mismatchedDescriptions);
console.log("Missing in Current:", missingInCurrent);
console.log("Removed from Incoming:", removedFromIncoming);
