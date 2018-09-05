/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { lazymarks, _word_jp1, _word_en } from './lib/index';

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
export const words_source: IWords[] = [

	[/远野\?一二三|一二三\.遠野/g, '遠野一二三'],

	[`(一二三|阿麗莎)。遠野`, '$1・遠野'],
	[`(?:一二三|阿麗莎)${sp}遠野`, '$1・遠野'],

	['远野|トオノ', '遠野'],

	['澳莉嘉|奥莉佳|(奥|澳)(利|莉|丽)(佳|嘉|加)|奥莉加|奥丽加|奧莉嘉|オリガ', '奧莉嘉'],
	['卡夏|卡莎|卡萨|卡沙', '卡莎'],

	['細劍的?騎士', '細劍的騎士'],

	['遠野伯爵?', '遠野伯爵'],

	/**
	 * @todo 第二部
	 */
	[`梅古納特|メグナード`, '梅古納特'],
	[`維斯那|ウェスナー|維斯納`, '維斯納'],

	[`(?:梅古納特|維斯那)${sp}遠野`, '$1・遠野'],

	[`シク|希克`, '希克'],

	[`奧莉嘉笔记|奧莉嘉手记|(オリガ|奧莉嘉)の手帳`, '奧莉嘉筆記'],

	_word_jp1(`馬特|マット`, '馬特'),
	_word_jp1(`凱蒂|カイテ`, '凱蒂'),
	_word_jp1(`マティ|瑪蒂`, '瑪蒂'),

	[`馬特${sp}凱蒂`, '馬特・凱蒂'],

	/**
	 * 依梅娜利亚（イメラリア第一公主）
	 * 依梅拉丽雅·托莉尔·奥克索兰蒂（イメラリア?トリエ?オーソングランデ）
	 *
	 * 阿比罗斯（アイペロス）王太子
	 *
	 * 宰相亚特鲁（アドル）
	 * 亚特鲁?菲欧路?维尼嘉（アドル?フィオル?ヴィンジャー）
	 */

	['奥梭格兰地|奥斯库兰德|奥克索兰蒂|奥索格兰蒂|奧斯庫蘭德|奧斯庫蘭特|奧斯蘭庫德|オーソングランデ|奧克索蘭第', '奧克索蘭蒂'],

	[`${sp}(?:托瑞尔|托莉尔|托莉艾|特里耶|トリエ)${sp}(?:奥克索兰蒂|奧斯庫蘭特|オーソングランデ)`, '・托莉爾・奧克索蘭蒂'],
	[`。(?:托瑞尔|托莉尔|托莉艾|特里耶)。(?:奥克索兰蒂|奧斯庫蘭特)`, '・托莉爾・奧克索蘭蒂'],

	['伊梅娜丽亚|依梅娜利亚|依梅拉丽雅|imeraria|依梅拉丽雅|依梅拉麗雅|依拉麗雅|イメラリア', '依梅拉麗雅'],
	['娜丽亚|娜利亚|拉丽雅', '拉麗雅'],
	['公主|王女', '王女'],

	['阿比罗斯|阿罗比斯|アイペロス', '阿比羅斯'],

	['亞特魯|亚特鲁|アドル', '亞特魯'],
	[/亚特鲁\?菲欧路\?维尼嘉/g, '亞特魯・菲歐路・維尼嘉'],

	// 兒子
	['卡爾|カール', '卡爾'],

	/**
	 * @todo 第二部
	 */

	[`${sp}(?:蘭特|ランテ)${sp}(?:奥克索兰蒂|奧斯庫蘭特|オーソングランデ)`, '・蘭特・奧克索蘭蒂'],

	['奧雷斯蒂|オレステ|奧雷斯特|奧斯雷第', '奧雷斯特'],
	['紗羅玫|サロメ|紗羅娜|沙羅梅|紗羅梅', '紗羅梅'],
	['約夏娜|ヨハンナ', '約夏娜'],

	/**
	 * @todo 勇者
	 */

	['ミキ|美貴', '美貴'],
	['ユウイチロウ|雄一郎', '雄一郎'],

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
	['迈达斯|米达斯|米斯达|米達斯', '米達斯'],
	['帕鸠|帕乔|帕鳩|パジョー', '帕鳩'],

	['佛莉妮歐|佛莉妮欧|フィリニオン|菲莉尼奧|菲麗尼奧|菲力尼奧', '佛莉妮歐'],
	['阿馬塞羅托|阿玛泽鲁托|阿瑪杰羅特|アマゼロト|阿瑪羅杰特', '阿瑪澤魯托'],
	[`${sp}(?:L|艾爾|エル)${sp}阿玛泽鲁托`, '・L・阿瑪澤魯托'],

	[`佛莉妮歐${sp}阿玛泽鲁托`, '佛莉妮歐・阿瑪澤魯托'],

	['库莉诺拉|庫莉羅菈|るクリノ', '庫莉諾拉'],

	['瓦伊亞|瓦伊亚|瓦依亞|ヴァイヤー|百牙', '瓦伊亞'],

	[`(?:瓦伊亞)${sp}特塞雷恩`, '瓦伊亞・特塞雷恩'],
	[`(?:瓦伊亞)${sp}阿玛泽鲁托`, '瓦伊亞・阿瑪澤魯托'],

	//哥德斯拉斯
	//莎布纳古
	['莎布納古|サブナク|紗布那古', '莎布納古'],
	['トワスト|圖瓦斯特', '圖瓦斯特'],
	[`莎布納古${sp}圖瓦斯特`, '莎布納古・圖瓦斯特'],

	//斯黛拉?维尼嘉（シビュラ?ヴィンジャー）

	['斯黛拉|シビュラ', '斯黛拉'],
	[`斯黛拉${sp}(?:维尼嘉|ヴィンジャー)`, '斯黛拉・維尼嘉'],



	//苏菲提鲁斯

	//ラグライン（拉久拉Raghlain）侯爵
	//卡西漠拉尔・姆依德・拉久拉　（カーシモラル・ヴァド・ラグライン）
	//奥巴施（オロバス）
	//斯久拉斯（ストラス）
	['拉古来因|拉久拉', '拉古來因'],
	['斯托莱斯|斯久拉斯|ストラス', '斯托萊斯'],

	//哈根提子爵

	//比罗恩（ビロン）伯爵
	['比罗恩|比羅恩|比羅特|ビロン|比倫', '比羅恩'],
	['カムラット|卡穆拉特', '卡穆拉特'],
	//哈克（ハック）

	//雷欧拉鲁（レオナール）
	//阿斯匹鲁库厄塔（アスピルクエタ）
	['阿斯普魯庫厄特|阿斯匹鲁库厄塔|アスピルクエタ', '阿斯普魯庫厄特'],

	//古扎凡
	//达姆斯

	//阿丽莎
	['艾丽莎|阿丽莎|阿麗莎|阿莉莎', '阿麗莎'],

	//卡索哈（カモス）

	['瑪。卡魯墨|瑪・卡魯墨', '瑪・卡魯墨'],

	/**
	 * @todo 第二部
	 *
	 * 近位騎士队長阿蒙
	 */
	['瑪麗亞|マリア', '瑪麗亞'],
	['阿蒙|アモン', '阿蒙'],

	// 美貴传送回来的时候的騎士──阿凡
	['阿凡|エヴァンス', '阿凡'],

	['門蒂斯|メンディス', '門蒂斯'],

	[`凡塔拉庫特|ヴァンターラクト`, '凡塔拉庫特'],
	[`半塔拉|ヴァンタラー`, '半塔拉'],

	[`(?:達姆特|ダムド)${sp}(?:フェルアート|菲盧奧特)${sp}凡塔拉庫特`, '達姆特・菲盧奧特・凡塔拉庫特'],

	['ランスロット|蘭斯洛特', '蘭斯洛特'],
	[`蘭斯洛特${sp}比羅恩`, '蘭斯洛特・比羅恩'],

	['サーラ|莎拉', '莎拉'],

	/**
	 * @todo 贫民窟
	 *
	 * 托鲁凯马达（トルケマダ）
	 * 彼弗隆（ビフロン）
	 */
	['托鲁克马达|托鲁凯马达|トルケマダ', '托魯凱馬達'],


	/**
	 * @todo 文官奴隶
	 *
	 * 缪迦蕾
	 凯姆和布鲁库拉（ブロクラ）负责税收及预算
	 户籍制作与管理是帕莉优（パリュ）
	 工商业相关部门的指导则由多拉格（ドゥエルガル）
	 */
	['布露库拉|布鲁库拉|ブロクラ|布洛科拉', '布露庫拉'],
	['帕莉優|帕莉优|パリュ', '帕莉優'],
	['繆迦蕾|缪迦蕾|ミュカレ', '繆迦蕾'],

	_word_jp1('凱姆|カロル', '凱姆'),

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
	['米诺斯|米诺索|ミノソン', '米諾索'],
	['贝雷维拉|贝罗为拉|贝内维拉', '貝雷維拉'],

	/**
	 * @todo 公会/行会
	 *
	 * 贵族街的【布鲁顿】餐厅
	 *
	 * 矮人多伦
	 *
	 * 赫拉（ヘラ）
	 */
	['托倫|多伦', '多倫'],

	['普鲁夫拉苏|普魯夫拉蘇', '普魯夫拉蘇'],


	//提高攻击性的魔道具‘高伽（ガンガ）’和抑制感情的魔道具‘厄鲁利库（エルリク）

	/**
	 * @todo 第二部
	 */
	// 公會会長
	['庫羅亞娜|クロアーナ', '庫羅亞娜'],
	['怀斯曼|ワイズマン', '懷斯曼'],

	// 店
	['ユシェール|由謝兒', '由謝兒'],

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
	['耿古|ゲング|狄古|劍骨', '根古'],

	['瑪魯法斯|玛鲁法斯|マルファス?', '瑪魯法斯'],
	['里德爾|莉黛尔|リーデル', '莉黛爾'],

	['欧露拉|歐露娜|オルラ', '歐露拉'],

	['勒尼|雷妮|レニ|蕾妮', '蕾妮'],

	['沙魯古|萨路古', '薩路古'],

	['碧妮|維涅|ヴィーネ', '維涅'],
	['片耳|单耳', '單耳'],
	['单耳的?兔兽人', '單耳兔獸人'],

	['兽人|獸人', '獸人'],

	['海倫|ヘレン', '海倫'],

	/**
	 * @todo 第二部
	 */
	// 羊獸人
	['エクン|艾昆', '艾昆'],
	['ヘレンとレニの町|蕾妮海倫之家', '蕾妮海倫之家'],

	['小白|シロー', '小白'],

	['ドルトザン|多魯托赞', '多魯托贊'],
	['密達特|ミーダット', '密達特'],

	['弗盧|フルヴ', '弗盧'],

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
	['普婕|普塞|プーセ|普賽', '普婕'],

	['扎恩卡|贊格|ザンガー|贊古|桑加|赞戈', '扎恩卡'],

	['小?妖精|精灵|精靈', '精靈'],

	/**
	 * @todo 魔人
	 *
	 * 阿喀什农（アガチオン）
	 */
	['(微|薇)(怕|帕)爾特?|薇帕尔特|薇帕尔|薇帕爾|ウェパル', '薇帕爾'],
	['阿喀什农|阿喀什安', '阿喀什農'],

	['菲莉斯|菲蕾絲|フェレス', '菲莉斯'],
	['ニャール|尼雅爾|納魯|涅露|喵儿', '涅露'],

	['巴希姆|バシム|巴西姆', '巴希姆'],

	['巴魯澤弗恩|バールゼフォン', '巴魯澤弗恩'],

	/**
	 * @todo 第二部
	 *
	 * 魔国勞厄爾
	 */
	['ラウアール|勞厄爾', '勞厄爾'],

	['涅維爾|ネヴィル', '涅維爾'],

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


	['VERUDORE|维拉多尔|維魯多尼|ヴェルドレ', '維拉多爾'],
	[`苏普朗格鲁${sp}根古${sp}霍兰特`, '蘇普朗格魯・根古・霍蘭特'],
	['蘇普朗格魯|苏普朗格鲁|蘇普朗格魯|スプランゲル', '蘇普朗格魯'],
	[/优古\?优提勒夫托/g, '優古・優提勒夫托'],
	['庫澤姆|库泽姆|クゼム', '庫澤姆'],
	['霍兰特|霍根|霍特蘭|霍蘭特|霍兰德|ホーラント', '霍蘭特'],
	['納爾格魯|納爾格魯|ネルガル|聂魯加爾', '納爾格魯'],

	/**
	 * @todo 第二部
	 *
	 * グネの町
	 */
	_word_jp1('グネ|古涅', '古涅'),

	// 治安維持官
	['タイサク|大策', '大策'],

	[`莎洁涅|サウジーネ`, '莎潔涅'],
	[`莎洁涅${sp}霍兰特`, '莎潔涅・霍蘭特'],

	// 应该很快我弟弟『便當变态』就将結束視察回城
	// 女王莎洁涅的弟弟，统称变态王子
	[`ゲコック`, 'ゲコック'],

	_word_jp1('沙佳特|沙洁特|サカト', '沙佳特'),

	_word_jp1('ウィリ|維力', '維力'),

	['ヴァラファール|巴拉法尔', '巴拉法爾'],

	['オリフ・ダガート', 'オリフ・ダガート'],

	/**
	 * @todo 第二部
	 *
	 * 有魔族的將軍白龍，荒野的獸人卡夫列斯，村落的密達特
	 */
	['バイロン|白龍', '白龍'],
	['卡夫列斯|カルフス|卡魯福斯', '卡魯福斯'],

	/**
	 * @todo 姆斯特爾
	 */

	/**
	 * @todo 第二部
	 */
	['玟蒂|ミンテティ', '玟蒂'],
	['アルダート|阿魯達特', '阿魯達特'],

	_word_jp1('庫雷|クレ', '庫雷'),
	['伊魯弗卡|イルフカ', '伊魯弗卡'],

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


	['维西|维希|维多|維西|ヴィシー', '維希'],

	['佛卡洛尔|佛卡荣如|佛卡罗鲁|佛卡罗尔|佛卡羅爾|佛卡羅斯|フォカロル', '佛卡洛爾'],
	['阿羅塞魯|阿罗塞尔', '阿羅塞爾'],

	['阿多拉美路古|阿德拉莫克', '阿德拉莫克'],

	//隐匿之蛇
	['隐藏的蛇|隐匿之蛇|隠し蛇|隐蛇', '隱匿之蛇'],
	['姆斯特爾|姆斯特尔|姆斯庫特|ミュンスター|缪斯塔', '姆斯特爾'],

	['佛魯薩|佛鲁萨|ピュルサン', '佛魯薩'],

	['索德蘭特|索德兰特|梭德蘭特|索德蘭蒂', '索德蘭特'],

	['罗奴|羅納', '羅奴'],

	/**
	 *
	 */

	['行会|公会|协会', '公會'],

	['铁四指|寸铁', '寸鐵'],
	['(水色?)?蓝宝石|水宝石|アクアサファイア', '水色藍寶石'],

	['國|国', '国'],

	['四次元空间口袋|闇魔法口袋|四次元口袋', '闇魔法口袋'],

	['黑?(暗|闇)魔', '闇魔'],

	['鬼彻', '鬼彻'],

	['共[斗]', '共鬥'],

	['犬科?獸人', '犬獸人'],

	['兎飛翔拳', '兎飛翔拳'],

	['魔方陣|魔法陣', '魔法陣'],

	['国际玩笑', '玩笑'],

	['信教騎士団', '信教騎士團'],
];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	[/([^\w])(\d+(?:[~]\d+)?)(?![\w])/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	...sublib.lazymarks['full_width_001'],
	...sublib.lazymarks['full_width_002'],

	[/[\!\(\):,~]/g, function (...m)
	{
		return StrUtil.toFullWidth(m[0], {
			skip: {
				space: true,
			},
		});
	}],

	[/^[ \t　]+/gm, ''],

	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

	/*

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

	*/

	[/[\[【“]/g, '「'],
	[/[\]】”]/g, '」'],

	/*

	[/(「[^」]*)「([^」]*)」/g, '$1『$2』'],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n[ 　]*\.[ 　]*(?=\n)/g, '\n'],

	*/

	['([」』])[ ]+（', '$1（'],

	[/\n+[\-~～]+\n*$/g, ''],

	//[/^[\-]{3,}$/gm, '\n'],

	...sublib.lazymarks['zh'],

] as IWords[]);

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	//'组合',

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
