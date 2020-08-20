const makeRunOn = function(str){
  return sent = str.split('. ').join(', ')  
}

const totalScore = function(arr){
let newScore = 0;
for(const item of arr){
  if(item.multiplier === undefined){
    item.multiplier = 1
  }
  newScore += item.score * item.multiplier;
  }
return newScore
}

const nightOwls = function(people){
  return people.filter(function(person){
    return person.localTime>=100 && person.localTime<=400 && person.asleep ===false
  })

}

const getToBed = function(people){
  return people.map(function(person){
    let newPerson = {...person}
    if (person.localTime>=100 && person.localTime<=400 && person.asleep ===false){
      newPerson.asleep = true
    }
    return newPerson
  })
}

const findIndices = function(arr, callBack){
let result = []
for (let i = 0; i < arr.length; i++){
  if(callBack(arr[i])){
    result.push(i)
  }
}
return result
}

const Faqtory = function(){
return {
  questions: [],
  length: 0,
  addQuestion: function(text){
    this.questions.push(
      {
      text:text,
      id:this.length,
      answered:false,
      }
    )
      this.length++
    },
    answerQuestion: function(id,answer){
      if(this.questions[id].answered === false){
        this.questions[id].answer = answer
        this.questions[id].answered = true
      }
    },
  }
}











if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
