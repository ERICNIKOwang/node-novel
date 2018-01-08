/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe } from '.';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '抗いし者たちの系譜';

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

	['相川(漩[涡渦]波?浪?|漩?[涡渦]波浪?)', '相川渦波'],
	['漩?[涡渦]波浪?', '渦波'],

	['奇利斯特|キリスト', '基督'],

	[/帕林[・\?]?(科隆|库洛)/g, '帕林库洛'],

	['[拉菈][丝絲斯师]([蒂緹提缇][娅亚][拉菈]|[蒂緹提][拉菈]{2})', '菈絲蒂娅菈'],

	['迪亚[布波]罗', '迪亚波罗'],
	['([迪緹缇]亚|迪尔)(?![布波拉菈])', '緹亚'],
	['鬼怪・西斯', '迪亚波罗・西斯'],

	['[亚阿]尔[緹缇]|貂卫', '阿尔緹'],
	['骐骐|骐达', '骐达'],

	['ヘルヴィルシャイン|贝魯維尔赛因|赫勒比勒夏因?', '赫勒比勒夏因'],
	['フランリューレ|芙兰琉菈', '芙兰琉莱'],
	['莱亚|莱纳', '莱纳'],

	['(斯诺|雪)\\?沃克', '斯诺・沃克'],

	[/(基督|莱纳)（\1）/g, '$1'],

	['珐妮亚|玛利亚|玛利亚', '玛利亚'],

	/**
	 * @todo
	 */

	[/([維维維][尔数度数]|Dimension)(?![\u4E00-\u9FFF])/g, '維度'],

	['火焰?之([箭剑])', '炎之$1'],
	['Freeze|冻结', '冻结'],
	['Ice|冰', '冰'],

	['次元魔术|次元魔法', '次元魔术'],
	['舞斗大会|舞闘大会', '舞闘大会'],
	['技能|技艺', '技能'],
	['怪兽|怪物', '怪物'],
	['急速箭|赶造箭', '急速箭'],
	['过捕护|过载', '过载'],
	[/([^\w])(mp|ＭＰ)(?![\w])/ig, '$1MP'],
	[/([^\w])(hp|ＨＰ)(?![\w])/ig, '$1HP'],

	['魔石?线', '魔石线'],
	['(阿雷亚斯|阿瑞斯|那个椅子)家的?宝剑', '阿雷亚斯家的宝剑'],
	['(激突|撕裂)者?比德尔', '撕裂者比德尔'],

	['[級级]别|等[級级]', '級别'],

	//['『显示』', '『表示』'],
	//['[『「](携带品|物品|所有物|持ち物)[』」]', '『携带品』'],

	['[『「《](.{2,4})[』」》]', function (...m)
	{
		let c;

		switch (m[1])
		{
			case '携带品':
			case '物品':
			case '所有物':
			case '持有物品':
			case '持ち物':
				c = '携带品';
				break;
			case '表示':
			case '显示':
				c = '表示';
				break;
			case '地图':
			case '技能':
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

	/**
	 * @todo 国
	 */

	['弗茲亚茲|弗祖雅族|弗兹亚兹|フーズヤーズ', '弗茲亚茲'],
	['[連联]合国', '联合国'],
	['ヴァルト|瓦尔德|巴鲁多|巴鲁德|古尔亚德', '瓦尔德'],

	/**
	 * @todo
	 */

	//['武戏'],

	['余欲', '餘裕'],
	['借口', '藉口'],
	['检起', '撿起'],

	['试听，后面的大剑', '奧里亞大剑'],

	[/女王・of・福雷斯特/ig, '福雷斯特女王'],

	[/军团[\?・]?蝙蝠/g, '军团・蝙蝠'],

	['技能（スキル）', '技能'],

	['職業|职业', '职业'],

	[/(.+)（\1）/g, '$1'],

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

	[/([先後后]天)(?:技能|技艺)(?:（スキル）)?[　 ：]*(?!的)([\u4E00-\u9FFF])/g, '$1技能：$2'],
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

	[/(等[級级]|Rank|[級级]别|水平)[　 ：]*(\d+)/ig, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	[/([^\d\.\+\-\* ／\/])(\d+)([^\d\.\+\-\* ／\/])/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]) + m[3];
	}],

	[/([\d\u4E00-\u9FFF])[　 ]*([HM]P)[　 ：]*(\d+)/g, '$1　$2 $3'],
	[/([HM]P)[　 ：]*(\d+)/g, '$1 $2'],

	[/(\d+)[　 ]*[\/／][　 ]*(\d+)/g, '$1／$2'],

	[/([^\u4E00-\u9FFF])(?:班|class|職業|职业)[： 　]*(无|剑士|奴隶|骑士|英雄|奴隷)/ig, function (...m)
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

	[/^([^\n"“”「」'\[\]［］]*)["“'\[［]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ『』\u4E00-\u9FFF][^\n"“”「」'\[\]［］]*(?:\n[^\n"“”「」'\[\]［］]*)?)["”'\]］]/gm, '$1「$2」'],
	[/^([^\n"“”『』'‘’]*)["“'‘]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n"“”『』'‘’]*)["”'’]/gm, '$1『$2』'],
	[/^([^\n【】<>]*)[<]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】<>]*)[>]/gm, '$1【$2】'],

	[/(『[^『』\n]+』[^\n"“”『』'‘’]*)["“'‘]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n"“”『』'‘’]*)["”'’]/gm, '$1『$2』'],
	[/(「[^「」\n]+」[^\n"“”「」'‘’]*)["“'‘]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n"“”「」'‘’]*)["”'’]/gm, '$1「$2」'],

	[/^([^「」\n【】\[\]［］\{\}]*)[\[［\{]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】\[\]］\{\}]*)[\]］\}]/gm, '$1【$2】'],
	[/(「[^「」\n【】\[\]［］]*)[\[［]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】\[\]］]*)[\]］]/gm, '$1【$2】'],


	[/(【[^【】\n<>\[\]\{\}]+】[^\n【】<>\[\]\{\}]*)[<\[\{]([ ]*[…－—\w０-９ａ-ｚＡ-Ｚ\u4E00-\u9FFF][^\n【】<>\[\]\{\}]*)[\]\}>]/gm, '$1【$2】'],

	[/[\[【]/g, '「'],
	[/[\]】]/g, '」'],

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

	[/^－+明天继续－+$/gm, '\n'],

] as IWords[];

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	/([^\u4E00-\u9FFF])班[： ]*(?!无|剑士|奴隶)/g,

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
