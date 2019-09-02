class customers{
    constructor(name,accounts,creditscore,){

    }
}



class Account{
    constructor(name,total,spent,creationTime){
        this.name = name
        this.transactions= []
        this.total = total
        this.spent = spent
        this.creationTime = creationTime
    }
    addtransactions(newtransaction){
        return this.transactions.push(newtransaction);
    }
    removetransactions(){
        let counter=0;
        for(let x of this.transactions){
            if( x.pendingOrComplete=="failed"){
                this.transactions[counter]=null;
            }
            counter++;
        }
        return this.transactions
    }
    totalupdate(newtransaction){
        if(newtransaction.depositOrWithdrwal=="withdrawal"){
            return this.total-=transaction.amount;
        }
        if(newtransaction.depositOrWithdrwal=="deposit"){
            return this.total+=transaction.amount;
        }
    }
   
}
class Transaction{
    constructor(dateStamp,amount,pendingOrComplete,depositOrWithdrwal,receiver,donor){
        this.dateStamp = dateStamp
        this.amount = amount
        this.pendingOrComplete = pendingOrComplete
        this.depositOrWithdrwal = depositOrWithdrwal
        this.receiver = receiver
        this.donor = donor
    }
    update(pendingOrComplete){
        this.pendingOrComplete = pendingOrComplete
    }
}

let t = new Transaction(new Date,20,"pending","deposit",null,"igor");
let d = new Transaction(new Date,20,"failed","deposit",null,"igor");
console.log(t.donor)
t.update("complete");
f = new Account("checking",30,5,2013)
f.addtransactions(t)
f.addtransactions(t)
f.addtransactions(d)
f.removetransactions()
console.log(f)
