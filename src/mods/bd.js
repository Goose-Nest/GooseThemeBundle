import { writeFileSync } from 'fs';
import { join } from 'path';

import sass from 'sass';

export default (cwd, manifest, repo) => {
  const repoSplit = repo.split('/');

  const compiled = (sass.renderSync({ file: 'src/main.scss' })).css;
  writeFileSync('src/main.css', compiled);

  const css = `/**
  * @name ${manifest.name}
  * @author GooseNest
  * @donate https://github.com/sponsors/CanadaHonk
  * @description ${manifest.description}
  * @invite neMncS2
  * @source https://${repoSplit[0]}.github.io/${repoSplit[1]}/src/${manifest.name.replaceAll(' ', '')}.theme.css
  * @website https://github.com/${repo}
  * @version ${manifest.version}
*/

@import url('https://${repoSplit[0]}.github.io/${repoSplit[1]}/src/main.css');`

  writeFileSync(join(cwd, `${manifest.name.replaceAll(' ', '')}.theme.css`), css);
};
