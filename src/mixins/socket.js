import socket from 'socket.io-client';

export default {
    data() {
        return {
            io: socket(process.env.VUE_APP_HOST),
        };
    },
};
