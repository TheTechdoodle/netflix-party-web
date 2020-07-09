<template>
    <q-form @submit="onSubmit" style="min-width: 400px">
        <q-input type="text" v-model="url" label="URL"/>
        <q-btn label="Submit" type="submit" color="primary"/>
    </q-form>
</template>

<script>
    export default {
        name: 'SocketConnection',
        data: () => ({
            url: ''
        }),
        methods: {
            onSubmit()
            {
                console.log(`Connecting to ${this.url}`);
                let connectionData = {
                    name: 'testing',
                    icon: 'Poohbear.svg'
                };
                let urlObj = new URL(this.url);
                for(let part of urlObj.search.substr(1).split('&'))
                {
                    if(part.startsWith('npSessionId='))
                    {
                        connectionData.npSessionId = part.substr(12);
                    }
                    else if(part.startsWith('npServerId='))
                    {
                        connectionData.npServerId = part.substr(11);
                    }
                }

                this.$connect(connectionData).then(() =>
                {
                    console.log('Connected!');
                });
            }
        }
    };
</script>

<style scoped>

</style>
