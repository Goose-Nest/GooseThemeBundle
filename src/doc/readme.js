import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const readme = `# ${repo.split('/')[1]}

${manifest.description}

<details>
<summary><strong>Mods Supported</strong></summary>

- GooseMod
- Powercord
- BetterDiscord
- Vizality
</details>

<details>
<summary><strong>Screenshots</strong></summary>

${manifest.screenshots.map((x) => `![Screenshot](${x})`).join('\n')}
</details>

<details>
<summary><strong>Installation</strong?</summary>

### Powercord & Vizality
1. In Discord's settings, go to Themes > Open CMD / Powershell / Terminal / Gitbash
2. Clone the theme via: \`git clone https://github.com/${repo}\`

## BetterDiscord
Download [the theme.css file](https://raw.githubusercontent.com/${repo}/main/${manifest.name.replaceAll(' ', '')}.theme.css) to your BD themes directory.

## GooseMod
Use the built-in store in settings to search and install.
</details>`;

  writeFileSync(join(cwd, `README.md`), readme);
};
