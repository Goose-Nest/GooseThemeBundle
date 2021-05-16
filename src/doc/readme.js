import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const readme = `# ${repo.split('/')[1]}

${manifest.description}

<details>
<summary>## Mods Supported</summary>
<br>

- GooseMod
- Powercord
- BetterDiscord
- Vizality
</details>

<details>
<summary>## Screenshots</summary>
<br>

${manifest.screenshots.map((x) => `![Screenshot](${x})`).join('\n')}
</details>

<details>
<summary>## Installation</summary>
<br>
### Powercord & Vizality
1. In Discord's settings, go to Themes > Open CMD / Powershell / Terminal / Gitbash
2. Clone the theme via: \`\`\`
git clone https://github.com/${repo}
\`\`\`

## BetterDiscord
1. Download [the theme.css file](https://raw.githubusercontent.com/${repo}/main/${manifest.name.replaceAll(' ', '')}.theme.css) to your BD themes directory

## GooseMod
1. Use the built-in store in settings to search and install
</details>`;

  writeFileSync(join(cwd, `README.md`), readme);
};
