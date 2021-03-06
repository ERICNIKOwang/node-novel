/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '魔王様、リトライ！';

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
export const words_source: IWords[] = [

	/**
	 *
	 */
	[`(?:霧|雾)雨`, '霧雨'],
	[`零`, '零'],
	[`悠`, '悠'],

	[`阿庫`, '惡'],

	...[
		'桐野　悠',
		'霧雨　零',
		'宮王子　蓮',
		'的場　静',
		'加藤　勝',
		'近藤　友哉',
		'田原　勇',
		'野村　武文',
	].reduce(function (a, b)
	{
		let c = b.split('　');

		a.push([c.join(''), b]);
		a.push([c.join(sp), b]);

		return a;
	}, []),

	/**
	 *
	 */
	[`托路|托珑|托泷|托拢|tron`, '托瓏'],
	[`琼恩|裘恩`, '琼恩'],

	/**
	 *
	 */
	[`露娜${sp}愛蕾岗特`, '露娜・愛蕾崗特'],
	[`(?:琪拉|琪菈)`, '琪菈'],
	[`(?:琪拉|琪菈)古依`, '琪菈・古依'],
	[`(?:琪拉|琪菈)${sp}古依`, '琪菈・古依'],


	[`安洁露|安潔拉`, '安潔露'],
	[`安洁露霍瓦伊特`, '安潔露・霍瓦伊特'],
	[`安洁露${sp}霍瓦伊特`, '安潔露・霍瓦伊特'],

	/**
	 *
	 */
	[`玛乌托福吉`, '瑪烏托・福吉'],
	[`玛乌托${sp}福吉`, '瑪烏托・福吉'],
	[`多納${sp}多納`, '多納・多納'],

	[`多那行館`, '多納行館'],

	[`玛夏魯|玛夏露`, '瑪夏魯'],
	[`玛夏魯${sp}安茨`, '瑪夏魯・安茨'],

	[`比利茨${sp}兰克`, '比利茨・蘭克'],
	[`欧${sp}文古魯`, '歐・文古魯'],

	[`艾比福莱伊|艾比富莱特|艾比富莱依`, '艾比福莱依'],

	[`艾比福莱依${sp}巴塔福莱依`, '艾比福莱依・巴塔福莱依'],

	[`玛妲穆|MADAME`, '瑪妲穆'],

	[`卡其福莱依|卡琪芙萊伊`, '卡其福莱依'],

	[`玛妲穆${sp}巴塔福莱依`, '瑪妲穆・巴塔福莱依'],
	[`(?:夫人|玛妲穆)${sp}艾比福莱依`, '瑪妲穆・艾比福莱依'],

	[`卡其福莱依${sp}巴塔福莱依`, '卡其福莱依・巴塔福莱依'],
	[`玛妲穆卡其福莱依`, '瑪妲穆・卡其福莱依'],
	[`玛妲穆${sp}卡其福莱依`, '瑪妲穆・卡其福莱依'],

	[`兰迪${sp}玛涅`, '蘭迪・瑪涅'],

	[`兰波|萨波`, '薩波'],
	[`科曼多${sp}萨波`, '科曼多・薩波'],

	[`米利岗|米利崗`, '米利崗'],

	[`雪風|雪风`, '雪風'],
	[`蜜柑|蜜康`, '蜜康'],

	[`瑪涅|曼登|マンデン`, '瑪涅'],
	[`宾格|賓果`, '賓格'],

	/**
	 * 尤里蒂耶斯王国
	 */
	[`尤里蒂耶斯`, '尤里蒂耶斯'],
	[`尤里`, '尤里'],
	[`傑克商會`, '傑克商會'],
	[`傑克`, '傑克'],

	[`艾茲`, '艾茲'],

	/**
	 *
	 */
	['兔子之?村|拉比之?村', '拉比村'],
	[`Love${sp}Prison`, 'Love・Prison', 'ig'],

	['城镇路奇|路奇城', '路奇城'],
	['路奇|rookie|ルーキー', '路奇'],

	/**
	 *
	 */
	['歐魯伊特|欧魯依特|オルイット|Orbite', '歐魯伊特'],

	/**
	 *
	 */
	['红斑的?蛇|赤链蛇|赤斑の?蛇|赤煉蛇', '赤煉蛇'],
	['拉姆达聖货|拉姆达聖币', '拉姆達聖幣'],

	['時尚檢查', '時尚檢查'],

	['情報の一部が公開されました。|一部份的情報已公開。', '一部份的情報已公開。'],



];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	['兔[儿]', '兔耳'],
	['野戦病院|野戰醫院', '野戰病院'],
	['冷水浴|冷泉浴', '冷泉浴'],

	[/对冰\.魔防/g, '对冰・魔防'],
	['記録改竄|記錄竄改', '記錄竄改'],

	['素体', '素体'],
	['讀才者|独裁者', '獨裁者'],

	[/W?usa/ig, 'Wusa'],
	[/(\W)maa(?!\w)/ig, '$1嘛'],

	['貝者場|賭場', '賭場'],

	['悪', '惡'],
	[`玛`, '瑪'],
	[`戦`, '戰'],

	[`【`, '「'],
	[`】`, '」'],

	[/^\*{3,}$/gm, '■□■□'],

	[/^\.$/gm, ''],

	[/^　+/gm, ''],

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	...sublib.lazymarks['full_width_001'],
	...sublib.lazymarks['full_width_002'],

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
