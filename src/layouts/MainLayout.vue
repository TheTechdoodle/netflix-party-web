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
            <page-index/>
        </q-page-container>
    </q-layout>
</template>

<script>
    import PageIndex from 'pages/Index';
    export default {
        name: 'MainLayout',
        components: {PageIndex}
    };
</script>
