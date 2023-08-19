let nsrename;
let userresult;
let rand = Math.floor( Math.random() * 5);

username = prompt("名前を入力してください")
if (username != true){
    username = "名無し"
}
document.getElementById("name").innerHTML = username;



if (rand == 0) {
    userresult = "大吉";
  }
  if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }


document.getElementById("result").innerHTML = userresult;