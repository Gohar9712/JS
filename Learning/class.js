// function UserAccountGlobalInfo() {
//     this.balance = 0;
//     this.cards = []
// }

// UserAccountGlobalInfo.prototype.addCard = function(card) { //{name: '', number: ''}

// }

// UserAccountGlobalInfo.prototype.getBalance = function() {
//     console.log('Function callllllllllllll')
// }

// UserAccountGlobalInfo.prototype.removeCard = function() {

// }

// function SellerCreateConstructor(name) {
//     this.name = name;
//     this.status = 'pending';
//     this.startDate = new Date();
//     UserAccountGlobalInfo.call(this);
// }

// SellerCreateConstructor.prototype.getSellerInfo = function() {

// }

// SellerCreateConstructor.prototype.messageSeller = function() {
//     return `Welcome Dear ${this.name}`
// }

// SellerCreateConstructor.prototype.changeSellerStatus = function(status) {
//     this.status = status;
// }


// SellerCreateConstructor.prototype = Object.create(UserAccountGlobalInfo.prototype)

// const obj1 = new SellerCreateConstructor('John'); //{}__proto__ = Constructor.prototype

// const obj2 = new SellerCreateConstructor('Dav'); //{}__proto__ = Constructor.prototype

// console.log(obj1);


class UserAccountGlobalInfo {
    constructor() {
        this.balance = 0;
        this.cards = [];
    }

    addCard() {

    }

    removeCard() {

    }

    getBalance() {
        return this.balance;
    }
}




class SellerCreateConstructor extends UserAccountGlobalInfo {
    constructor(name) {
        super();
        this.name = name;
        this.status = 'pending';
        this.startDate = new Date();
    }


    getSellerInfo() {

    }

    messageSeller() {
        return `Welcome Dear ${this.name}`
    }

    changeSellerStatus(status) {
        this.status = status;
    }
}


const seller1 = new SellerCreateConstructor('John');
console.log(seller1.balance, '>>>>')



