console.log("im index")
const todo = [
    { work: "축구하기", deadline: "2023/01/01" },

    { work: "수영하기", deadline: "2023/01/15" },

    { work: "술마시기", deadline: "2023/02/01" },
  ];

  let MainTodo = document.querySelector(".MainTodolist");
  let MainTodoinput = document.querySelector(".MainTodoinput");
  let SubTodo = document.querySelector(".SubTodolist");
  let SubTodoinput = document.querySelector(".SubTodoinput");
  const TodoContainerMain = document.querySelector(".TodoContainerMain")
  const TodoContainerSub = document.querySelector(".TodoContainerSub")


  const todolist1 = () => {
    console.log("i'm todolist1");
    console.log(`해야할일 => ${todo[1].work}`);
    // 기한 => ${todo[1].deadline}

    const obj = document.createElement("div"); //가장 큰 틀을 생성, obj로 지정
    obj.classList.add("MainTodolist"); //"MainTodolist"라는 클래스에 추가

    const checkBox = document.createElement("input");
    checkBox.setAttribute('type',"checkbox");
    checkBox.classList.add("chk1");
    obj.appendChild(checkBox); //체크박스를 가장 큰 틀 안에 넣어줌

    const todoBox = document.createElement("div");
    todoBox.innerHTML = MainTodoinput.value;
    todoBox.classList.add("MainTodoContainer");
    obj.appendChild(todoBox);

    const editBtn = document.createElement("div"); // div class Mainicon 생성
    const editBtnImg = document.createElement("img") // 하위 개념인 img src 생성
    editBtnImg.src = "./edit_icon.png"; // 이미지 불러오기
    editBtn.classList.add("Mainicon"); //css mainicon 속성 입혀주기
    editBtn.appendChild(editBtnImg); // 버튼 이미지를 상위 editBtn div에 속하게 해주기
    obj.appendChild(editBtn); // 버튼 div 자체를 가장 큰 틀 안에 속하게 해주기

    const deleteBtn = document.createElement("div");
    const deleteBtnImg = document.createElement("img");
    deleteBtnImg.src = "./delete_icon.png";
    deleteBtn.classList.add("Mainicon");
    deleteBtn.appendChild(deleteBtnImg);
    obj.appendChild(deleteBtn);

    TodoContainerMain.appendChild(obj);
    MainTodoinput.value = "";
  }




  const todolist2 = () => {
    console.log("i'm todolist2");
    // console.log(`해야할일 => ${todo[1].work}`);
    // 기한 => ${todo[1].deadline}

    const obj = document.createElement("div");
    obj.classList.add("SubTodolist")

    const checkBox = document.createElement("input");
    checkBox.setAttribute('type',"checkbox");
    checkBox.classList.add("chk2");
    obj.appendChild(checkBox);

    const todoBox = document.createElement("div");
    const todo = document.createElement("div");
    todo.classList.add("SubTodo");
    todo.innerHTML = SubTodoinput.value; 
    todoBox.classList.add("SubTodoContainer");
    todoBox.appendChild(todo);
    obj.appendChild(todoBox);

    const editBtn = document.createElement("div");
    const editBtnImg = document.createElement("img");
    editBtnImg.src = "./edit_icon.png";
    editBtn.classList.add("SubIcon");
    editBtn.appendChild(editBtnImg);
    todoBox.appendChild(editBtn);
    
    const deleteBtn = document.createElement("div");
    const deleteBtnImg = document.createElement("img");
    deleteBtnImg.src = "./delete_icon.png";
    deleteBtn.classList.add("SubIcon");
    deleteBtn.appendChild(deleteBtnImg);
    todoBox.appendChild(deleteBtn);

    TodoContainerSub.appendChild(obj);
    SubTodoinput.value = "";
  }