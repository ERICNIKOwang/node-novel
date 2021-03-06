/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_en } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = '';

/**
 * 其他用途
 *
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words: IWords[] = sublib._word_zh_all([

	['隷属の印|奴隶之印', '隷属之印'],
	['后宫', '後宮'],

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	[/(\S)\n(─+[ ]*[^─\n]+)/gm, '$1\n\n$2'],
	[/^(─+[ ]*[^─\n]+)\n(\S)/gm, '$1\n\n$2'],

	[/^[　\t ]+/gm, ''],

	_word_en(/\d+/g, function (...m)
	{
		if (m[1] == '─')
		{
			m[1] = '—';
		}

		return m[1] + StrUtil.toFullNumber(m[2]);
	}),

	_word_en(/O+/g, function (...m)
	{
		return m[1] + 'Ｏ'.repeat(m[2].length);
	}),

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

]);

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

] as vMaybe;

/**
 * 分析取代完成後執行的代碼
 *
 * @param {string} text
 * @returns {string}
 */
export function words_callback(text: string): string
{
	return text;
}

export default exports;
