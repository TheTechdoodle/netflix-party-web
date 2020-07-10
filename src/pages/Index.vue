<template>
    <q-page class="flex flex-center column">
        <template v-if="showSocketConnection">
            <socket-connection/>
        </template>

    </q-page>
</template>

<script>
    import SocketConnection from 'components/SocketConnection';
    export default {
        name: 'PageIndex',
        components: {SocketConnection},
        computed: {
            showSocketConnection()
            {
                return !this.$store.state.connected;
            }
        }
    };
</script>
