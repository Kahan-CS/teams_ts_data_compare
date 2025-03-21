import fs from "fs";

// Load and parse the TS files
const incoming: any = require("./data/incoming");
const current: any = require("./data/current");

interface Member {
  name: string;
  description: string;
  socialLinks?: { icon: any; url: string }[];
}

// Function to extract members from teams
function extractMembers(data: any): Record<string, string[]> {
  const membersMap: Record<string, string[]> = {};
  data.forEach((team: any) => {
    team.members.forEach((member: Member) => {
      if (member.socialLinks && member.socialLinks.length > 0) {
        if (!membersMap[member.name]) {
          membersMap[member.name] = [];
        }
        membersMap[member.name].push(member.description);
      }
    });
  });
  return membersMap;
}

// Extract members from both files
const incomingMembers = extractMembers(incoming);
const currentMembers = extractMembers(current);

const mismatchedDescriptions: string[] = [];
const missingInCurrent: string[] = [];
const removedFromIncoming: string[] = [];

// Check for mismatched descriptions & missing members
for (const name in incomingMembers) {
  if (currentMembers[name]) {
    if (
      JSON.stringify(incomingMembers[name].sort()) !==
      JSON.stringify(currentMembers[name].sort())
    ) {
      mismatchedDescriptions.push(name);
    }
  } else {
    missingInCurrent.push(name);
  }
}

// Check for removed members
for (const name in currentMembers) {
  if (!incomingMembers[name]) {
    removedFromIncoming.push(name);
  }
}

// Print results
console.log("Mismatched Descriptions:", mismatchedDescriptions);
console.log("Missing in Current:", missingInCurrent);
console.log("Removed from Incoming:", removedFromIncoming);
