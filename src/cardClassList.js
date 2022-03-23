export default class cardClassList{
    cardList;
    boxPriority;
    constructor() {
        this.cardList = [];
        for (let i = 0; i < 5; i++) {
            let box = []
            this.cardList.push(box)
        }
        this.boxPriority = new Map()
        this.boxPriority.set(1,12)
        this.boxPriority.set(2,6)
        this.boxPriority.set(3,4)
        this.boxPriority.set(4,3)
    }

    addCard(tempCardObj){
        const boxIndex = parseInt(tempCardObj.boxType) - 1
        this.cardList[boxIndex].push(tempCardObj)
    }

    removeCard(tempCardObj){
        const boxIndex = parseInt(tempCardObj.boxType) - 1
        const refBoxCat = this.cardList[boxIndex]
        let refIndex = 0
        for (let i = 0; i < refBoxCat; i++) {
            if(refBoxCat[i].id === tempCardObj.id){
                refIndex = i
            }
        }
        if (refIndex > -1 ){
            this.cardList[boxIndex].splice(refIndex,1)
        }
    }

    checkAvailableBoxes(){
        const availability = []
        for (let i=0; i<4;i++){
            if (this.cardList[i].length === 0){
                availability.push(i)
            }
        }
        return availability
    }

    displayCard(){
        const boxAvailable = this.checkAvailableBoxes()
        let baseRdm = 0
        for (const boxAvailableKey in boxAvailable) {
            baseRdm += this.boxPriority.get(boxAvailableKey+1)
        }
        const boxSelected = Math.floor(Math.random() * baseRdm) + 1
        let sumTracker = 0
        let chosenBox = 0
        for (let i = 0; i < boxAvailable.length; i++) {
            if (boxSelected > sumTracker && boxSelected <= this.boxPriority.get(boxAvailable[i]) + 1){
                chosenBox = boxAvailable[i]
                break
            } else {
                sumTracker += this.boxPriority.get(boxAvailable[i])
            }
        }
        let innerChoice = Math.floor(Math.random() *this.cardList[chosenBox].length)
        const chosenCard = this.cardList[chosenBox][innerChoice]
        return chosenCard
    }

    promote(tempCardObj,firstAttempt=true){
        if (firstAttempt){
            this.removeCard(tempCardObj)
            tempCardObj.boxType = tempCardObj.boxType + 1
            tempCardObj.firstAnswered = true
            this.addCard(tempCardObj)
        } else {
            this.removeCard(tempCardObj)
            tempCardObj.firstAnswered = true
            this.addCard(tempCardObj)
        }
    }

    demote(tempCardObj){
        this.removeCard(tempCardObj)
        tempCardObj.boxType = 1
        tempCardObj.isWrong = true
        tempCardObj.firstAnswered = true
        this.addCard(tempCardObj)
    }
}