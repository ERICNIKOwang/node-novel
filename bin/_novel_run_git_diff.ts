/**
 * Created by user on 2018/5/21/021.
 */

import * as crossSpawn from 'cross-spawn';
import * as path from 'path';
import gitDiffIDNovelID from '../lib/git';
import ProjectConfig from '../project.config';
import * as Promise from 'bluebird';
import * as fs from 'fs-extra';
import { array_unique } from '../lib/func';
import novelInfo, { mdconf_parse, IMdconfMeta } from 'node-novel-info';
import * as yargs from 'yargs';
import { console } from 'debug-color2';
import prettyuse = require('prettyuse');

let cli = yargs
	.argv
;

let arr_ids = gitDiffIDNovelID(ProjectConfig.dist_novel_root);

let _cache_file = path.join(
	ProjectConfig.temp_root,
	path.basename(__filename) + '.json'
);

if (arr_ids.length == 1)
{
	fs.outputJSONSync(_cache_file, arr_ids);
}
else if (arr_ids.length == 0 && fs.existsSync(_cache_file))
{
	arr_ids = fs.readJSONSync(_cache_file);
	console.info(`使用上次執行的目錄`, arr_ids);
}

const localesPath = path.join(ProjectConfig.project_root, './lib/locales');

Promise
	.mapSeries(arr_ids, async function ({
		pathMain,
		novelID,
	})
	{
		let myLocalesID = '';

		let cwd_path = path.join(ProjectConfig.dist_novel_root, pathMain, novelID);

		let meta: IMdconfMeta;

		if (fs.existsSync(path.join(cwd_path, 'meta.md')))
		{
			meta = await fs.readFile(path.join(cwd_path, 'meta.md'))
				.then(mdconf_parse)
		}
		else if (fs.existsSync(path.join(cwd_path, 'README.md')))
		{
			meta = await fs.readFile(path.join(cwd_path, 'README.md'))
				.then(mdconf_parse)
		}

		if (meta)
		{
			if (!myLocalesID)
			{
				myLocalesID = searchLocalesID([
					meta.options && meta.options.novel && meta.options.novel.pattern,

					novelID,

					meta.novel.title,

					meta.novel.title_short,
					meta.novel.title_zh,
					meta.novel.title_jp,

					// @ts-ignore
					meta.novel.title_output,

					/**
					 * 依據系列名稱來自動選擇檔案
					 */
					meta.novel.series && meta.novel.series.name,
					meta.novel.series && meta.novel.series.name_short,

					// @ts-ignore
					meta.novel.title_tw,
					// @ts-ignore
					meta.novel.title_cn,
					// @ts-ignore
					meta.novel.title_other,
					// @ts-ignore
					meta.novel.title_source,

					// @ts-ignore
					meta.novel.title_en,
				]);

				if (myLocalesID)
				{
					console.debug(`自動將 myLocalesID 設置為 ${myLocalesID}`);
				}
			}
		}

		let cp = crossSpawn.sync('node', [
			path.join(__dirname, '../src/novel-demo'),
			'-m',
			pathMain || '',
			'-l',
			myLocalesID || '',
			'-n',
			novelID || '',
			'--patternOnly=' + (cli.patternOnly ? 1 : 0).toString(),
		], {
			stdio: 'inherit',
		});

		console.log(cp.pid, pathMain, novelID,);
	})
;

function searchLocalesID(ids: string[])
{
	let myLocalesID: string;

	for (let name of ids)
	{
		if (!name || typeof name !== 'string')
		{
			continue;
		}

		let p = path.join(localesPath, name);

		if (fs.existsSync(p + '.ts'))
		{
			myLocalesID = name;
			break;
		}
	}

	return myLocalesID;
}
