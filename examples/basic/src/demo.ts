type User = { id: number; name?: string };

export function greet(u: User) {
  const { id } = u;
  return `Hello ${id}`;
}