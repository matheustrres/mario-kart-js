<h1>DIO project challenge: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./assets/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objective:</b>
                <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge will be to create a video game logic to simulate Mario Kart races, taking into account the rules and mechanics below.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./assets/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Maneuverability: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./assets/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Maneuverability: 4</p>
                <p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./assets/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Maneuverability: 4</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./assets/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 5</p>
                <p>Maneuverability: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./assets/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Maneuverability: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./assets/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Maneuverability: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules & mechanics:</h3>

<b>Players:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">The computer must be given two characters to race on one object each</label>

<b>Tips:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">The characters will race on a random track for 5 rounds</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">Each round, a block of the track will be drawn, which can be a straight, a bend or a showdown</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">If the track block is a straight line, the player must throw a 6-sided die and add up the SPEED attribute, whoever wins gets a point</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">If the track block is a CURVE, the player must throw a 6-sided dice and add the MANEUVERABILITY attribute, whoever wins gets a point</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">If the block on the track is a SHOWDOWN, the player must throw a 6-sided die and add the POWER attribute, whoever loses, loses a point</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">No player can have a negative score (values below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Victory condition:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">In the end, whoever has accumulated the most points wins</label>

## Running locally

Clone the project:

```bash
git clone https://github.com/matheustrres/mario-kart-js.git
```

Enter the project directory:

```bash
cd mario-kart-js
```

Install the necessary dependencies:

```bash
pnpm install
```

Start the project:

```bash
pnpm start
```
