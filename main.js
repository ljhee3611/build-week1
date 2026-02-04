// Function to generate unique random numbers within a given range
export function generateLottoNumbers(count = 6, min = 1, max = 45) {
  const numbers = new Set();
  if (max - min + 1 < count) {
    // throw new Error("Cannot generate unique numbers. The range is smaller than the count.");
    // Instead of throwing an error, we can just return an empty array and the UI will show nothing.
    return [];
  }
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}