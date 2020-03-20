<template>
    <div class="container">
        <template v-if="logged_in">
            <Chat />
        </template>
        <template v-else>
            <Login />
        </template>
    </div>
</template>

<script>
import Chat from '@/components/Chat.vue';
import Login from '@/components/Login.vue';

export default {
    data() {
        return {
            logged_in: localStorage.getItem('user'),
        };
    },
    components: {
        Chat,
        Login,
    },
};
</script>
