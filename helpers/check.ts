export default class Check {
  static checkLength(value: string, min: number, max: number): Array<boolean> {
    const result: Array<boolean> = [];
    result[0] = value.length < min;
    result[1] = value.length > max;
    return result;
  }

  static required(value: any): boolean {
    if (typeof value === 'boolean') return true;
    if (typeof value === 'number') return true;
    if (typeof value === 'string' && value.length > 0) return true;
    return false;
  }

  static email(value: any): boolean {
    if (typeof value === 'string') {
      return /\S+@\S+\.\S+/.test(value);
    }
    return false;
  }
}
