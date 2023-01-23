//Database 안에 Todo${index} (Todo1, Todo2) 를 추가하는 방식이다

const Database = {
  // Todo1: {
  //   Todo: "",
  //   deadDate: "",
  //   result: false,
  //   sucessBar: 7,
  //   subTodo: {
  //     work1: ["줄넘기100개", false],
  //     work2: ["팔굽혀펴기", false],
  //     work3: ["숨쉬기운동", false],
  //     work4: ["턱걸이", false],
  //     work5: ["숨쉬기운동", false],
  //     work6: ["프로틴먹기", false],
  //     work7: ["짐볼운동하기", false],
  //   },
  // },
};

const TodoObj = function (todo, deadDate, result, sucessBar, subTodo) {
  this.Todo = todo;
  this.Date = deadDate;
  this.Result = result;
  this.sucessBar = sucessBar;
  this.SubTodo = subTodo;
};

let number = 0;

const tcard = document.querySelector("#temp-card");
const div = document.createElement("div")
const makeTodoBtn = document.querySelector("#makeTodo")
const TodoContainerMain = document.querySelector(".TodoContainerMain")

const makeTodoUI = (obj) => {
  for (const item in obj) {
    divo= div.cloneNode(true)
    let html = tcard.innerHTML;
    html = html.replace("{Todo}", Database[item]["Todo"]);
    console.log(html)
    divo.innerHTML = html
    TodoContainerMain.appendChild(divo)
  }
};

const addTodo = (todo, deadDate, result, sucessBar, subTodo) => {
  const Obj = new TodoObj(todo, deadDate, result, sucessBar, subTodo);
  Database[`Todo${number}`] = Obj;
  // makeTodoUI(Database);
  number++;
};

makeTodoBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  addTodo(MainTodoinput.value,"밤12시까지", false, 5, { subTodo: {} })
  // makeTodoUI(Database);
})



// addTodo("자기", "밤12시까지", false, 5, { subTodo: {} });
// addTodo("놀기", "오전12시까지", true, 7, { subTodo: {} });

