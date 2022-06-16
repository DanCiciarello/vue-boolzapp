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
        searchInputText: "",
        userChatListFiltered: "",
    },

    mounted () {
        this.selectedChatIndex = 0;
        this.selectedUserChat = this.userChatList[0].messages;
        this.userChatListFiltered = this.userChatList;
    },

    // App methods
    methods: {

        // Selected chat item
        selectedChat (index) {
            // Al click, registro l'indice dell'elemento cliccato
            this.selectedChatIndex = index;
            // Cambio il nome e l'immagine della chat attiva
            this.selectedUserChatName = this.userChatListFiltered[index].name;
            this.selectedUserChatImage = "../img/avatar" + this.userChatListFiltered[index].avatar + ".jpg";
            // Cambio la chat associata all'utente selezionato
            this.selectedUserChat = this.userChatListFiltered[index].messages;
        },

        // Send a new message
        sendMessage () {
            // Creo un nuovo oggetto con il messaggio inserito
            let newMessageObj = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: "sent",
            }
            // Pusho l'oggetto nell'array della chat selezionata
            this.selectedUserChat.push(newMessageObj);
            // Svuoto l'input field
            this.newMessage = "";
            // Creo un nuovo oggetto con la risposta
            let newMessageObjReply = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: "Ok",
                status: "received",
            };
            // Pusho la risposta dopo 1 secondo
            setTimeout(() => this.selectedUserChat.push(newMessageObjReply), 1000);
        },

        // Filter the user list
        filterUserList () {
            // Filtro la lista utenti ad ogni lettera inserita
            this.userChatListFiltered = this.userChatList.filter(user => user.name.toLowerCase().includes(this.searchInputText));
        },

    },

});