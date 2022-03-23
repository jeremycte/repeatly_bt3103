export default class cardClassObj{
    id;
    answer;
    question;
    title;
    boxType;
    firstAnswered;
    isWrong;

    constructor(id,answer,question,title,boxType,firstAnswered,isWrong) {
        this.id = id;
        this.answer = answer;
        this.question = question;
        this.title = title;
        this.boxType = boxType;
        this.firstAnswered = firstAnswered;
        this.isWrong = isWrong;
    }
}