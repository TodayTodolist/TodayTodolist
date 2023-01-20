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

    todoBox.value = "";
  
    
    // input 태그 값을 가져와서 value 값을 html 값에 넣어줌
    //obj.classList.add("active") // 또는  obj.style.display = "flex" 지금 게 프로그래밍적으로 더 나음 //속성 변환

    TodoContainerMain.appendChild(obj);
    MainTodoinput.value = "";
  }

  const todolist2 = () => {
    console.log("i'm todolist2");
    console.log(`해야할일 => ${todo[1].work}`);
    // 기한 => ${todo[1].deadline}
    // 장소=> ${todo[1].place}

    const obj = document.createElement("div");
    obj.classList.add("SubTodolist")
    obj.innerHTML = SubTodoinput.value; // input 태그 값을 가져와서 value 값을 html 값에 넣어줌
    //obj.classList.add("active") // 또는  obj.style.display = "flex" 지금 게 프로그래밍적으로 더 나음 //속성 변환

    TodoContainerSub.appendChild(obj);
    TodoContainerSub.value = "";
  }