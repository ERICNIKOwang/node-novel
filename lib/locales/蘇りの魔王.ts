/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '蘇りの魔王';

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

	/**
	 * 麦蒂亞
	 * 加蒂斯洛拉
	 * 帕多利克
	 */
	['拉斯帝|拉司蒂|拉斯蒂|拉蒂斯', '拉斯帝'],
	['(优|尤)蜜(思|絲)?|尤米斯', '优蜜絲'],
	['古蓝|格兰', '古蓝'],
	['麦蒂亞|麦蒂婭|美蒂亞?', '麦蒂亞'],
	['加蒂斯諾拉|加蒂斯洛拉|卡迪斯諾拉', '加蒂斯洛拉'],
	['帕多立克|帕多利克|帕特里克', '帕多利克'],

	/**
	 * 缪多斯还是雷努
	 * 伊莉絲
	 */
	['(魯魯|露露)(魯魯)?', '魯魯'],
	['(魯魯)?斯利(阿|安)', '魯魯斯利安'],
	['达尔斯罗拉|达耶斯諾拉|塔伊茲諾拉', '达耶斯諾拉'],
	['伊丽絲|伊莉絲|伊莉斯|伊利斯', '伊莉絲'],
	['帕卡斯|巴克斯', '帕卡斯'],

	/**
	 * 迪西艾尔多
	 * 城塞都市菲納魯
	 *
	 * 赫梅萝丝（ヒメロスだ）
	 * 雪纺的样子【シフォン、Shifonn、法語的雪纺绸。起名无力】
	 *
	 * 苏埃拉（スエラ）山脉
	 *
	 * 艾琳
	 *
	 * 国王陛下グリフィズ?ラント?林納德
	 *
	 * 洛特斯
	 * 希梅洛斯・布拉基亞雷（ヒメロス＝ブラッキアーレ）
	 */
	['罗纳德|勒拉多|雷纳德|雷納多|萊納德|林納德', '雷納德'],
	['德斯厄路托|迪西艾尔多', '迪西艾尔多'],

	['戚风|雪纺', '雪纺'],
	['伽亞|加亞', '伽亞'],

	['时代的探索者|時代の探求者|時代の?探險者|時代的探究者', '時代の探求者'],
	['罗特斯|洛特斯', '洛特斯'],

	['阿格諾斯|艾格諾斯', '艾格諾斯'],

	['赫梅萝丝|希梅洛斯|希梅洛絲', '希梅洛絲'],


	/**
	 * 克拉姆
	 * 女神瑟瓦薩雀德司（サエワサチェドーズ）
	 * 阿魯卡聖国的首都、位於神都奧德蓮（オードレン）之中的卡德拉斯大聖堂（ガトラス大聖堂）
	 */
	['亞路嘉|阿魯卡', '阿魯卡'],
	['奧德倫|奧德蓮', '奧德倫'],

	['(聖神|神聖)教徒', '聖神教徒'],

	/**
	 *
	 */
	['荷希茨露草|ホシツル草', '荷希茨露草'],
	['機械|器械', '機械'],
	['魔砲', '魔砲'],
	['魔導砲', '魔導砲'],
	['砲', '砲'],
	['Sama', '桑'],

	['競技大會|闘技大会|鬥技大賽', '闘技大会'],

	['(古族|古代)(精灵|妖精)', '古族精灵'],


	['工会|公会|行会', '公会'],

	[/^【([^】\n]+)】$/gm, '「$1」'],

	[/([\u4E00-\u9FFF])=([\u4E00-\u9FFF])/, '$1＝$2'],

	...sublib.lazymarks['class'],

	[/^　/gm, ''],

	...sublib.lazymarks[4],

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
