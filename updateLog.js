let updateLogs = 
`
<hr>
<h1>V1.5</h1>
<p> Date: 2024/03/31 </p>
    <h2>Features added</h2>
      <strong>Disabled Right Click</strong>
        This is to prevent miss clicks that mess up the game
      <strong>Cops Added</strong>
        After collecting so many printers, you will have a chance of the cops coming and taking everything! All you have to do is evade them by typing in the givin' code!
    <h2>Improved Features</h2>
    <strong>Dig Site Rewards</strong>
      - You can now get money from digging in the dig site!
    <strong>Improved Dig Site</strong>
      - Ui and other features now improved & more responsive! 
    <h2>Bug Fixes</h2>
    
    <h2>Temporary Problems</h2>
<hr>
<h1>V1.4</h1>
<p>Date: 2024/03/28</p>

    <h2>Features added</h2>
    <ul>
        <li><strong>Version added</strong><br>
            You may now see your version in the bottom of the screen.
        </li>
    </ul>

    <h2>Improved Features</h2>
    <ul>
        <li><strong>Move Stats</strong><br>
            Moved stats into its own menu.
        </li>
        <li><strong>Moved Menus</strong><br>
            Menus will now open on the left of your screen instead of the middle.
        </li>
        <li><strong>Lots more Achievements</strong><br>
            I have added lots more achievements! These should keep you on your toes for a while ;)
        </li>
    </ul>

    <h2>Bug Fixes</h2>
    <ul>
        <li>None</li>
    </ul>

    <h2>Temporary Problems</h2>
    <ul>
        <li><strong>Settings changed</strong><br>
            There is no longer a way to change your theme (To be added later).
        </li>
    </ul>
<hr>
<h1>V1.3</h1>
<p>Date: 2024/03/27</p>

<h2>Features added</h2>
1. <strong>A way to close menus</strong> <br>
    I have added a little "X" to make it easier to get out of menus, especially on mobile. <br>
2. <strong>New area!</strong> <br>
    I have added a digsite! you can click around and try to find artifacts! These artifacts will give you boosters! <strong>Upgrades are still in progress and this feature is still in beta! Expect bugs!</strong> <br>
    You have a 1 in 100 chance to find an artifact and chances for super rare ones! Can you collect them all? <br>
3  <strong>Offline Support!</strong> <br>
    You can now use this site offline!
    You can also install it and use it as an app!
<br>
<h2> Improved Features </h2><br>
1. <strong>More Achievements</strong><br>
   There are now Even more Achievements!!! I know right. can you believe it!<br>
   <br>
<h2> Bug Fixes </h2> <br>
`;

let updateLog = document.querySelector("#updateLog");

function addUpdates() {  // Call this function to add the update
  updateLog.innerHTML += `</br> ${updateLogs}`;
};

addUpdates()
