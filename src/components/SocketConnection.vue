<template>
    <q-form @submit="onSubmit"
            autofocus
            style="min-width: 400px"
            class="q-gutter-md">
        <q-input type="url"
                 v-model="url"
                 label="Party URL"
                 outlined
        />
        <q-btn label="Submit"
               type="submit"
               color="primary"
               :loading="loading"
        />
    </q-form>
</template>

<script>
    export default {
        name: 'SocketConnection',
        data: () => ({
            url: '',
            loading: false
        }),
        methods: {
            onSubmit()
            {
                this.loading = true;
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
