let updateLogs = 
`
<h1> Date: 2024/03/27
<h2>Features added</h2>
1. <strong>A way to close menus</strong> <br>
    I have added a little "X" to make it easier to get out of menus, especially on mobile. <br>
2. <strong>New area!</strong> <br>
    I have added a digsite! you can click around and try to find artifacts! These artifacts will give you boosters! <strong>Upgrades are still in progress and this feature is still in beta! Expect bugs!</strong> <br>
    You have a 1 in 100 chance to find an artifact and chances for super rare ones! Can you collect them all?
<hr>
<h2> Improved Features </h2><br>
1. <strong>More Achievements</strong><br>
   There are now Even more Achievements!!! I know right. can you believe it!<br>
   <hr>
<h2> Bug Fixes </h2> <br>
`;

let updateLog = document.querySelector("#updateLog");

function addUpdates() {  // Call this function to add the update
  updateLog.innerHTML += `</br> ${updateLogs}`;
};

addUpdates()
