new Vue ({

    el: "#vueApp",

    // App data
    data: {
        userChatList: contatti,
        selectedChatIndex: "",
        selectedUserChatName: "Michele",
        selectedUserChatImage: "../img/avatar_1.jpg",
        selectedUserChat: "",
    },

    mounted () {
        this.selectedChatIndex = 0;
        this.selectedUserChat = this.userChatList[0].messages;
    },

    // App methods
    methods: {

        // Selected chat item
        selectedChat (index) {
            // Al click, registro l'indice dell'elemento cliccato
            this.selectedChatIndex = index;
            // Cambio il nome e l'immagine della chat attiva
            this.selectedUserChatName = this.userChatList[index].name;
            this.selectedUserChatImage = "../img/avatar" + this.userChatList[index].avatar + ".jpg";
            // Cambio la chat associata all'utente selezionato
            this.selectedUserChat = this.userChatList[index].messages;
        },

    },

});
