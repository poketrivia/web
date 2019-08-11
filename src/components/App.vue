<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>

<template>
    <v-app class="AppComponent">
        <TopNav></TopNav>

        <v-content>
            <v-container class="main-container">
                <router-view></router-view>
            </v-container>
        </v-content>

        <FooterNav></FooterNav>
    </v-app>
</template>