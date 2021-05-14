import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const vzManifest = {
    name: manifest.name,
    description: manifest.description,

    version: manifest.version,
    author: 'GooseNest',
    license: 'MIT',

    theme: `src/main.scss`
  };

  writeFileSync(join(cwd, 'manifest.json'), JSON.stringify(vzManifest, null, 2));
};
