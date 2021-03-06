import { readFileSync } from 'fs';
import { join } from 'path';

import pc from './mods/pc.js';
import bd from './mods/bd.js';
import vz from './mods/vz.js';

import readme from './doc/readme.js';
import license from './doc/license.js';

const cwd = process.cwd();

const manifestPath = join(cwd, 'gnTheme.mjs');
const manifest = (await import(manifestPath)).default;

const gitConfig = readFileSync(join(cwd, '.git', 'config'), 'utf8');
const repo = gitConfig.match(/url = git@github.com:(.*).git/)[1];

for (const func of [ pc, bd, vz, readme, license ]) {
  func(cwd, manifest, repo);
}