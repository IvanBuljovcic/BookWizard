module.exports = (componentName) => ({
content: `// Generated with util/create-component.js
export interface I${componentName}Props {
  foo: string;
}
`,
extension: `.types.ts`
});