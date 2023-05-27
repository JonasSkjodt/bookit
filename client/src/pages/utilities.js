export function randomNumberInRange() {
    // 👇️ get number between min (inclusive) and max (inclusive)
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }