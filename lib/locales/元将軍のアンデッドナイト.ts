/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '元将軍のアンデッドナイト';

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

	['蘭貝爾|蘭伯特', '蘭貝爾'],
	['朵拉庫洛華|德拉庫洛瓦|德拉克罗瓦', '德拉庫洛瓦'],

	/**
	 *
	 */
	['菲歐娜', '菲歐娜'],

	/**
	 * 雷基歐斯
	 *
	 * 里布誒爾街
	 *
	 * 歐鮑克伯爵
	 * 艾因扎絲
	 */
	['雷基歐斯|雷吉亞斯|雷吉歐斯', '雷吉歐斯'],
	['古力夫', '古力夫'],
	['奧雷利亞|奧蕾莉亞|奧萊莉亞', '奧蕾莉亞'],
	['卡爾特|卡?特羅|基霍特', '卡爾特'],

	/**
	 * 艾因扎絲
	 * 羅伊德和莉莉
	 */
	['歐波卡庫|歐鮑克|歐博克', '歐鮑克'],
	['艾因薩斯|艾因扎絲', '艾因扎絲'],
	['精霊の竈', '精靈之竈'],
	['精靈的黃昏', '精靈的黃昏'],
	['克雷多爾', '克雷多爾'],
	['魔金之龍', '魔金之龍'],
	['死霊的過道', '死霊的過道'],
	['傑爾曼', '傑爾曼'],
	['卡薩帕爾|卡斯帕爾', '卡薩帕爾'],
	['赫庫托爾|赫克託爾?', '赫庫托爾'],
	['艾梅拉|亞爾梅露', '艾梅拉'],

	/**
	 * 巴萊拉
	 * 雷格
	 * 舞動之劍
	 * 範多
	 */
	['莫德|蒙德', '蒙德'],
	['塔爾米亞|塔爾米婭|塔爾美亞', '塔爾米婭'],
	['迷い人の大森林|迷惑人的大森林|迷惑之森', '迷惑人的大森林'],
	['托爾克|拉爾克', '托爾克'],

	['克麗絲|克里斯', '克麗絲'],

	['殺戮馬戲団|屠殺馬戲団|殺戮曲馬団|杀戮曲馬団', '殺戮馬戲団'],
	['跳的劍|舞動之劍', '舞動之劍'],

	['巴萊拉市|(都城|都市|城市)巴萊拉', '都市巴萊拉'],

	['闇夜の時計塔|暗夜的时计塔|闇夜的時計塔', '闇夜的時計塔'],

	['古拉斯托|格拉斯科', '格拉斯科'],

	['羅賓漢', '羅賓漢'],
	['戰神', '戰神'],
	['瑟拉夫|塞拉弗|塞拉夫|撒拉弗|謝拉夫', '瑟拉夫'],

	['鬼蟻の軍勢|鬼蟻之軍勢', '鬼蟻之軍勢'],

	['迪亞士・比格因', '迪亞士・比格因'],

	['優諾斯', '優諾斯'],

	['范多|範多', '范多'],

	['夏露?娜|シャルナ', '夏露娜'],

	/**
	 *
	 */
	['笛吹(?:き|の)悪魔|吹笛の悪魔', '吹笛的惡魔'],
	['瑪尼伽|瑪妮伽|瑪尼迦', '瑪尼伽'],
	['布魯伊古', '布魯伊古'],

	['曼奇|芒西', '曼奇'],

	['阿達瑪莉亞|阿达玛利亞|阿达玛丽亞', '阿達瑪莉亞'],
	['半脸|半顔', '半顔'],

	['黒', '黒'],

	['炼金生物', '錬金生物'],

	['拉普烏普|ラウンプゥプ|劳恩帕布', '拉普烏普'],

	['屍玩の竜', '屍玩之竜'],

	/**
	 * 貝爾菲斯王國的被稱為吸血鬼的拷問狂奧達伊恩……瑪德拉克王國的掠奪王海爾尼寇思……阿爾古羅烏斯王國的人類最惡劣的煉金術師迦伊洛夫。然後是，我們雷吉歐斯王國的魔術師和大罪人，賢者多米里奧涅
	 */
	['(?:阿茹古(?:罗斯)?|阿爾古羅烏斯)王国', '阿爾古羅烏斯王国'],
	['盖洛夫|迦伊洛夫', '盖洛夫'],

	['多米尼奧涅|多米里奧涅|德米里奧涅', '多米尼奧涅'],

	['阿?德羅萊特斯', '阿德羅萊特斯'],

	['馬德爾庫|瑪德拉克', '瑪德拉克'],
	['貝魯佛斯|貝爾菲斯', '貝爾菲斯'],

	/**
	 * 奧格蘭峽谷
	 */
	['沃利米亞|華美利亞', '沃利米亞'],
	['瑪邱拉斯|瑪基拉斯', '瑪基拉斯'],

	/**
	 * 小鬼Goblin級，中鬼Oak級，大鬼Ogre級，巨鬼Troll級，竜Dragon級
	 * 魔金奧爾岡
	 * 鎧甲
	 * 雷吉歐尼克斯・奧爾加杰拉・裝甲
	 */
	['瑪娜', '瑪娜'],
	['歐魯嘉吉拉|奧爾加杰拉', '奧爾加杰拉'],
	[`雷吉歐尼克斯${sp}奧爾加杰拉${sp}(?:裝甲|鎧甲)`, '雷吉歐尼克斯・奧爾加杰拉・鎧甲'],
	['妖魔|魔物', '魔物'],
	['魔銀', '魔銀'],
	['秘絲利尔|ミスリル', '秘絲利尔'],

	/**
	 *
	 */
	...sublib.lazymarks['class'],

	['登録|登陸', '登録'],
	['製度', '制度'],
	['製服', '制服'],
	['這里', '這裡'],
	['(里|裏|裡)公會', '裏公會'],
	['工会|公会|行会', '公會'],
	['靈|霊', '靈'],
	['(長|紫)發', '$1髮'],
	['悪', '惡'],

	[/^　+/gm, ''],

	[/[\*\s]$/g, ''],

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
