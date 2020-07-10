<template>
    <q-page class="flex flex-center column">
        <template v-if="showSocketConnection">
            <socket-connection/>
        </template>
        <template v-else>
            <chat-display/>
        </template>
    </q-page>
</template>

<script>
    import SocketConnection from 'components/SocketConnection';
    import ChatDisplay from 'components/ChatDisplay';
    export default {
        name: 'PageIndex',
        components: {ChatDisplay, SocketConnection},
        computed: {
            showSocketConnection()
            {
                return !this.$store.state.connected;
            }
        }
    };
</script>
