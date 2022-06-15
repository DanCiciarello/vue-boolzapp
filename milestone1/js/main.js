new Vue ({

    el: "#vueApp",

    // App data
    data: {
        userChatList: contatti,
        selectedChatIndex: 0,
        selectedUserChatName: "Michele",
        selectedUserChatImage: "../img/avatar_1.jpg",
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
        },

    },

});