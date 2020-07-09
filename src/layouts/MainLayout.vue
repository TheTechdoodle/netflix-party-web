<template>
    <q-layout view="hHh lpr fff">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>
                    Netflix Party Web
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: 'MainLayout',
        components: {}
    };
</script>
