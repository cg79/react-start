import axios from 'axios';
// import { Rx } from "rxjs";
import * as Rx from 'rxjs/Rx';
import CoreApi from '../../../core/api/core.api';

export class UserActions {
	constructor() {
	}
    userLoogedIn = userData => (dispatch) => {
    	const storeData = {
    		type: 'USER_LOGGED_IN',
    		data: userData
    	};
    	dispatch(storeData);
    };
    userLogedOut = () => (dispatch) => {
    	const storeData = {
    		type: 'USER_LOGGED_OUT',
    	};
    	dispatch(storeData);
    };
		editName = (e) => (dispatch) => {
			const storeData = {
					type: ' SET_FILTER'
			};
			dispatch(storeData);
		};
		update = user => (dispatch) => {
			const storeData = {
			type:'USER_UPDATED',
		};
		dispatch(storeData);
	};


	updateUser = (user) => (dispatch, getState) => {
		debugger;
		const state = getState();
		const { users } = state.userReducer;

		let userForEditIndex = users.findIndex(el => el.id.value === user.id.value);
		users[userForEditIndex] = user;

		dispatch({type:'USERS_RECEIVED', data: users});
	};

    getUsers = () => async (dispatch, getState) => {

        CoreApi.call({
            url:    'api?results=20',
            method: 'GET'
        }).then((response) => {
            console.log(response);
            const {results} = response;

            const filteredUsers = results.filter(it => it.id && it.id.value);

            dispatch({type:'USERS_RECEIVED', data: filteredUsers});
        });
    	return;
    	axios.get('https://randomuser.me/api?results=20')
    		.then((response) => {
    			console.log(response);
    			const {results} = response.data;

                const filteredUsers = results.filter(it => it.id && it.id.value);

    			dispatch({type:'USERS_RECEIVED', data: filteredUsers});
    		})
    		.catch((err) => {
    			console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    			const resp = {
    				data:[{id:1, text :'John'}]
    			};
    			dispatch({type:'USERS_RECEIVED', data: resp.data});
    			// dispatch({type:"GET_USERS_ERROR", action: err});
    		});
    };

    getUsersPromise = () => axios.get("http://rest.learncode.academy/api/wstern/users");

    getUsersObservable = () => {
        const promise =  axios.get("http://rest.learncode.academy/api/wstern/users");

        var result = Rx.Observable.fromPromise(promise);
        result.subscribe(
            x => {
                console.log(x);
                this.setUsers();
            } ,
            e => console.error(e));

    }


}

export default new UserActions();
