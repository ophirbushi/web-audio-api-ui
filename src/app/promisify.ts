export function promisify(cls, ...args): Promise<any> {
  return new Promise((resolve, reject) => {
    const instance = new cls(...args, () => resolve(instance));
  });
}
