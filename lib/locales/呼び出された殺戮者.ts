/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe } from '.';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '呼び出された殺戮者';

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
export const words: IWords[] = [

	[/远野\?一二三|一二三\.遠野/g, '远野一二三'],
	['远野', '遠野'],

	['澳莉嘉|奥莉佳|[奥澳][利莉丽][佳嘉加]|奥莉加|奥丽加|奧莉嘉', '奥莉佳'],
	['卡夏|卡莎|卡萨|卡沙', '卡莎'],

	['[细細][剑劍]的?[骑騎]士', '細劍的騎士'],
	['遠野伯爵?', '遠野伯爵'],

	/**
	 * 依梅娜利亚（イメラリア第一公主）
	 * 依梅拉丽雅·托莉尔·奥克索兰蒂（イメラリア?トリエ?オーソングランデ）
	 *
	 * 阿比罗斯（アイペロス）王太子
	 *
	 * 宰相亚特鲁（アドル）
	 * 亚特鲁?菲欧路?维尼嘉（アドル?フィオル?ヴィンジャー）
	 */

	['[·。](托瑞尔|托莉尔|托莉艾)[·。](奥克索兰蒂|奧斯庫蘭特)', '・托莉尔・奥克索兰蒂'],

	['伊梅娜丽亚|依梅娜利亚|依梅拉丽雅|imeraria|依梅拉丽雅|依梅拉麗雅|依拉麗雅', '依梅娜利亚'],
	['娜丽亚|娜利亚|拉丽雅', '娜利亚'],
	['公主|王女', '王女'],

	['阿比罗斯|阿罗比斯', '阿比罗斯'],

	['亞特魯|亚特鲁', '亚特鲁'],
	[/亚特鲁\?菲欧路\?维尼嘉/g, '亚特鲁・菲欧路・维尼嘉'],

	/**
	 * @todo 骑士
	 *
	 * 帕乔（パジョー　Pajou）
	 * 苏提菲鲁斯（スティフェルス）
	 *
	 * 弗雷德里克（フレデリック）
	 * 德乌穆斯（デウムス）
	 * 利贝泽鲁（リベザル）
	 * 兰古鲁（ラングル）
	 *
	 * 佛莉妮欧（フィリニオン）
	 * 库莉诺拉（るクリノ）
	 *
	 * 瓦伊亚（ヴァイヤー）
	 * 瓦伊亚?特塞雷恩（ツェーレン）
	 *
	 * 罗托玛格（ロトマゴ）
	 *
	 * 巴鲁泽弗恩（バールゼフォン）
	 */
	//
	['迈达斯|米达斯|米斯达|米達斯', '米达斯'],
	['帕鸠|帕乔|帕鳩', '帕鳩'],

	['佛莉妮歐|佛莉妮欧', '佛莉妮欧'],
	['阿馬塞羅托|阿玛泽鲁托', '阿玛泽鲁托'],
	[/佛莉妮欧\?L\?阿玛泽鲁托/g, '佛莉妮欧・L・阿玛泽鲁托'],

	['库莉诺拉|庫莉羅菈', '库莉诺拉'],

	['瓦伊亞|瓦伊亚|瓦依亞', '瓦伊亚'],
	[/瓦伊亚\?特塞雷恩/g, '瓦伊亚・特塞雷恩'],

	//哥德斯拉斯
	//莎布纳古
	['莎布納古|莎布纳古', '莎布納古'],

	//斯黛拉?维尼嘉（シビュラ?ヴィンジャー）
	[/斯黛拉\?维尼嘉/g, '斯黛拉・维尼嘉'],



	//苏菲提鲁斯

	//ラグライン（拉久拉Raghlain）侯爵
	//卡西漠拉尔・姆依德・拉久拉　（カーシモラル・ヴァド・ラグライン）
	//奥巴施（オロバス）
	//斯久拉斯（ストラス）
	['拉古来因|拉久拉', '拉古来因'],
	['斯托莱斯|斯久拉斯', '斯托莱斯'],

	//哈根提子爵

	//比罗恩（ビロン）伯爵
	['比罗恩|比羅恩|比羅特', '比罗恩'],
	//哈克（ハック）

	//雷欧拉鲁（レオナール）
	//阿斯匹鲁库厄塔（アスピルクエタ）
	['阿斯普魯庫厄特|阿斯匹鲁库厄塔|アスピルクエタ', '阿斯普魯庫厄特'],

	//古扎凡
	//达姆斯

	//阿丽莎
	['艾丽莎|阿丽莎|阿麗莎|阿莉莎', '阿丽莎'],

	//卡索哈（カモス）

	['瑪。卡魯墨|瑪・卡魯墨', '瑪・卡魯墨'],

	/**
	 * @todo 贫民窟
	 *
	 * 托鲁凯马达（トルケマダ）
	 * 彼弗隆（ビフロン）
	 */
	['托鲁克马达|托鲁凯马达', '托鲁凯马达'],


	/**
	 * @todo 文官奴隶
	 *
	 * 缪迦蕾
	 凯姆和布鲁库拉（ブロクラ）负责税收及预算
	 户籍制作与管理是帕莉优（パリュ）
	 工商业相关部门的指导则由多拉格（ドゥエルガル）
	 */
	['布露库拉|布鲁库拉', '布露库拉'],
	['帕莉優|帕莉优', '帕莉优'],
	['繆迦蕾|缪迦蕾', '缪迦蕾'],

	/**
	 * @todo 维希
	 *
	 * 布尔乌（ブエル）
	 * 米诺索（ミノソン）
	 *
	 * 维琪……贝罗为拉（ヴィシーVichyベイレヴラBeirevura）
	 *
	 * 洛西（ロシー）
	 */
	['米诺斯|米诺索', '米诺索'],
	['贝雷维拉|贝罗为拉|贝内维拉', '贝雷维拉'],

	/**
	 * @todo 公会/行会
	 *
	 * 贵族街的【布鲁顿】餐厅
	 *
	 * 矮人多伦
	 *
	 * 赫拉（ヘラ）
	 */

	['托倫|多伦', '多伦'],

	['普鲁夫拉苏|普魯夫拉蘇', '普鲁夫拉苏'],

	['铁四指|寸铁', '寸铁'],
	['(水色)?蓝宝石|水宝石', '水色蓝宝石'],
	//提高攻击性的魔道具‘高伽（ガンガ）’和抑制感情的魔道具‘厄鲁利库（エルリク）

	/**
	 * @todo 兽人
	 *
	 * 海伦（ヘレン）
	 * 勒尼（レニ）
	 *
	 * 苏拉莉（スラリ）
	 * 加芬斯
	 *
	 * 加勒多（ジャレド）
	 *
	 * 菠丹”（ボダン
	 *
	 * 耿古（ゲング）
	 * 萨路古
	 *
	 * 玛鲁法斯（マルファス）
	 * 莉黛尔（リーデル）
	 *
	 * 欧露拉（オルラ）
	 */
	['耿古|ゲング|狄古', '根古'],

	['瑪魯法斯|玛鲁法斯|マルファス?', '玛鲁法斯'],
	['里德爾|莉黛尔', '莉黛尔'],

	['欧露拉|歐露娜', '欧露拉'],

	['勒尼|雷妮|レニ', '勒尼'],


	['碧妮|[维維]涅|ヴィーネ', '維涅'],
	['片耳|单耳', '单耳'],
	['单耳的?兔兽人', '单耳兔兽人'],

	['兽人|獸人', '獸人'],

	/**
	 * @todo 骑士国
	 *
	 * 泽布鲁（ゼブル）
	 */


	/**
	 * @todo 精灵
	 *
	 * 普婕
	 * 扎恩卡
	 */
	['普婕|普塞', '普婕'],

	['扎恩卡|贊格|ザンガー', '扎恩卡'],

	['小?妖精|精灵|精靈', '精灵'],

	/**
	 * @todo 魔人
	 *
	 * 阿喀什农（アガチオン）
	 */
	['[微薇][怕帕][尔爾]特?|薇帕尔特|薇帕尔|薇帕爾|ウェパル', '薇帕尔'],
	['阿喀什农|阿喀什安', '阿喀什农'],

	/**
	 * @todo 霍兰特
	 *
	 * 老王苏普朗格鲁·根古·霍兰特（スプランゲル?ゲング?ホーラント）
	 * 维拉多尔（ヴェルドレ）
	 *
	 * 优古（ユーグか）
	 * 优古?优提勒夫托（ユティレフト）
	 *
	 * 宰相库泽姆（クゼム）
	 *
	 * 纳尔格鲁（ネルガル）
	 *
	 * 卡普
	 * 丹寧
	 *
	 * 蕾菲
	 */
	['VERUDORE|维拉多尔|維魯多尼', '维拉多尔'],
	[/苏普朗格鲁\?根古\?霍兰特/g, '苏普朗格鲁・根古・霍兰特'],
	['蘇普朗格魯|苏普朗格鲁|蘇普朗格魯', '苏普朗格鲁'],
	[/优古\?优提勒夫托/g, '优古・优提勒夫托'],
	['庫澤姆|库泽姆', '库泽姆'],
	['霍兰特|霍根|霍特蘭|霍蘭特|霍蘭', '霍兰特'],
	['納爾格魯|[纳納][尔爾]格[鲁魯]', '納尔格鲁'],

	/**
	 * @todo 国
	 *
	 * 奥斯库兰德（オーソングランデ）
	 * 佛卡洛尔|佛卡荣如 フォカロル
	 * 姆斯特尔（ミュンスター）
	 *
	 * 霍根（ホーラント）王国
	 * 首都鲁乌达苏（ルーダン）
	 * 阿德拉莫克（アドラメルク）
	 *
	 * 维希（ヴィシー）商业联邦维西
	 * 阿罗塞尔
	 *
	 * 佛鲁萨（ピュルサン）
	 */

	['奥梭格兰地|奥斯库兰德|奥克索兰蒂|奥索格兰蒂|奧斯庫蘭德|奧斯庫蘭特|奧斯蘭庫德', '奥克索兰蒂'],
	['维西|维希|维多|維西', '维希'],

	['佛卡洛尔|佛卡荣如|佛卡罗鲁|佛卡罗尔|佛卡羅爾|佛卡羅斯', '佛卡洛尔'],
	['阿羅塞魯|阿罗塞尔', '阿罗塞尔'],

	['阿多拉美路古|阿德拉莫克', '阿德拉莫克'],

	//隐匿之蛇
	['隐藏的蛇|隐匿之蛇|隠し蛇', '隐匿之蛇'],
	['姆斯特爾|姆斯特尔|姆斯庫特', '姆斯特尔'],

	['佛魯薩|佛鲁萨', '佛鲁萨'],

	['索德蘭特|索德兰特', '索德兰特'],

	['罗奴|羅納', '罗奴'],

	['行会|公会|协会', '公会'],

	['國|国', '国'],

	['[暗闇]魔', '闇魔'],

	[/([^\w])(\d+(?:[~]\d+)?)(?![\w])/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	[/[\!\(\):,~]/g, function (...m)
	{
		return StrUtil.toFullWidth(m[0], {
			skip: {
				space: true,
			},
		});
	}],

	[/^[ \t　]+/gm, ''],

	[/"([^\n"']*)'([^'"\n]+)'/gm, '"$1『$2』'],
	[/"([^\n"']*)'([^'"\n]+)'/gm, '"$1『$2』'],

	[/^([^\n"“”「」'\[\]［］]*)["“'\[［]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ『』\u4E00-\u9FFF][^\n"“”「」'\[\]［］]*(?:\n[^\n"“”「」'\[\]［］]*)?)["”'\]］]/gm, '$1「$2」'],
	[/^([^\n"“”『』'‘’]*)["“'‘]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n"“”『』'‘’]*)["”'’]/gm, '$1『$2』'],
	[/^([^\n【】<>]*)[<]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】<>]*)[>]/gm, '$1【$2】'],

	[/(『[^『』\n]+』[^\n"“”『』'‘’]*)["“'‘]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n"“”『』'‘’]*)["”'’]/gm, '$1『$2』'],
	[/(「[^「」\n]+」[^\n"“”「」'‘’]*)["“'‘]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n"“”「」'‘’]*)["”'’]/gm, '$1「$2」'],

	[/^([^「」\n【】\[\]［］\{\}]*)[\[［\{]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】\[\]］\{\}]*)[\]］\}]/gm, '$1【$2】'],
	[/(「[^「」\n【】\[\]［］]*)[\[［]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】\[\]］]*)[\]］]/gm, '$1【$2】'],


	[/(【[^【】\n<>\[\]\{\}]+】[^\n【】<>\[\]\{\}]*)[<\[\{]([ ]*[…？－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】<>\[\]\{\}]*)[\]\}>]/gm, '$1【$2】'],

	[/[\[【“]/g, '「'],
	[/[\]】”]/g, '」'],

	[/(「[^」]*)「([^」]*)」/g, '$1『$2』'],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n[ 　]*\.[ 　]*(?=\n)/g, '\n'],

	['([」』])[ ]+（', '$1（'],

	[/\n+[\-~～]+\n*$/g, ''],

	[/^[\-]{3,}$/gm, '\n'],

] as IWords[];

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	'组合',

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
