/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { lazymarks } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = '暗黒騎士物語　～勇者を倒すために魔王に召喚されました～';

/**
 * 其他用途
 *
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '{{0}}',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0, toFullNumber}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words: IWords[] = sublib._word_zh_all([

	['迪哈尔特|迪哈魯特|迪哈魯特|迪哈爾特|迪哈[ ]特', '迪哈魯特'],

	['黑樹|黑树', '黑树'],

	/**
	 * 艾尔德王国是我们打倒千皮兽之后建立的王国
	 * 班德尔平原
	 *
	 * アズィミド 阿茲維德
	 *
	 * 大賢者瑪裘烏斯
	 */

	['京华|京華', '京华'],
	sublib._word_zh('加弥|加彌|嘉彌', '加弥'),
	['奈[绪緒]美?|奈?[绪緒]美', '奈緒美'],
	['憐侍|怜侍|伶侍|怜侍', '怜侍'],

	sublib._word_zh('艾尔德|艾蘭德', '艾尔德'),
	sublib._word_zh('班德尔|邦多勒', '班德尔'),

	sublib._word_zh('瑪裘烏斯', '瑪裘烏斯'),

	/**
	 * 穆雷那斯
	 * 奇布琉斯
	 * ミュレナス
	 * ジヴリュス
	 *
	 * 娜迩葛尔边界阿克伦山脉
	 *
	 * 魔界公主珀莲娜
	 * 兽魔将军普琪娜。上一代的爱丽缇娜被光之勇者杀掉
	 *
	 * 兰帕斯庭园
	 *
	 * 蒙提娅是妖魔将军夏莉的母亲。
	 *
	 * 缇贝尔是拥有七色光辉翅膀的小妖精
	 *
	 * 沼泽的大魔女的赫尔卡特
	 * 龙魔将军利布尔木
	 *
	 * 緹貝尔
	 */

	sublib._word_zh('古洛利西亞|古洛利亚斯|古洛利亞西|格洛里亚斯|格罗里亚斯|古洛利亞斯', '古洛利亞斯'),

	sublib._word_zh('莫德斯|莫迪斯|莫德斯|モデス', '莫德斯'),
	sublib._word_zh('兰菲尔德|蘭菲爾德|拉昂菲尔德', '兰菲尔德'),
	sublib._word_zh('卢加斯|盧加斯', '卢加斯'),

	sublib._word_zh('奇布琉斯|吉卜露丝|ジヴリュス', '吉卜露丝'),
	sublib._word_zh('穆雷那斯|穆雷納斯|ミュレナス', '穆雷納斯'),

	sublib._word_zh('納特|納托', '納特'),

	['古諾|古诺', '古诺'],
	['复莉|夏莉', '夏莉'],

	sublib._word_zh('库娜', '庫娜'),

	//sublib._word_zh('普琪娜|普琪娜', '普琪娜'),
	sublib._word_zh('珀莲娜|波莲娜', '珀莲娜'),
	sublib._word_zh('珀莲|波莲', '珀莲'),

	/**
	 * 山之女神度萝拉的女儿，谷之女神姆米
	 */
	sublib._word_zh('艾恩西玛|恩谢玛', '艾恩西玛'),
	sublib._word_zh('赫尔卡特', '赫尔卡特'),

	/**
	 * 奥克
	 * 诺索伊的女王，涅芙
	 * 艾泽萨公主
	 */

	/**
	 * 矮人
	 */
	sublib._word_zh('达利欧|达里奧', '达利欧'),

	/**
	 * 恶魔王乌尔巴尔德
	 * 泽亚尔是让艾诺埃成为魔女的恶魔的名字。
	 * 曼赛伊德
	 *
	 *
	 */
	sublib._word_zh('惡魔の?王烏爾巴爾德', '惡魔之王乌尔巴尔德'),
	sublib._word_zh('乌尔巴尔德', '乌尔巴尔德'),


	['妲蒂艾|达提艾|韃媞艾', '妲蒂艾'],
	['戈兹|哥兹|哥茲', '哥茲'],
	['帕爾西斯|帕尔西斯', '帕尔西斯'],

	/**
	 *
	 */
	['莉潔娜|莉洁娜|利傑納|リジェナ', '莉洁娜'],

	/**
	 * @todo 神
	 *
	 * 酒神涅特尔（ネクトル）的从属神阿库艾利欧（アクエリオ）
	 * 又是男性随从的神，有着从属于女神菲莉亚的女性随从的女神梅多莉亚（メイドリア）作为妻子
	 *
	 * 阿库艾利欧是同乐神阿尔弗斯（アルフォス）与从属于女神伊什蒂亚的少年神皮斯提丝（ピスティス）一样以美男子而闻名的神。
	 *
	 * 菲利亚 菲莉亚大人是织物的女神。
	 *
	 * 萨提洛斯
	 *
	 * 海博斯的商业女神库贝利亚（クヴェリア）
	 *
	 * 医疗和草药的女神法娜凯雅（ファナケア）
	 *
	 * 海王托莱典
	 * 海之神托莱汀
	 *
	 * 战神托尔斯的女儿，狩猎和战争的女神阿玛佐娜（アマゾナ）的女战士
	 */
	['艾利奧斯|埃里奧斯|伊莱奥斯|[裏]奧斯|エリオス', '艾利奧斯'],

	['奥迪斯|奧迪斯|奥里斯', '奧迪斯'],
	['黑博思|海博思', '海博斯'],
	['(?:赫伊波|海博)([斯思]?)', '海博$1'],



	['扎爾基西斯|扎尔基西斯|札爾基西斯', '扎尔基西斯'],
	['拉维琉斯|拉布琉斯|拉夫鲁斯', '拉维琉斯'],

	sublib._word_zh('菲莉亚|菲利亚', '菲莉亚'),
	['伊什(特?[蒂提][亚亞])', '伊什特蒂亚'],

	sublib._word_zh('埃尔弗斯|阿尔弗斯', '埃尔弗斯'),

	sublib._word_zh('托莱典|托莱汀|达拉贡|拖莱登|达拉乌贡', '托莱汀'),
	sublib._word_zh('托尔兹|托尔斯|兹托', '托尔斯'),

	sublib._word_zh('法娜凱亞|法娜凯雅|法娜凯娅|菈妲法娜', '法娜凯雅'),

	['丘比乌斯|裘皮乌斯', '裘皮乌斯'],
	['艾特莉|艾莉特|莉艾特', '莉艾特'],

	['玛裘西斯|马丘西斯|馬丘西斯', '玛裘西斯'],
	['欧米洛斯|歐米洛斯', '欧米洛斯'],

	sublib._word_zh('塔拉波斯|塔拉博斯|タラボス|塔拉老板', '塔拉博斯'),

	['艾奇古斯|埃奇苟斯', '埃奇苟斯'],
	['大关|戴甘', '戴甘'],



	['库吉格|库奇古', '库吉格'],
	['吉安古|赞格|全古', '赞格'],

	/**
	 * 维洛斯
	 */

	['埃卡拉斯|艾卡拉斯|阿卡琉斯|阿喀琉斯', '埃卡拉斯'],
	['柯尔菲娜|克尔菲娜', '柯尔菲娜'],
	//菲莉欧娜

	sublib._word_zh('颇尔托斯|波鲁托斯', '波鲁托斯'),

	/**
	 * 蕾娜
	 *
	 * 德涅波拉
	 * 光树
	 *
	 * 战乙女德涅波拉
	 */
	sublib._word_zh('妮娅', '妮娅'),
	sublib._word_zh('梅迩菲娜', '梅迩菲娜'),

	/**
	 * 玛曼（マーマン）赤河岸边的哈提（ハッティ）王国灭亡
	 * 拉比琉斯
	 *
	 * 巴頓曾經是襲擊了艾里亞迪亞
	 *
	 * 睡眠与梦之神赞特
	 *
	 * 蛇之女王蒂亚特纳
	 * 蛇之王子达哈克呢。是蛇之女王迪亚多娜的儿子
	 *
	 * 戴蒙卢德 デイモンロー 惡魔之王
	 *
	 * 西亞多内海的人魚
	 */
	sublib._word_zh('拉比琉斯|拉维琉斯', '拉维琉斯'),
	sublib._word_zh('蒂亚特纳|迪亚多娜|迪雅多娜', '迪雅多娜'),
	//['迪雅多娜|迪[亚亞]多娜|迪亞多娜', '迪雅多娜'],

	sublib._word_zh('扎法菈妲', '扎法菈妲'),
	sublib._word_zh('达哈克', '达哈克'),

	sublib._word_zh('艾克利普斯', '艾克利普斯'),
	sublib._word_zh('贝努', '贝努'),

	sublib._word_zh('阿波菲斯', '阿波菲斯'),
	sublib._word_zh('吉普希尔|ジプシール', '吉普希尔'),

	sublib._word_zh('混沌之灵杯|混沌的灵杯', '混沌之灵杯'),

	sublib._word_zh('上位元?精灵?', '上位精灵'),
	sublib._word_zh('(暗|冰)元精', '$1之精灵'),


	/**
	 * @todo 摩多噶尔
	 *
	 * 红玉公子扎夏
	 * 蛆蝇的大僧正的扎尔比多大人
	 *
	 * 魯瓦尼亞
	 * 桑修斯
	 *
	 * 桑修斯的村女溫蒂
	 * 米卡尔
	 *
	 * 亞雷玛尼亞的大地
	 * 这里是扎尔基西斯所支配的魯瓦尼亞的北方的地域。
	 */
	sublib._word_zh('摩多噶尔', '摩多噶尔'),
	sublib._word_zh('吉西欧', '吉西欧'),
	sublib._word_zh('貝依?古', '貝依古'),

	/**
	 * @todo 亞里亞蒂亞
	 *
	 * 元老院
	 * 图利亚（トゥリア）。是这个国家工商会的会长女性
	 * 元老院议员首席的纳丘乌斯（ナキウス）・菲利特列克斯（ペリクレトス）
	 *
	 * 名为科尔尼斯的元老院议员
	 * 塞维利亚夫人是这个国家有力人士的妻子
	 *
	 * 图卡姆（テュカム）货币
	 */
	sublib._word_zh('阿裏亞德|亚利亚多|阿利亚德|亚利亚多|亞利亞多|亚里亚諾', '亞利亞多'),
	sublib._word_zh('亞裡亞蒂亞|阿里亚迪娜|亞莉亞迪娜|亞里亞蒂亞|亚里亚蒂亚|阿里亚迪亚|艾里亞迪亞|アリアディア', '亞里亞蒂亞'),

	sublib._word_zh('[迪提][塞赛]西[亞亚]|泰瑟西亚', '迪塞西亞'),

	sublib._word_zh('克拉蘇斯|克拉苏斯|庫拉斯|クラスス', '克拉苏斯'),
	sublib._word_zh('托魯瑪魯基斯|特馬爾基斯|トルマルキ', '托魯瑪魯基斯'),

	sublib._word_zh('塞维利亚', '塞维利亚'),
	sublib._word_zh('科尔尼斯', '科尔尼斯'),
	sublib._word_zh('纳丘乌斯', '纳丘乌斯'),
	sublib._word_zh('图利亚', '图利亚'),

	['キシュ|奇修|基修|基休', '基修'],

	/**
	 * 驴之耳
	 *
	 * 马尔西亚斯（マルシャス）
	 * デキウス=德基乌斯「西耶娜的哥哥」 菲利特列克斯
	 *
	 * 管理本剧场的埃尔弗斯大人的神官库莉欧
	 *
	 * 名為艾诺埃的女性已經不存在了。取而代之的是叫做艾拉的女性。
	 * 有著黑山羊頭的泽亚尔ー惡魔，現在要稱為澤魯
	 */

	sublib._word_zh('泽亚尔', '泽亚尔'),
	// 艾拉 = 艾诺埃
	sublib._word_zh('艾诺埃', '艾诺埃'),

	sublib._word_zh('西耶娜', '西耶娜'),
	sublib._word_zh('马鲁夏斯|马尔西亚斯', '马魯夏斯'),
	sublib._word_zh('米达斯', '米達斯'),

	sublib._word_zh('德基乌斯', '德基乌斯'),

	sublib._word_zh('库莉欧|库莉殴', '库莉欧'),

	sublib._word_zh('安魯非里亞|埃爾菲莉亞', '埃爾菲莉亞'),
	sublib._word_zh('驴之耳', '驴之耳'),

	/**
	 * シズフェ=希茲菲
	 *
	 */

	//
	['戈丹|高登', '戈丹'],
	['希茲菲|希丝菲', '希茲菲'],
	sublib._word_zh('玛蒂亚?|马蒂亚?', '瑪蒂亞'),
	sublib._word_zh('凯娜', '凯娜'),

	sublib._word_zh('诺维斯', '诺维斯'),

	//レイリア
	sublib._word_zh('蕾伊莉亚|萊利亞|蕾伊利亚|蕾伊莉亞', '蕾伊莉亞'),

	['諾拉|娜拉', '娜拉'],
	['賈絲汀|贾丝廷|贾丝婷', '賈絲汀'],

	/**
	 * 水之勇者的ネフィム
	 */
	sublib._word_zh('ネフィム|奈非姆|涅菲姆|奈非瑪', '涅菲姆'),

	/**
	 * 罗库斯王国
	 */
	sublib._word_zh('罗库斯|ロクス', '罗库斯'),

	/**
	 * 基鲁塔尔
	 */
	sublib._word_zh([
		'阿特拉[娜納][库庫][雅娅拉]|埃托拉娜庫亞|阿特拉納庫拉|阿特拉娜庫雅|阿特拉納庫亚|艾朵拉娜库亚',

		'阿特拉纳克亚?',
		'(阿特|艾朵|埃托)拉(娜|纳)库(雅|亞|娅|拉)',

	].join('|'), '阿特拉娜库雅'),
	sublib._word_zh('(阿特|艾朵|埃托)拉娜|アトラナ|阿特拉纳', '阿特拉娜'),

	sublib._word_zh('艾烏莉亞|艾薇利亚|尤莉亚|艾丽娅|艾歐莉亞', '艾烏莉亞'),

	sublib._word_zh('基魯塔尔', '基魯塔尔'),
	sublib._word_zh('布魯尔', '布魯尔'),


	['納尔古尔|娜迩葛尔|娜尔葛尔|娜邇葛爾|纳尔戈尔|纳尔噶尔|納爾戈爾', '娜迩葛尔'],
	['贝洛斯|维洛斯|贝罗斯|洛克斯|韋羅斯', '维洛斯'],
	['阿爾戈亞|阿尔戈亚|阿戈[爾尔][亚亞]?', '阿尔戈亚'],
	['卡農|卡隆|卡伦', '卡隆'],

	/**
	 *
	 */
	sublib._word_zh('尼妙|妮妙', '妮妙'),

	/**
	 *
	 */
	sublib._word_zh('米濃|米浓|米农|米農|美農', '米浓'),

	sublib._word_zh('聖蕾(娜|斯)(莉|利)?亞?共和国', '聖蕾娜莉亚共和国'),

	['萨里亚|萨莉亚', '萨里亚'],

	['帕西芭亞|帕西佩亚|帕西帕艾拉', '帕西芭亞'],

	['阿克伦|阿克隆|亚克隆|阿克倫', '阿克伦'],


	['[烏乌]斯之?街', '烏斯之街'],

	sublib._word_zh('濕地|濕原', '濕地'),

	/**
	 * 妖精
	 */
	//精灵
	['森精|妖精', '妖精'],
	sublib._word_zh('多莱亚多', '多莱亚多'),
	sublib._word_zh('涅莱德', '涅莱德'),

	/**
	 * 哈吉斯（ハギース）
	 * 萨特罗斯（サテュロス）
	 * 卡尔基诺斯被称为化蟹。
	 * 巴顿 バドン
	 *
	 * 女性的食尸鬼（グール）也被叫做古拉（グーラ）
	 */

	sublib._word_zh('萨特罗斯', '萨特罗斯'),
	sublib._word_zh('巴顿', '巴顿'),

	sublib._word_zh('戈尔贡', '戈尔贡'),

	sublib._word_zh('ムシュマッヘ', 'ムシュマッヘ'),

	//矮人 地精 哥布林
	['地精|哥布林', '哥布林'],
	['[奥奧][伽加]族?|食人魔', '食人魔'],
	['人狼|狼人', '人狼'],

	['狮鹫|格里芬', '獅鷲'],
	['鹫马|骏鹰|西伯格里夫', '鹫马'],
	['飞马|佩加索斯|珀伽索斯', '飞马'],

	...sublib.lazymarks['zh'],

	['精靈', '精灵'],

	sublib._word_zh('精靈（ELF）', '妖精（ELF）'),
	sublib._word_zh('森精', '妖精'),

	['米陶洛斯|弥诺陶洛斯|米諾陶洛斯', '米諾陶洛斯'],

	['戈雷姆', '哥雷姆'],

	sublib._word_zh('阿[拉剌]克[尼涅涅妮捏]|阿剌克涅|阿剌克捏|阿尔凯尼', '阿剌克涅'),

	['斯特里格斯|斯特里希斯', '斯特里希斯'],

	sublib._word_zh('勇者|勇士', '勇者'),
	sublib._word_zh('(暗黒|黒暗)騎士', '暗黒騎士'),
	sublib._word_zh('法の?騎士', '法の騎士'),
	sublib._word_zh('騎士', '騎士'),

	sublib._word_zh('盾之女神', '顿之女神'),

	sublib._word_zh('劍の(乙女|少女)', '劍の乙女'),
	sublib._word_zh('黑髮[の之的]賢者(?:[ ]?(千雪))?', '黑髮の賢者$1'),
	sublib._word_zh('黑髮[の之的]?賢者(?:[ ]?(千雪))', '黑髮の賢者$1'),
	sublib._word_zh('賢者', '賢者'),

	sublib._word_zh('锻冶|鐵冶', '锻冶'),

	sublib._word_zh('(吸血鬼)伯爵?', '$1伯爵'),

	//['[国國]', '国'],
	//['[圣聖]', '圣'],
	['[樹树]', '树'],

	[/\[女昌\]/g, '娼'],
	[/\[女支\]/g, '妓'],

	sublib._word_zh('娼婦|娼妓|changfu', '娼妓'),

	['丨', '!'],

	['\\([ ]+\\)', ''],

	// 視角
	[/^([\u4E00-\u9FFF][^\n]+[\u4E00-\u9FFF])◆$/gm, '◆$1'],
	[/^[・]([\u4E00-\u9FFF][^\n]+)$/gm, '◆$1'],
	[/^◆([\u4E00-\u9FFF][^\n]+)\n+/gm, '◆$1\n\n'],
	[/(\S)\n{1,2}◆/g, '$1\n\n\n◆'],

	[/([^\d\.\+\-\* ／\/])(\d+)(?=[^\d\.\+\-\* ／\/])/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	...sublib.lazymarks[4],

	...sublib.lazymarks['ltrim'],

	[/^【([^【】\n]+)】/gm, '「$1」'],

	...sublib.lazymarks[1],
	...sublib.lazymarks[2],

	[/[【]/g, '「'],
	[/[】]/g, '」'],

	...sublib.lazymarks[3],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n[ 　]*\.[ 　]*(?=\n)/g, '\n'],

	[/\n+\-+\n*$/g, ''],

]) as IWords[];

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	'荣耀',

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
