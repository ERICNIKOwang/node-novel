/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_en, _word_jp1 } from './lib/index';

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

export const words_source: IWords[] = [



	['クレア|克蕾婭|克蕾雅', '克蕾婭'],
	['卡盖諾|カゲノー', '卡盖諾'],

	['アルファ|阿爾法', '阿爾法'],
	['ベータ|貝塔', '貝塔'],
	['エルフ|精靈', '精靈'],
	['デルタ|德爾塔', '德爾塔'],

	['シャドウガーデン|影守', '影守'],
	['シャドウ|暗影', '暗影'],

	['(シャドウ|暗影)(様|大人)戰記', '暗影大人戰記'],

	['ミドガル|米德嘉爾', '米德嘉爾'],
	['アレクシア|阿蕾克西雅', '阿蕾克西雅'],
	['アイリス|愛麗絲', '愛麗絲'],

	['イプシロン|艾普西隆', '艾普西隆'],

	['シェリー|雪莉', '雪莉'],
	['巴内特|バーネット', '巴内特'],

	_word_en('希德|シド', '希德'),
	['加里', '加里'],
	_word_en('紐|ニュー', '紐'),

	_word_en('ローズ|萝茲', '蘿茲'),
	['奧利雅納|オリアナ', '奧利雅納'],

	['オリヴィエ|奧利維埃|奧勞拉|奧利維婭', '奧利維埃'],
	['安妮洛潔|アンネローゼ', '安妮洛潔'],
	['維加爾泰|ベガルタ', '維加爾泰'],

	['奧蘿拉|アウロラ', '奧蘿拉'],

	['ガンマ|伽瑪', '伽瑪'],

	['リンドブルム|林德布爾穆', '林德布爾穆'],
	['ベアートリクス|貝婭特麗克絲?', '貝婭特麗克絲'],
	['ベアトリクス|貝雅托麗克絲', '貝雅托麗克絲'],

	/**
	 *
	 */
	['ゴルドー|戈爾德', '戈爾德'],
	['クイントン|奎因頓', '奎因頓'],

	_word_jp1('米莉婭|ミリア|米莉亞', '米莉婭'),
	['伊麗莎白|エリザベート', '伊麗莎白'],

	_word_jp1('マリー|瑪麗', '瑪麗'),

	_word_jp1('庫洛緹婭|クローディア', '庫洛緹婭'),

	_word_jp1('クリムゾン|深紅', '深紅'),

	_word_jp1('ユキメ|雪姫', '雪姫'),

	_word_jp1('ジャガノート|賈伽諾特', '賈伽諾特'),

	/**
	 *
	 */
	_word_jp1('ゼニー|澤尼', '澤尼'),

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	['陰の実力者|影之实力者', '影之實力者'],

	['七陰|七阴', '七陰'],

	['紅の塔|紅塔', '紅之塔'],

	['魔剣士協会|魔劍士協會', '魔劍士協會'],

	_word_en('BOOS', '$1BOSS', 'ig'),

	[/^　/gm, ''],

	['全\\*果', '全裸'],

	...sublib.lazymarks['class'],

	_word_en(/\d+g/ig, function (...m: string[])
	{
		return m[1] + StrUtil.toFullWidth(m[2].toUpperCase());
	}),

	_word_en(/\d+/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}),

	_word_en(/[a-z]/ig, function (...m)
	{
		return m[1] + StrUtil.toFullEnglish(m[2]);
	}),

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

] as IWords[]);

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
