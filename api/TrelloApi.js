class TrelloApi {

    putCards (cardId, pos, success, error) {
        Trello.put('/cards/' + cardId, {pos: pos}, success, error);
    }

    getMembers (memberId, params, success, error) {
        Trello.members.get(memberId, params, success, error);
    }

    getBoard (boardId,success,error){
        Trello.boards.get(boardId, success,error);
    }

    getCards (extId,variable,success){
        Trello.cards.get(extId,variable,success);
    }

    getLists (listId, cards, success,error){
        Trello.lists.get(listId,cards,success,error);
    }

    setKey (apiKey){
        Trello.setKey(apiKey);
    }

    authorize (params,expiration,success,error){
        Trello.authorize(params,expiration,success,error);
    }

}

export default TrelloApi;