/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe } from '.';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '異世界迷宮の最深部を目指そう';

/**
 * 其他用途
 *
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '{{0}}',
	chapter_title: `$t(chapter_id, [{{0}}]).{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words: IWords[] = [

	['相川[・、 \\?]*(漩[涡渦]波?浪?|漩?[涡渦]波浪?)', '相川渦波'],
	['漩?[涡渦]波浪?', '渦波'],
	['[陽阳]滝|阳滝', '陽滝'],
	['[涡渦]', '渦'],

	['奇利斯特|キリスト|Cristo|基督|基督', '基督'],

	[/基督[・、 \?]*[欧歐][亚亞]/g, '基督・欧亚'],

	[/[帕柏][林里][・\?]?(科隆|库洛|克隆)/g, '帕林库洛'],

	['[拉菈]?[丝絲斯师]([蒂緹提缇塔堤][娅亚婭亞雅][拉菈]|[蒂緹提][拉菈]{2})|拉?斯提娅拉|拉斯提拉亚|菈絲蒂娅菈雅拉|拉斯提', '菈絲蒂娅菈'],
	['([蒂緹提缇塔][娅婭亚亞][拉菈]|[蒂緹提][拉菈]{2})|提娅拉', '蒂娅菈'],
	['[拉菈]・[丝絲斯师]・[蒂緹提缇塔]・[娅婭亚亞]・[拉菈]', '菈・絲・蒂・娅・菈'],
	['[蒂緹提缇塔]・[娅婭亚亞]・[拉菈]', '蒂・娅・菈'],

	['迪亚[布波]罗', '迪亚波罗'],
	['([迪緹缇][亚亞]|迪尔|蒂亚|迪娅)(?![布波拉菈])', '緹亚'],
	['鬼怪・西斯|暗黑破坏神・顺', '迪亚波罗・西斯'],

	['[亚阿][尔爾][緹缇提堤]|貂卫|亚尔提', '阿尔緹'],
	['骐骐|骐达|堤达|[骐緹缇][达達]', '缇达'],

	['ヘルヴィルシャイン|贝魯維尔赛因|赫勒比勒夏因?', '赫勒比勒夏因'],
	['フランリューレ|芙兰琉[菈蕾莱]?', '芙兰琉莱'],
	['珐琅', '芙兰'],
	['莱亚|莱纳', '莱纳'],

	[/(斯诺|雪)[\?・ ]*『?沃克』?/g, '斯诺・沃克'],
	['格连|格伦', '格连'],

	['斯[諾诺]', '斯诺'],

	['林克尔', '沃克'],
	['维鲁','威尔'],

	['珐妮亚|[玛瑪瑪][利莉麗丽利][亚亞]', '玛利亚'],

	['蕾缇|蕾蒂|菈缇', '蕾蒂'],
	[/雷迪安特\-塞拉/g, '塞拉・蕾蒂安忒'],
	['雷迪安特|蕾蒂安忒|雷提安顿|レイディアント|雷迪安特', '蕾蒂安忒'],
	['瑟拉|塞拉|赛菈', '塞拉'],

	['カイクヲラ|卡伊库欧拉', '卡伊库欧拉'],
	['ラグネ|拉格涅|拉古涅|娜谷奈', '拉古涅'],

	['ハイン', '哈因'],

	['ホープス|[霍候侯]普[思斯]|候普斯', '霍普思'],
	['ジョークル|乔科尔|久庫路', '乔科尔'],


	['日樱|琳|[林玲琳](?=[桑]|小姐|他们)', '日樱'],

	['克罗|乌鸦|克劳', '克罗'],

	['レヴァン|雷安|雷文|莱文', '莱文'],

	['斐勒卢托|斐勒迪托', '斐勒卢托'],

	//雷琪
	// 雷鲁·桑库斯

	//艾利巴茨·利拜斯

	['艾鲁米拉德|艾尔米拉德|艾路米納多', '艾尔米拉德'],
	['希塔尔克|希达尔克|西塔卢庫', '希达尔克'],

	//阿尼艾斯·柯鲁娜
	['阿尼艾斯|艾格尼斯', '阿尼艾斯'],

	//海莉·维斯普洛佩
	//西娅・勒伽西

	['[诺諾]文', '诺文'],

	['洛德|罗德|羅德', '罗德'],
	[/罗德[・、 \?]*緹緹/g, '罗德・緹緹'],
	['蒂蒂', '緹緹'],

	['贝丝|贝斯', '贝絲'],

	/**
	 * @todo
	 */

	[/([維维維纬維][尔数數度数数]|Dimension|dhimennshonn|Ｄｉｍｅｎｓｉｏｎ)(?![\u4E00-\u9FFF])/ig, '維度'],

	['Freeze|冻结|冰结|冰洁', '冻结', 'ig'],

	['Connection', '连接', 'ig'],
	['Fo[ar]m(（泡沫）)?', '形式', 'ig'],

	['利特尔降雪|利特尔斯诺|little snow', '利特尔降雪', 'ig'],

	[/(Fire|Ｆｌａｍｅ|Flame|Flmae)[・ 　]*(arrow|Ａｒｒｏｗ)/ig, '炎之矢'],
	[/Light[・ 　]*Arrow/ig, '光之矢'],
	[/Wind[・ 　]*Arrow/ig, '风之矢'],
	[/Ice[・ 　]*Arrow/ig, '冰之矢'],

	[/Wind[・ 　]*Flame?berge/ig, '风刃劍'],
	[/(Ice|冰)[・ 　]*Flame?berge/ig, '冰结劍'],

	[/Flame[・ 　]*Wolf/ig, '炎狼'],
	[/Jewel[・ 　]*Fish/ig, '寶石鱼'],
	[/Ｑｕａｒｔｚ[・ 　]*Ｃａｎｓｅｒ/ig, '石英巨蟹'],
	[/Ｒｉｏ[・ 　]*Ｅａｇｌｅ|Rio[・ 　]*Eagle|リオeagle/ig, '里约鹰'],
	[/Ｆｌａｍｅ/ig, 'Flame'],

	[/Riosheth[・ 　]*Eagle/ig, 'Riosheth Eagle'],
	[/Sky[・ 　]*Runner/ig, 'SkyRunner'],
	[/Living[・ 　]*Legend/ig, 'Living Legend'],
	[/Xiphias[・ 　]*Spear/ig, 'Xiphias Spear'],

	[/Distance[・ 　]*Mute/ig, 'Distance Mute'],

	//Tidal Wave

	['次元[・ ]*雪', '次元・雪'],
	['(次元|維度)・决戦演算', '維度・决戦演算'],

	['次元魔术|次元魔法|魔法次元', '次元魔术'],
	['技能|技艺', '技能'],
	['怪兽|怪物|monster|Ｍｏｎｓｔｅｒ', '怪物', 'ig'],
	['急速箭|赶造箭|[冰冻]结[矢箭]', '冰结矢'],
	['[冰冻]结劍', '冰结劍'],
	['过捕护|过载|过度捕护', '过载'],
	[/([^\w])(mp|ＭＰ)(?![\w])/ig, '$1MP'],
	[/([^\w])(hp|ＨＰ)(?![\w])/ig, '$1HP'],

	['[战戦]演算', '戦演算'],

	['Fly[・ ]*Frame|ファイアフライ|中级火焰腾空|飞火|萤火|fire[・ ]*fly|Ｆｉｒｅ[・ ]*ｆｌｙ', '萤火', 'ig'],
	['火焰?之([箭剑])', '炎之$1'],
	['フレイムフランベルジュ|Flame[・ ]*(火焰|炎)之?剑|(Flame|Flmae)[・ ]*Flame?berge|(火焰|炎)之?[剑劍]', '炎之剑', 'ig'],

	['『Flamberge』', '『炎之剑』'],

	['ミドガルズブレイズ|耶梦加得之炎', '耶梦加得之炎'],
	['耶梦加得|Miðgarðsormur', '耶梦加得', 'ig'],

	['ゼーア・?ワインド|The Wind|Zitteruto・Wind|Zeea・Wind', '风卷'],

	['Ice|冰', '冰', 'ig'],

	[/Stat[ue]s|Ｓｔａｔｕｓ/ig, '状态'],
	[/Skill/ig, '技能'],
	[/Rank|Ｒａｎｋ/ig, '級别'],

	['魔石?线', '魔石线'],
	['(阿[雷瑞][亚亞]?斯|阿瑞斯|那个椅子)[家家][的の之]?[宝寶直][剑剣劍]', '阿雷亚斯家的宝剑'],
	['(阿[雷瑞][亚亞]?斯|阿瑞斯)', '阿雷亚斯'],
	['(激突|撕裂)者?比德尔', '撕裂者比德尔'],

	['新月琉璃([的の制之]?[直宝]劍)', '新月琉璃直劍'],

	['Rokh[・ ]*Bringer', '堕落使徒', 'ig'],

	//風之理的盜竊者

	[/(之)?理的(?:盜[竊窃]?|[竊窃]盜?)[者贼]/g, '$1理的盜竊者'],
	//[/盜(.{1,2})之理/g, '$1之理的盜竊者'],

	[/Crystal[・ ]*Ant|水晶蚁/ig, '水晶蚁'],

	['世界奉[還还][陣阵]', '世界奉還陣'],

	['魔石人类|魔石人间', '魔石人类'],
	['Jewel Cross', '魔石人类'],

	['[級级]别|等[級级]|レベル', '級别'],

	['天上[的の]?七?[骑騎]士', '天上的七骑士'],

	['艾尔乌纳|阿尔十字', '艾尔乌纳'],

	['フューリー|暴怒者|激怒者|弗利', '暴怒者'],

	['魔法?石头?', '魔石'],

	['姓名|名字|名称', '名字'],

	['(圣诞|童話|生诞)[节祭]', '圣诞祭'],
	['祭典|庙会', '祭典'],

	['[冒探][险索]者', '探索者'],

	['[米弥]诺陶[洛诺]斯|牛头人', '米诺陶洛斯'],

	['[赤红][色之]米诺陶洛斯', '赤之米诺陶洛斯'],

	//['『显示』', '『表示』'],
	//['[『「](携带品|物品|所有物|持ち物)[』」]', '『携带品』'],

	[/[『「《（]([^\n『「《（』」》）]{1,20})[』」》）]/g, function (...m)
	{
		let c;

		switch (m[1].toLowerCase())
		{
			case '携带品':
			case '物品':
			case '所有物':
			case '持有物品':
			case '持ち物':
			case '持有物':
			case '持有物品':
				c = '所有物';
				break;
			case '表示':
			case '显示':
			case '注视':
				c = '表示';
				break;
			case '形式':
			case '形态':
			case '泡沫':
			case '气泡':
				c = '形式';
				break;
			case '人造品':
			case '制作品':
			case '制造品':
			case '人造物':
				c = '人造物';
				break;
			case '假货':
			case '伪物':
			case '赝品':
				c = '伪物';
				break;
			case '材料':
			case '素体':
				c = '素体';
				break;
			case '眼睛':
			case '目':
			case '锐利的目光':
			case '炯眼':
				c = '炯眼';
				break;
			case '连接':
			case '联结':
				c = '连接';
				break;
			case '感应':
			case '感応':
				c = '感应';
				break;
			case '想起':
			case '想起收束':
				c = m[1];
				break;
			case '新月琉璃直劍':
			case '新月琉璃':
				c = m[1];
				break;
			case 'flamberge':
				c = '炎之剑';
				break;
			case 'light':
				c = '光';
				break;
			case 'flame':
				c = '火焰';
				break;
			case 'wind':
				c = '风';
				break;
			case '地图':
			case '技能':
			case '正道':
			case '利特尔降雪':
			case '次元・雪':
			case '維度':
				c = m[1];
				break;
			default:
				break;
		}

		if (c)
		{
			return `『${c}』`;
		}

		return m[0];
	}],

	['『形式』（泡沫）', '『形式』'],

	/**
	 * @todo 国
	 */

	['(巨型移动|移动巨型|巨型|此大|巨大)(剧场|演剧)船?|巨大演剧船', '巨型演剧船'],
	['(剧场|演剧)船|演剧船', '演剧船'],

	['一[之ノ]月[联连][盟合]国[综総]合[骑騎]士[团団]种?舞踏?会', '一之月联合国综合骑士团舞会'],
	['ヴアルフウラ|ヴアルフアラ', '瓦尔法拉'],

	['舞[斗闘](大?)会', '舞闘$1会'],

	['弗茲亚茲|弗祖雅族|弗兹亚兹|[弗符拉莱][茲兹祖滋茨茲][亚雅亞][茲兹族滋茨茲]|フーズヤーズ', '弗茲亚茲'],
	['[連联聯]合[国國]', '联合国'],
	['ヴァルト|[瓦瓦][尔爾][德德]|巴鲁多|巴鲁德|法尔特|沃尔特', '瓦尔德'],
	['帕尼亚|发内尔|法尼[亚亞]|菲尼亚', '帕尼亚'],

	['古尔亚德|グリアード', '古尔亚德'],

	['[劳勞]拉[維维][亚亞]', '劳拉維亚'],

	['ユグラドラシル|世界树聿格拉兜柆希鲁', '世界树聿格拉兜柆希鲁'],

	['河川风罗', '河川法芙拉河'],

	['港前新鲜海鲜亭|新鲜海鲜亭港前|港前新鲜开戦亭', '港前新鲜海鲜亭'],

	//埃尔多拉琉
	//佩艾希亚

	/**
	 * @todo
	 */

	//['武戏'],

	['[国國]', '国'],

	['余欲', '餘裕'],
	['借口', '藉口'],
	['检起', '撿起'],
	['体味', '体會'],

	['试听，后面的大剑', '奧里亞大剑'],

	[/女王・of・福雷斯特/ig, '福雷斯特女王'],

	[/军团[\?・]?蝙蝠/g, '军团・蝙蝠'],

	['等级（レベル）', '級别'],
	['技能（スキル）', '技能'],

	['職業|职业', '职业'],

	['妻身', '妾身'],

	[/((.+)[酱醬]?)(?:（\2）)/g, '$1'],

	[/([^\w])(Solo)(?![\w])/ig , '$1Solo'],

	/**
	 * @todo
	 */

	[/^\d+ 拷贝$/gm, ''],

	//['向后', '向後'],
	//['后天', '後天'],
	['后', '後'],

	[/(.)?(决不)/g, function (...m)
	{
		if ('解坚'.indexOf(m[1]) != -1)
		{
			return m[0];
		}

		return m[1] + '絕不';
	}],

	/**
	 * @todo 格式
	 */

	['名字(相川|迪亚)', '名字 $1'],

	[/([先後后]天)(?:技能|技艺|スキル)(?:（スキル）)?[　 ：]*(?!的)([\u4E00-\u9FFF])/g, '$1技能：$2'],
	[/(名字)[　 ：]+([\u4E00-\u9FFF])/g, '$1：$2'],

	[/([\d０１２３４５６７８９]+(?:\.[\d０１２３４５６７８９]+))(?![a-zＡ-Ｚ人])(.?)/g, function(...m)
	{
		return StrUtil.toHalfNumber(m[1]) + ((m[2] && /[\u4E00-\u9FFF]/.test(m[2])) ? ' ' : '') + m[2];
	}],

	[/([\d０１２３４５６７８９]+)张/g, function (...m)
	{
		return StrUtil.toFullNumber(m[1]) + '枚';
	}],

	[/币([\d０１２３４５６７８９]+)个/g, function (...m)
	{
		return '币' + StrUtil.toFullNumber(m[1]) + '枚';
	}],

	[/(等[級级]|Rank|[級级]别|水平)[　 ：]*([\d０１２３４５６７８９]+)/ig, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	[/([^\d\.\+\-\* ／\/])(\d+)([^\d\.\+\-\* ／\/])/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]) + m[3];
	}],

	[/([\d\u4E00-\u9FFF])[　 ]*([HM]P)[　 ：]*(\d+)/g, '$1　$2 $3'],
	[/([HM]P)[　 ：]*(\d+)/g, '$1 $2'],

	[/([\d０１２３４５６７８９]+)[　 ]*[\/／][　 ]*([\d０１２３４５６７８９]+)/g, function (...m)
	{
		return StrUtil.toHalfNumber(m[1]) + '／' + StrUtil.toHalfNumber(m[2]);
	}],

	[/([^\u4E00-\u9FFF])(?:班|class|職業|职业|阶級)[： 　]*(无|剑士|奴隶|骑士|英雄|奴隷|斥候|騎士|斗士|魔法使|[冒探][险索]者|使徒|修道女|戦士)/ig, function (...m)
	{
		if (/\w$/.test(m[1]))
		{
			m[1] += ' ';
		}

		return m[1] + '职业：' + m[2];
	}],

	[/[\!\(\):,~∶]/g, function (...m)
	{
		return StrUtil.toFullWidth(m[0], {
			skip: {
				space: true,
			},
		});
	}],

	[/([\u4E00-\u9FFF])([\.])(?!\.)/g, '$1。'],

	[/\*(\d+)/g, '×$1'],
	[/×(\d+)([\u4E00-\u9FFF])/g, '×$1 $2'],
	[/×(\d+)(?![\.\d])/g, function (...m)
	{
		return StrUtil.toFullNumber(m[0]);
	}],

	[/(\n)[ \t　]+/g, '$1'],
	[/^[ \t　]+/g, ''],

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

	[/｛/g, '（'],
	[/｝/g, '）'],

	[/(「[^」]*)「([^」]*)」/g, '$1『$2』'],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n[ 　]*\.[ 　]*(?=\n)/g, '\n'],

	[/《/g, '『'],
	[/》/g, '』'],

	[/[《『「]([\?？]{3}|表示|显示)[》』」]/g, '『$1』'],

	[/[\?？]{3}/g, function (...m)
	{
		return StrUtil.toFullWidth(m[0], {
			skip: {
				space: true,
			},
		});
	}],

	[/[\u4E00-\u9FFF「！」][—\-]+|[—\-]+[\u4E00-\u9FFF「！」]|[—\-]{2,}/g, function (...m)
	{
		return m[0].replace(/[—\-]/g, '－');
	}],

	[/[—\-－](\d)[—\-－]/g, function (...m)
	{
		return '－' + m[1] + '－';
	}],

	[/^－{3,}$/gm, '－－－'],
	[/^◆{3,}$/gm, '◆◆◆'],

	[/^[－=]+(明天继续|分割线)[－=]+$/gm, '\n'],

] as IWords[];

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	'水平',

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
