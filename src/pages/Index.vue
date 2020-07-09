<template>
    <q-page class="flex flex-center column">
        <socket-connection/>
    </q-page>
</template>

<script>
    import SocketConnection from 'components/SocketConnection';
    export default {
        name: 'PageIndex',
        components: {SocketConnection}
    };
</script>
