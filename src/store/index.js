import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */)
{
    const Store = new Vuex.Store({
        state: {
            messages: [],
            connected: false,
            connectionSettings: {
                icon: '',
                name: '',
                npSessionId: '',
                npServerId: ''
            },
            permId: ''
        },
        mutations: {
            addMessage(state, message)
            {
                state.messages.push(message);
            },
            updateUserSettings(state, update)
            {
                for(let message of state.messages)
                {
                    if(message.userId === update.userId)
                    {
                        message.userNickname = update.userSettings.userNickname;
                        message.userIcon = update.userSettings.userIcon;
                    }
                }
            },
            setConnected(state, connected)
            {
                state.connected = connected;
            },
            setConnectionSettings(state, {icon, name, npSessionId, npServerId})
            {
                state.connectionSettings.icon = icon;
                state.connectionSettings.name = name;
                state.connectionSettings.npSessionId = npSessionId;
                state.connectionSettings.npServerId = npServerId;
            },
            setPermId(state, id)
            {
                state.permId = id;
            }
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    });

    return Store;
}
