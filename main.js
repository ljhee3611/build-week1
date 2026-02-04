// Function to generate unique random numbers between 1 and 45
export function generateLottoNumbers(count = 6) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}