import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const repoSplit = repo.split('/');

  const css = `/**
  * @name ${manifest.name}
  * @author GooseNest
  * @description ${manifest.description}
  * @invite neMncS2
  * @version ${manifest.version}
*/

@import url('https://${repoSplit[0]}.github.io/${repoSplit[1]}/src/main.css');`

  writeFileSync(join(cwd, `${manifest.name.replaceAll(' ', '')}.theme.css`), css);
};
