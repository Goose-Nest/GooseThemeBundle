import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const readme = `# ${repo.split('/')[1]}

${manifest.description}

## Mods Supported

- [Powercord](https://powercord.dev)
- [BetterDiscord](https://betterdiscord.app)`;

  writeFileSync(join(cwd, `README.md`), readme);
};