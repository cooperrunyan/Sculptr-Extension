export const platforms = [
  { value: 'Next', description: 'Build a Next JS app' },
  { value: 'React', description: 'Build a React app' },
] as const;

export const scripts = [
  { value: 'Typescript', description: 'Use Typescript as a scripting language' },
  { value: 'Javascript', description: 'Use Javascript as a scripting labguage' },
] as const;

export const styles = [
  { value: 'Scss', description: 'Use Scss as a styling language' },
  { value: 'Sass', description: 'Use Sass as a styling language' },
  { value: 'Css', description: 'Use Css as a styling language' },
] as const;

type Configuration = {
  script: typeof scripts[number]['value'];
  style: typeof styles[number]['value'];
  platform: typeof platforms[number]['value'];
};

export default Configuration;
