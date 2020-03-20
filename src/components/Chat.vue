<template>
    <div class="row">
        <div class="col align-self-center w-50 text-center">
            <h2>Chat Vue</h2>
            <hr />
            <div class="text-left">
                <b-input placeholder="Seu nome..." ref="name" value="Alexandre Cardoso"></b-input>

                <div class="mt-3">
                    <div
                        class="p-2 mb-3"
                        style="border: solid 1px #efefef;width:100%;height:400px;"
                    >
                        <template v-if="messages.length <= 0">
                            <i>Comece uma convesra....</i>
                        </template>
                        <p
                            v-for="(message, index) in formatedd_messages"
                            :key="index"
                            v-html="message"
                        ></p>
                    </div>
                </div>

                <b-input placeholder="Mensagem...." ref="message" value="Ola!!"></b-input>

                <span class="error">{{ error }}</span>

                <br />

                <b-button variant="outline-success mt-3" @click="send">Enviar</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: null,
            messages: [],
        };
    },
    mounted() {
        console.log(this.$parent);
        this.$root.io.on('received', message => {
            // so quem recebe esse evento sao os outors usuarios, nao quem enviou.
            this.store_messages(message);
        });
    },
    computed: {
        formatedd_messages() {
            return this.messages.map(message => {
                return `<p><b>${message['name']}</b> disse: ${message['message']}</p>`;
            });
        },
    },
    methods: {
        store_messages(message) {
            this.messages.push(message);
        },

        send() {
            this.error = null;

            // querySelector tambem funciona bem aqui
            let name = this.$refs.name.localValue;
            let message = this.$refs.message.localValue;

            if (!name.length || !message.length) {
                this.error = 'Digite um nome e uma mensagem';
                return false;
            }

            this.store_messages({ name, message });
            this.$root.io.emit('message', { name, message });

            // Limpar o campo de mensagem pos enviar
            this.$refs.message.localValue = '';
        },
    },
};
</script>

<style>
.error {
    color: red;
    font-size: 14px;
    font-style: italic;
}
</style>
