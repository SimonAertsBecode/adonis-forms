"use strict";

// bring model
const card = use("App/Models/Card");

class CardController {
    async addToCard({ params }) {
        const addCard = card.find(params.id);

        
    }
}

module.exports = CardController;
