<template>
    <v-footer class="FooterNavComponent" color="secondary" app justify-center>
        <v-flex text-center>
            <div class="caption">
                <a href="https://github.com/poketrivia">
                    <v-icon color="primary">mdi-github-circle</v-icon>
                </a>

                Maintained by
                <a href="https://github.com/cypherix93">cypherix93</a>,
                <a href="https://github.com/benstrumeyer">benstrumeyer</a>
            </div>
            <p class="caption ma-0">
                &copy; {{new Date().getFullYear()}} poketrivia. All rights reserved.
            </p>
        </v-flex>
    </v-footer>
</template>