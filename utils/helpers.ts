export function splitCamelCaseToPascalCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase
    .replace(/^./, (str) => str.toUpperCase()); // Convert the first character to uppercase
}
