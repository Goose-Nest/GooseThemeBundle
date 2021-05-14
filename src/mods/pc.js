import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const pcManifest = {
    name: manifest.name,
    description: manifest.description,

    version: manifest.version,
    author: 'GooseNest',
    license: 'MIT',

    theme: `src/main.scss`
  };

  writeFileSync(join(cwd, 'powercord_manifest.json'), JSON.stringify(pcManifest, null, 2));
};
