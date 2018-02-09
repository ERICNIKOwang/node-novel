/**
 * Created by user on 2018/1/31/031.
 */

import { IWords } from '../index';

export * from 'tieba-harmony';
import tiebaHarmony from 'tieba-harmony';
import sublib from './index';

export function getTable(options: tiebaHarmony.IOptions = {}): IWords[]
{
	return sublib._word_zh_all(tiebaHarmony.getTable(options));
}

import * as self from './baidu';
export default self;
