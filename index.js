console.log("im index")
const todo = [
    { work: "축구하기", deadline: "2023/01/01" },

    { work: "수영하기", deadline: "2023/01/15" },

    { work: "술마시기", deadline: "2023/02/01" },
  ];

  let MainTodo = document.querySelector(".MainTodolist"); //.은 클래스
  let MainTodoinput = document.querySelector(".MainTodoinput");
  let SubTodo = document.querySelector(".SubTodolist"); //.은 클래스
  let SubTodoinput = document.querySelector(".SubTodoinput");


  const todolist1 = () => {
    console.log("i'm todolist1");
    console.log(`해야할일 => ${todo[1].work}`);
    // 기한 => ${todo[1].deadline}
    // 장소=> ${todo[1].place}

    const obj = document.createElement("div");
    obj.innerHTML = MainTodoinput.value; // input 태그 값을 가져와서 value 값을 html 값에 넣어줌
    //obj.classList.add("active") // 또는  obj.style.display = "flex" 지금 게 프로그래밍적으로 더 나음 //속성 변환

    MainTodo.appendChild(obj);
    MainTodoinput.value = "";

    //todoinput.appendChild(obj) //자식으로 넣어주자는 걸 선언
  }; //최근 많이 사용하는 방식(화살표방식)

  const todolist2 = () => {
    console.log("i'm todolist2");
    console.log(`해야할일 => ${todo[1].work}`);
    // 기한 => ${todo[1].deadline}
    // 장소=> ${todo[1].place}

    const obj = document.createElement("div");
    obj.innerHTML = SubTodoinput.value; // input 태그 값을 가져와서 value 값을 html 값에 넣어줌
    //obj.classList.add("active") // 또는  obj.style.display = "flex" 지금 게 프로그래밍적으로 더 나음 //속성 변환

    SubTodo.appendChild(obj);
    SubTodoinput.value = "";

    //todoinput.appendChild(obj) //자식으로 넣어주자는 걸 선언
  }; //최근 많이 사용하는 방식(화살표방식)