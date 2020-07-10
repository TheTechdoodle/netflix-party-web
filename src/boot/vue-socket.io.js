import io from 'socket.io-client';
import {nanoid} from 'nanoid';

export default ({store, Vue}) =>
{
    Vue.prototype.$connect = ({icon, name, npSessionId, npServerId}) =>
    {
        return new Promise(resolve =>
        {
            const socket = io(`https://${npServerId}.netflixparty.com/`);
            Vue.prototype.$socket = socket;

            socket.on('connect', () =>
            {
                const id = nanoid(16);
                socket.emit('joinSession', {
                    sessionId: npSessionId,
                    permId: id,
                    userSettings: {
                        recentlyUpdated: true,
                        userIcon: icon,
                        userNickname: name,
                        userId: id
                    }
                }, data =>
                {
                    store.commit('setConnected', true);

                    // Add previous loaded messages
                    for(let message of data.messages)
                    {
                        store.commit('addMessage', message);
                    }

                    // Listen for socket events
                    socket.on('sendMessage', message =>
                    {
                        store.commit('addMessage', message);
                    });
                    socket.on('updateSettings', updateSettings =>
                    {
                        store.commit('updateUserSettings', updateSettings);
                    });
                    socket.on('disconnect', () =>
                    {
                        store.commit('setConnected', false);
                    });

                    // Set up functions
                    Vue.prototype.$sendChat = message =>
                    {
                        socket.emit('sendMessage', {
                            body: message,
                            isSystemMessage: false,
                            timestamp: Date.now(),
                            userId: id,
                            permId: id,
                            userIcon: icon,
                            userNickname: name
                        });
                    };
                    Vue.prototype.$disconnect = () =>
                    {
                        socket.emit('leaveSession', null, () =>
                        {
                            socket.disconnect();
                        });
                    };
                    resolve();
                });
            });
        });

    };
}
