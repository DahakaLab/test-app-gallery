export default class Pluralize {
  static pluralize(count: number, words: string[]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    const index = count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)];
    return words[index];
  }

  static pluralizePhrase(count: number, words: string[]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    if (count < 0) {
      const currentCount = count < 0 ? count * -1 : count;
      return `-${currentCount} ${words[(currentCount % 100 > 4 && currentCount % 100 < 20) ? 2 : cases[Math.min(currentCount % 10, 5)]]}`;
    }
    return `${count} ${words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]]}`;
  }
}
