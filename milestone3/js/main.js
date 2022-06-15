new Vue ({

    el: "#vueApp",

    // App data
    data: {
        userChatList: contatti,
        selectedChatIndex: "",
        selectedUserChatName: "Michele",
        selectedUserChatImage: "../img/avatar_1.jpg",
        selectedUserChat: "",
        newMessage: "",
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

        // Send a new message
        sendMessage () {
            // Creo un nuovo oggetto con il messaggio inserito
            let newMessageObj = {
                date: "10/01/2020 15:30:55",
                message: this.newMessage,
                status: "sent",
            }
            // Pusho l'oggetto nell'array della chat selezionata
            this.selectedUserChat.push(newMessageObj);
            // Svuoto l'input field
            this.newMessage = "";
        },

    },

});