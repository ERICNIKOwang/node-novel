/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from '.';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = 'ウォルテニア戦記';

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

	//['要取代的字', '取代後的字'],

	//['— —', '——'],

	[/被?(?:异世界召唤|召唤到异世界|召唤到异世界|召喚到異世界)後?[的]?[第]?(\d+)[日天]目?/gm, '異世界召喚第$1日'],

	[/(异世界召唤第?\d+[日天]目?|第\d+[日天])([^\n]*)[\[「\{（]([^\]\n]+)[\]」\}）]/gm, '$1$2【$3】'],

	[/(异世界召唤第\d+日[^\n]*)[ ]+(【)/gm, '$1$2'],

	[/(异世界召唤第\d+日[^\n]*)(\:)?\n+/g, function (...m)
	{
		if (m[2])
		{
			m[2] = StrUtil.toFullWidth(m[2]);
		}
		else if (typeof m[2] == 'undefined')
		{
			m[2] = '';
		}

		return `${m[1]}${m[2]}\n\n`;
	}],

	['召喚|召換', '召喚'],

	['御子柴', '御子柴'],
	['亮真', '亮真'],

	['奥尔特梅亚|奧德梅亞|奥特梅亚|奥路托米亚|奥德梅亚|奥德梅亚|オルトメア|奧德美亞|奧多梅亞', '奥德梅亞'],

	['盖耶斯|盖亚西|该耶斯', '盖耶斯'],
	['夏蒂娜|夏鲁缇娜|夏迪娜|シャルディナ', '夏蒂娜'],

	['玛飞锡特|瑪飛錫特|玛非菲锡|玛非锡特|马尔菲斯特|梅尔菲斯|馬爾菲斯特|瑪爾菲斯特|マルフィスト', '瑪非錫特'],
	['萨拉|莎拉|サーラ', '莎拉'],
	['萝拉|ローラ', '蘿拉'],

	['斉藤|齐藤', '斉藤'],

	/**
	 * @todo 第二章
	 */
	// #25 #26
	['纱雅|咲耶|咲夜|佐久夜', '咲夜'],
	['纳尔蒂娜|梅爾緹娜|纳尔迪娜|梅尔蒂娜', '梅爾緹娜'],
	['貝爾格斯通|伯格顿|贝尔古斯通|貝爾古斯通', '貝爾古斯通'],
	['格哈德|格哈特|格魯哈魯特|格哈魯|盖尔哈特|ゲルハルト', '格哈特'],
	['平民公主|庶民公主', '庶民公主'],
	['露碧丝|露比丝|露碧絲|ルピス|露碧斯', '露碧絲'],
	['霍城|霍德拉姆|霍洛兰|鼓城|忽多蘭|忽德兰', '霍德拉姆'],
	['大厅鼓?将军', '霍德拉姆将军'],

	['納迪妮|拉迪娜|ラディーネ', '納迪妮'],

	['羅赛里亚王国|李尔王国', '羅赛里亞王国'],

	['羅赛里亚努斯|ローゼリアヌス', '羅赛里亞努斯'],
	['羅赛里亚|罗泽利亚|羅賽里亞|罗赛里雅|罗萨里亞|ローゼリア|罗萨利亞|羅賽里亞|罗杰里亞', '羅賽里亞'],

	['米海爾|米歇尔|米海尔|ミハイル', '米海爾'],
	['艾蕾娜|埃琳娜|艾莲娜|艾琳娜|エレナ|艾莉娜|艾丽娜|埃里娜', '艾蕾娜'],

	['斯坦納|施泰奈|シュタイナー|施泰納', '斯坦納'],

	[`艾蕾娜${sp}斯坦納`, '艾蕾娜・斯坦納'],

	['比雷埃夫斯|匹雷乌斯', '比雷埃夫斯'],

	// @todo 紅獅子
	['莉欧奈|黎歐內|麗歐奈|丽欧奈|丽奥奈|リオネ', '莉歐奈'],
	['波尔茨|波爾斯|波爾次|伯罗斯|波爾茲|波爾茨|ボルツ', '波爾茨'],

	['紅獅子', '紅獅子'],

	['严翁|嚴翁', '嚴翁'],
	['伊賀崎', '伊賀崎'],

	//['沃特尼亚'],

	['賽魯达|查魯達|扎卢达|薩魯達|扎魯达', '查魯達'],

	['凱尔|ケイル|凱文', '凱爾'],
	['伊路尼亞|イルーニア', '伊路尼亞'],

	[`凱爾${sp}伊路尼亞`, '凱爾・伊路尼亞'],

	['梅莉莎|梅丽莎', '梅莉莎'],

	/**
	 * @todo 第三章
	 */
	['尤利亚|尤莉娅', '尤莉娅'],
	['扎尔茨贝格|扎尔茨堡|扎茨尔伯格', '扎爾茨堡'],
	['扎尔茨|扎茨尔|萨尔茨', '扎爾茨'],
	['希莫奴|希莫里', '希莫奴'],

	['托瑪斯|トーマス', '托瑪斯'],

	//-------------------

	['暗[道巷]理', '暗巷裡'],
	['暗道', '暗巷'],
	['米耶尔斯|密斯托尔|米斯托尔|ミストール', '密斯托爾'],
	['伊庇鲁斯|伊匹洛斯|伊畢洛斯|伊庇罗斯|イピロス', '伊匹洛斯'],
	['克裡斯托夫|克里斯托夫', '克里斯托夫'],

	['梅丽萨|梅丽莎|梅利薩', '梅丽莎'],

	[/([斯娅奴])\?(扎爾茨堡|克里斯托夫)/g, '$1・$2'],

	['约书亚|喬書亞', '約書亞'],
	['佩爾哈雷斯|贝哈雷斯|配爾哈雷', '佩爾哈雷斯'],

	/**
	 * @todo 第四章
	 */
	['西里歐斯|セイリオス', '西里歐斯'],

	['西蒙尼|西蒙娜', '西蒙娜'],

	['ラフィール|拉斯菲魯', '拉斯菲魯'],

	['米斯托|米斯特', '米斯托'],

	['尤利安|朱利叶斯|尤里努|尤里安|尤里努斯|尤利安|尤里安', '尤利安'],

	['格拉哈特|格拉霍特|グラハルト|格拉德|格拉哈尔特|格拉斯哥|古拉哈魯多', '格拉霍特'],

	['施?巴茲海姆|什巴茨海姆|シュバルツハイム', '施巴茲海姆'],

	['古利多|グリード|古魯多', '古利多'],
	['奧森|オーサン', '奧森'],

	//-------------------------

	['赤果+', function ($0)
	{
		return $0.replace(/果/g, '裸');
	}],

	['加增', '增加'],
	['選擇肢裡', '選擇裡'],
	['關西(?!方|邊)', '關係'],

	['的媽？', '的吗？'],

	['想到的注意', '想到的主意'],
	['尽然回事', '竟然會是'],
	['尽然', '竟然'],
	['、廉贞', '、亮真'],
	['能上站成', '能上战场'],
	['撤退站', '撤退战'],

	['只道先带', '只到先代'],
	['少侠|少主', '少主'],

	[/強\(女女女\)/g, '強姦'],

	[/\*{2,3}ノ本/, '日ノ本'],

	[/\[/g, '「'],
	[/\]/g, '」'],

	[/^([^\n"“”「」]*)["“]([^\n"“”「」]*)["”]/gm, '$1「$2」'],
	[/\{([^\n\{}【】「」]*)\}/gm, '【$1】'],
	[/^([^\n"“”『』]*)["“]([^\n"“”『』]*)["”]/gm, '$1『$2』'],

	[',', '、'],

	[/^　/gm, ''],

	[/\d+[：:]/g, function (...m)
	{
		return StrUtil.toFullWidth(m[0], {
			skip: {
				space: true,
			},
		});
	}],

	...sublib.lazymarks[4],

	[/([\u4E00-\u9FFF])\.(?!\.)/g, '$1。'],

	[/\n([ ]*[^：\n]+)\n+[ ]*([^：\n]+：[^\n]*)/ug, '\n$1\n\n$2'],
	[/\n[ ]*([^：\n]+：[^\n]*)\n+([ ]*[^：\n]+\n)/ug, '\n$1\n\n$2'],

	[/\n+\-+\n+/gm, '\n\n\n'],

	[/(\n)[　\u3000　　]{2,}/g, '$1　'],

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
