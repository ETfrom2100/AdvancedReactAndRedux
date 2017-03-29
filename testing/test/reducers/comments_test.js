import {expect} from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments reducer',()=>{
	it('handles action with unknown type',()=>{
		//expect(commentReducer()).to.be.instanceof(Array);
		expect(commentsReducer(undefined,{})).to.eql([]);
	});
	
	it('handles action of type SAVE_COMMENT',()=>{
		const action = {type:SAVE_COMMENT, payload:'new comment'};
		expect(commentsReducer([],action)).to.eql(['new comment']);
	})
});