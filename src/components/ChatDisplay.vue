<template>
    <div class="q-pa-md column justify-center">
            <q-chat-message v-for="message of messages"
                            :key="message.timestamp"
                            name-sanitize
                            :name="message.userNickname"
                            text-sanitize
                            :text="[message.body]"
                            :sent="message.permId === selfPermId"
            />
    </div>
</template>

<script>
    export default {
        name: 'ChatDisplay',
        computed: {
            messages()
            {
                return this.$store.state.messages;
            },
            selfPermId()
            {
                return this.$store.state.permId;
            }
        }
    };
</script>

<style scoped>

</style>
