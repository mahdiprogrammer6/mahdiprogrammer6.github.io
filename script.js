let my_emtiaz = document.querySelector("#my-emtiaz");
let game = document.querySelector("#game");
let rostami = document.querySelector("#rostami");
let block = document.querySelector("#block");
let level = document.querySelector("#my-level");
let block_flag = false;
let point = 0;
// rostami
function jump_rostami() {
  if (!rostami.classList.contains("jump")) {
    rostami.classList.add("jump");
    block_flag = true;
    setTimeout((t) => {
      rostami.classList.remove("jump");
    }, 600);
  }
}
document.addEventListener("keydown", (M) => {
  if (M.code == "Space") {
    jump_rostami();
  }
});
let check_live_game = setInterval((e) => {
  let rostami_top = parseInt(
    window.getComputedStyle(rostami).getPropertyValue("top")
  );
  let block_left = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (block_left > 100 && block_left < 220 && rostami_top > 120) {
    rostami.style.animationPlayState = "paused";
    block.style.animationPlayState = "paused";
    game.style.animationPlayState = "paused";
    clearInterval(check_live_game);
    alert("امیر رضا کوشته شد -امتیازت:" + point);
    window.location.reload();
  }
  if (block_left < 10 && block_flag) {
    point += 1;
    block_flag = false;
    my_emtiaz.innerHTML = point;
  }
}, 10);
function jump_ahmadi() {
  if (!ahmadi.classList.contains("ab")) {
    ahmadi.classList.add("ab");
    block_flag = true;
    setTimeout((q) => {
      ahmadi.classList.remove("ab");
    }, 600);
  }
};

