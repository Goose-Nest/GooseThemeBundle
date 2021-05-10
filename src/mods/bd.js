import { writeFileSync } from 'fs';
import { join } from 'path';

export default (cwd, manifest, repo) => {
  const css = `/**
  * @name ${manifest.name}
  * @author GooseNest
  * @description ${manifest.description}
  * @invite neMncS2
  * @version ${manifest.version}
*/

@import url('https://raw.githack.com/${repo}/main/src/main.css');`

  writeFileSync(join(cwd, `${manifest.name.replace(' ', '')}.theme.css`), css);
};