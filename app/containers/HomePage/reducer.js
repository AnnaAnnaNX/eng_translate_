/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_USERNAME, CHANGE_USERTEXT, ADD_TRANSLATE, ADD_TRANSLATE_TO_PAGE } from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  text:[]
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    case CHANGE_USERTEXT:
      // Add user text
      let text = action.text || '';
      text = text.split(' ');
      text = text.map((a, i)=>{return {id: i, word: a, translate: '', userChoise: -1}})
      return state.set('text', text);
    case ADD_TRANSLATE:
    	console.log('state', state);
    	console.log('action', action);
    	return state;
    case ADD_TRANSLATE_TO_PAGE:
    	let translate = action.obj;
    	console.log('translate', translate);
    	console.log('action', action);
    	console.log('state', state.get('text'));
    	let newArr = [];
    	state.get('text').map((a,i)=>{
    	console.log('a', a);
    		if (translate.id == a.id) {
    			a.translate = translate.translate;
    			a.userChoise = 0;
    		}
    		newArr.push(a);
    	})
    	return state.set('text', newArr);
    default:
      return state;
  }
}

export default homeReducer;
