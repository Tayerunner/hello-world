class customers{
    constructor(name,accounts,creditscore){
        this.name= name
        this.accounts= accounts
        this.creditscore=lk
    }
}
class Account{
    constructor(name,creationTime){
        this.name = name
        this.transactions= []
        this.total =0
        this.spent =0 
        this.creationTime = creationTime
        this.intrest
        this.statment ={spent: this.spent,total:this.total}
    }
    spentCalculator(){
        let s = 0
        for(let x of this.transactions){
            if( x!=null&&x.depositOrWithdrawal=="withdrawal"){
                s+=x.amount;
            }
        }
        return this.spent=s
    }
    autoRemoveTransactions(){
        let counter=0;
        for(let x of this.transactions){
            if( x!=null&&x.pendingOrComplete=="failed"){
                this.transactions[counter]=null;
            }
            counter++;
        }
        return this.transactions
    }
    totalCalculator(){
        let b = 0
        for(let x of this.transactions){
            if( x !=null&&x.depositOrWithdrawal=="withdrawal"){
                b-=x.amount;
            }
            if(x !=null&&x.depositOrWithdrawal=="deposit"){
                b+=x.amount;
            }      
            
        }
        return this.total=b;
    }
    updateTotal(newtransaction){
        if(newtransaction.depositOrWithdrwal=="withdrawal"){
            return this.total-=transaction.amount;
        }
        if(newtransaction.depositOrWithdrwal=="deposit"){
            return this.total+=transaction.amount;
        }
    }
    RemoveTransactions(index){
        return this.transactions[index]= null
    }
    intrest()
    addTransactions(newTransaction){
        this.transactions.push(newTransaction);
        this.autoRemoveTransactions();
        this.totalCalculator();
        this.spentCalculator()
    }
   
}
class Transaction{
    constructor(dateStamp,amount,pendingOrComplete,depositOrWithdrawal,receiver,donor){
        this.dateStamp = dateStamp
        this.amount = amount
        this.pendingOrComplete = pendingOrComplete
        this.depositOrWithdrawal = depositOrWithdrawal
        this.receiver = receiver
        this.donor = donor
    }
    update(pendingOrComplete){
        this.pendingOrComplete = pendingOrComplete
    }
}

let t = new Transaction(new Date,20,"pending","deposit",null,"igor");
let d = new Transaction(new Date,7,"complete","withdrawal",null,"igor");
console.log(t.donor)
t.update("complete");
f = new Account("checking",30,5,2013)
f.addTransactions(t)
f.addTransactions(t)
f.addTransactions(d)

console.log(f)
