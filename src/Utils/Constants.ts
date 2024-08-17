export const JSON_END_POINT =
  "https://raw.githubusercontent.com/Just-a-Jason/NostalgiaNexusData/main/jasonbpgames.json";

const CHARACTERS = [
  "William",
  "GoldenFreddy",
  "Cupcake",
  "Springtrap",
  "Foxy",
  "NightmareFoxy",
  "Freddy",
  "Chica",
  "Bonnie",
];

export abstract class Character {
  public static random(): string {
    const CHARACTER = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

    return `Sprites/${CHARACTER}.webp`;
  }
}
