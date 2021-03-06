/**
 * Created by user on 2017/12/21/021.
 */
///<reference lib="es2018.regexp"/>

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_en, lazymarks, _word_jp1 } from './lib/index';
import { words_source as import_words_source } from './リビティウム皇国のブタクサ姫';

/**
 * 改成小說名字 (可留白 則自動設定為檔案名稱)
 */
export const lang = '';

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words_source: IWords[] = [

	_word_jp1('緋雪|ヒユキ|Hiyuki', '緋雪'),
	['佐倉藍子|左倉藍子', '佐倉藍子'],
	['綾瀬奏', '綾瀬奏'],

	/**
	 *
	 */
	//['インペリアル|伊帕利亞爾', '伊帕利亞爾'],
	//['古里姆索|クリムゾン', '古里姆索'],

	[`(?:伊帕利亞爾|インペリアル|帝国|Imperial)${sp}(?:古里姆索|クリムゾン|深紅|緋紅|Crimson)`, '真紅帝國', 'ig'],

	['タメゴロー|德米哥羅|塔梅古勒|五月伊呂波', '五月伊呂波'],
	['ラポック|拉帕古|らぽっく|拉伯庫|拉皤克', '拉帕古'],

	['壱岐', '壱岐'],
	['双樹', '双樹'],
	['命都', '命都'],
	['周参', '周参'],
	['天涯', '天涯'],
	['刻耀', '刻耀'],
	['空穂', '空穂'],
	['蔵肆', '蔵肆'],
	['零璃', '零璃'],
	['斑鳩', '斑鳩'],
	['出雲', '出雲'],
	['蔵王', '蔵王'],
	['七夕', '七夕'],
	['陸奥', '陸奥'],
	['八朔', '八朔'],
	['九重', '九重'],
	['五雲', '五雲'],
	['五運', '五運'],
	['始織', '始織'],

	_word_jp1('ウィス|維斯', '維斯'),
	['凱陣', '凱陣'],

	_word_jp1('震夜', '震夜'),

	_word_jp1('シンちゃん|辛醬', '辛醬'),
	_word_jp1('シン|辛', '辛'),

	/**
	 *
	 */
	_word_jp1('ソフィア|索菲亞', '索菲亞'),
	['輝夜', '輝夜'],

	/**
	 *
	 */
	_word_jp1('ジョーイ|喬伊', '喬伊'),
	_word_jp1('阿蘭特|アランド|艾蓮多|アランド|艾倫多|Arando', '阿蘭特'),

	_word_jp1('アーラ|亞拉|奧爾那', '亞拉'),

	_word_jp1('ミーア|米亞|米婭', '米婭'),

	_word_jp1('ガルテ|迦魯迪|迦魯德|格魯特|嘎魯多|嘎爾特|蓋魯特', '迦魯迪'),
	_word_jp1('バッソ|巴索|巴鑫', '巴索'),

	_word_jp1('コラード|格拿特|科拉德|格納特|格蘭奧多|寇拉德|克拉德|孔拉德|庫拉德', '科拉德'),
	_word_jp1('喬庫拉托爾|ジョクラトル', '喬庫拉托爾'),
	_word_jp1('アドルナート|亞特爾拿特|安德魯納多', '亞特爾拿特'),

	_word_jp1('フランコ|法蘭格', '法蘭格'),

	_word_jp1('フリーパス', 'フリーパス'),

	/**
	 *
	 */
	['カルディア|卡迪亞|卡迪納爾|卡魯迪亞|卡地亞', '卡魯迪亞'],

	_word_jp1('アシル|阿西爾|阿西路|阿西魯', '阿西爾'),
	['クロード|克勞德|庫羅德', '克勞德'],

	['アンジェリカ|安格莉卡|安潔莉卡|安吉莉卡', '安潔莉卡'],
	_word_jp1('イリス|伊里斯|伊利斯', '伊利斯'),

	_word_jp1('ジャンカルロ|潔卡露', '潔卡露'),
	_word_jp1('エリージョ|伊利', '伊利'),
	_word_jp1('ベルトーニ|伯托尼', '伯托尼'),

	['阿米提亞|アミティア|阿米替亞|阿米蒂亞|亞米迪亞|阿米迪亞', '阿米迪亞'],

	_word_jp1('卡魯洛|カルロ', '卡魯洛'),

	_word_jp1('弗盧碧亞|フルビア', '弗盧碧亞'),

	['ジョヴァンニ|喬萬尼', '喬萬尼'],
	['安東尼奧|アントニオ', '安東尼奧'],

	/**
	 *
	 */
	_word_jp1('基托|キトー', '基托'),

	/**
	 *
	 */
	['ケンスルーナ|森斯露娜|森斯路那|肯思魯娜|森思路那|肯斯魯-納|肯斯魯─納|肯森露娜', '森斯露娜'],
	_word_jp1('克萊斯|クレス|克里斯(?!德)|克魯斯|克萊烏|克羅斯|庫萊斯', '克萊斯'),

	['法布拉', '法布拉'],

	_word_jp1('雷烏安|レヴァン|盧邦|萊文|盧幫|魯邦|雷維安', '雷烏安'),
	['阿蘇米娜|アスミナ|阿米蘇娜|阿斯ミナ|阿絲米娜|阿斯米婭|阿斯米娜', '阿蘇米娜'],

	_word_jp1('吉瑟?斯|ジシス', '吉瑟斯'),
	_word_jp1('哈里|ハリ', '哈里'),

	['ン・ゲルブ', '恩・歌爾布'],

	_word_jp1('巴爾登|バルデム|巴魯特姆', '巴魯特姆'),
	['インドレニウス|因德列紐斯', '因德列紐斯'],
	['ザレヴスキ|扎雷布斯基', '扎雷布斯基'],

	['西里爾', '西里爾'],

	_word_jp1('エウゲン|歐根|尤金', '歐根'),

	_word_jp1('ファーブラーで|法布納|法布拉', '法布納'),

	['(?:尤斯|尤絲)大公(国)', '尤斯大公$1'],

	_word_jp1('阿克隆|阿克倫|アケロン|Acheron', '阿克隆'),

	/**
	 *
	 */
	_word_jp1('威利蒂|ウィリデ|威利戈|威蘭德|威利德', '威利蒂'),
	_word_jp1('威利蒂斯|ウィリディス', '威利蒂斯'),

	_word_jp1('クロエ|克洛伊|庫蕾|克羅艾|庫洛艾|庫洛伊', '克洛伊'),

	_word_jp1('菲歐蕾|フィオレ', '菲歐蕾'),

	/**
	 *
	 */
	['グラウィオール|葛洛伊奧爾萊|古拉伊奧─?魯|古拉維奧爾?|格拉畢歐魯|葛落奧爾萊|葛洛奧爾萊|古拉維歐羅', '古拉維奧爾'],

	_word_jp1('グラヴィア|古拉維亞', '古拉維亞'),

	['アルゼンタム|魯澤恩|Aruzentamu|阿爾贊塔姆|阿魯占塔姆|阿倫金達姆', '阿爾贊塔姆'],

	['ウォーレン|沃倫', '沃倫'],

	['オリアーナ|奧麗亞娜|奧莉安娜|奧里亞娜|奧利安娜|奧麗安娜|歐莉婭娜', '奧麗亞娜'],
	['アイネアス|埃尼亞斯|安妮拉斯|埃涅阿斯', '埃尼亞斯'],
	_word_jp1('ミルン|尼爾姆|米露恩', '米露恩'),

	_word_jp1('リィーナ|莉依娜|Riina', '莉依娜'),

	_word_jp1('ヴァルファング|瓦爾梵', '瓦爾梵'),
	_word_jp1('アドルファス|阿道夫', '阿道夫'),
	_word_jp1('カール|卡魯', '卡魯'),

	_word_jp1('凱斯凱伊|凱伊斯凱伊|ケイスケイ', '凱伊斯凱伊'),



	/**
	 *
	 */
	_word_jp1('ベルーガ|貝魯加', '貝魯加'),

	_word_jp1('費爾南多|フェルナンド', '費爾南多'),
	_word_jp1('伊澤亞|イザイア', '伊澤亞'),
	_word_jp1('佐夫|ゾフ', '佐夫'),
	_word_jp1('エストラダ|埃斯德拉達', '埃斯德拉達'),

	_word_jp1('克里斯德伯|クリストフ|克萊斯托夫', '克里斯德伯'),

	_word_jp1('エルマー|埃盧瑪|埃爾默', '埃盧瑪'),
	_word_jp1('ルーカス|盧卡斯', '盧卡斯'),

	/**
	 *
	 */
	_word_jp1('インユリア|因猶利亞', '因猶利亞'),

	['ももんが|莫莫卡|莫莫加', '莫莫卡'],
	_word_jp1('ルス|盧茲', '盧茲'),

	/**
	 *
	 */
	['イーオン|伊歐|伊昂|AEON|伊甕', '伊昂'],
	['ファクシミレ|哈克西米爾|法克希米雷|法庫西梅勒|弗蘭克蘇彌魯|華克士米勒', '哈克西米爾'],

	_word_jp1('ベルナルド|威魯納魯德|魯諾陸德|貝魯納魯多', '威魯納魯德'),
	_word_jp1('グローリア|烏璐歐利亞|格洛利亞|達洛里亞', '烏璐歐利亞'),
	_word_jp1('カーサス|卡薩斯|卡撒蘇|卡阿薩祖', '卡薩斯'),

	_word_jp1('ウェルナー|列魯諾|威爾納', '威爾納'),
	_word_jp1('法尼|バーニ', '法尼'),

	_word_jp1('アレッシオ|阿勒西奧', '阿勒西奧'),
	_word_jp1('ダントーニ|托尼', '托尼'),

	_word_jp1('サンドロ|桑德魯', '桑德魯'),
	_word_jp1('ブラージ|布拉吉', '布拉吉'),

	_word_jp1('阿茶雅|アチャ|亞茶子', '亜茶子'),

	_word_jp1('安潔|アンジェ', '安潔'),

	_word_jp1('デーブータ|德布塔|灼日', '德布塔'),

	['北村秀樹', '北村秀樹'],

	_word_jp1('メタボリック|新陳代謝', '新陳代謝'),

	/**
	 *
	 */
	_word_jp1('約翰尼|ジョニー', '約翰尼'),

	_word_jp1('狄拉克|ディラック', '狄拉克'),

	/**
	 *
	 */
	[`闇の城`, '闇の城', 'ig'],

	_word_jp1('パーレン|帕廉', '帕廉'),
	_word_jp1('アクサン|阿庫森', '阿庫森'),
	_word_jp1('アポストロフィ|阿庫斯洛菲|阿庫斯洛', '阿庫斯洛菲'),
	_word_jp1('オーム|菲?歐姆', '歐姆'),

	_word_jp1('多倫戴爾|格倫戴爾|グレンデル', '格倫戴爾'),

	_word_jp1('西瑪|シマ', '西瑪'),

	[`アルマミス|ARUMAMISu?`, 'ARUMAMIS', 'ig'],

	/**
	 *
	 */
	['兄丸|兄丸', '兄丸'],
	['音丸', '音丸'],

	['迪烏塔|ディーヴータ', '迪烏塔'],
	['莫凱|モーンガイ', '莫凱'],

	/**
	 *
	 */
	_word_jp1('ウェルバ|維魯帕', '維魯帕'),

	/**
	 *
	 */
	_word_jp1('シレント|奇蘭托|錫蘭特|希倫特', '奇蘭托'),
	[`利貝提姆|リビティウム|利貝利姆|力比提亞母`, '利貝提姆'],

	_word_jp1('エレノア|艾蕾諾|艾莉諾', '艾蕾諾'),

	/**
	 *
	 */
	_word_jp1('アルテ|阿魯特', '阿魯特'),
	_word_jp1('コルヌ|克魯諾', '克魯諾'),

	/**
	 *
	 */
	_word_jp1('ヴィンダウス|維因達烏斯', '維因達烏斯'),

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	...(import_words_source || []),

	[`喬伊${sp}阿蘭特`, '喬伊・阿蘭特', 'ig'],

	[`迦魯迪${sp}巴索`, '迦魯迪・巴索', 'ig'],

	[`科拉德${sp}亞特爾拿特`, '科拉德・亞特爾拿特', 'ig'],
	[`科拉德${sp}喬庫拉托爾${sp}亞特爾拿特`, '科拉德・喬庫拉托爾・亞特爾拿特', 'ig'],

	[`阿西爾${sp}克勞德`, '阿西爾・克勞德', 'ig'],

	[`安潔莉卡${sp}伊利斯${sp}阿米迪亞`, '安潔莉卡・伊利斯・阿米迪亞', 'ig'],
	[`阿西爾${sp}克勞德${sp}阿米迪亞`, '阿西爾・克勞德・阿米迪亞', 'ig'],

	[`克萊斯${sp}森斯露娜`, '克萊斯＝森斯露娜', 'ig'],

	[`奧麗亞娜${sp}埃尼亞斯${sp}(?:米露恩|米倫)${sp}格拉畢歐魯`, '奧麗亞娜・埃尼亞斯・米露恩・格拉畢歐魯', 'ig'],

	/**
	 *
	 */

	[`青色的神|蒼き?神`, '蒼神', 'ig'],

	[`終わりなき魂の修道院|終焉的靈魂修道院`, '終焉的靈魂修道院', 'ig'],

	[`喪失世紀`, '喪失世紀', 'ig'],
	[`永遠なる地平|永遠地平線`, '永遠地平線', 'ig'],

	[`斯芬迪斯|斯芬克斯`, '斯芬克斯', 'ig'],

	[`魔導帆船|魔道帆船`, '魔導帆船', 'ig'],

	[`物まねカード|模仿卡片?`, '模仿卡片', 'ig'],

	['蒼き神の塔|蒼神之?塔', '蒼神之塔'],

	['薔薇の罪人|薔薇的罪人', '薔薇的罪人'],

	['花椿宮殿', '花椿宮殿'],
	['白虎號|白鯨號', '白鯨號'],

	[`Naga${sp}Raja`, '黃金龍', 'ig'],
	[`(?:ETERNAL|永恆)${sp}(?:HORIZON|地平線)${sp}ONLINE`, 'ETERNAL・HORIZON・ONLINE', 'ig'],
	[`E${sp}H${sp}O`, 'E・H・O', 'ig'],

	[`Oriana${sp}Palace${sp}Hotel`, 'Oriana・Palace・Hotel', 'ig'],

	[`天嬢典雅|天娘典雅|天嬢雅姫`, '天嬢典雅', 'ig'],
	[`三毛猫の足音`, '三毛猫の足音', 'ig'],
	[`独壇戦功|獨壇戰功`, '獨壇戰功', 'ig'],
	[`イフリート|伊芙利特|Ifrit`, '伊芙利特', 'ig'],

	[`豬骨大王|豚骨大王`, '豚骨大王', 'ig'],
	[`豬骨|豚骨`, '豚骨', 'ig'],

	[`飛竜`, '飛竜', 'ig'],
	[`騎竜`, '騎竜', 'ig'],
	[`真龍`, '真龍', 'ig'],
	[`白龍山脈`, '白龍山脈', 'ig'],

	[`Skill`, '技能', 'ig'],

	[`歐內大人`, '姊姊大人', 'ig'],

	[`砲`, '砲', 'ig'],

	/**
	 *
	 */

	[`后話`, '後話', 'ig'],

	[/(?<=MP：[^\n]+|。)\n(?=[\S][^\n]+\n種族：)/igm, '\n\n\n'],

	[/(?<=\S)\n\n(?=種族：)/igm, '\n\n\n'],

	[/(?<=所有：[^\n]+)()(?=HP：)/igm, '\n$1'],

	[/(?<=MP：[^\n]+)(\n)(?![^\s]+：|\s)/igm, '\n\n'],

	[/^[　 ]+/gm, ''],

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	...sublib.lazymarks['full_width_001'],
	...sublib.lazymarks['full_width_002'],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

	[/[\[【]/g, '「'],
	[/[\]】]/g, '」'],

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

/**
 * 其他用途
 *
 * @deprecated
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

export default exports;
