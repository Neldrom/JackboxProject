$(document).ready(function () {
  $('.select').prop('checked', true)
});

var selectAllBtn = $(".selectAll");
selectAllBtn.click(function() {
  var allSelected = true
  for(var i=1; i < $(".select").length + 1; i++){
    if($("." + i).is(":checked") != true){
      $("." + i).prop('checked', true);
      allSelected = false;
    }
  }
  if(allSelected === true){
    $('.select').prop('checked', false)
  }
})

var genBtn = $('.generate');
genBtn.click(function () {
  Refresh();
  let randomGame = 0;
  var i = 0;
  while (i < 26) {
    randomGame = Math.floor(Math.random() * 25 + 1);
    console.log(randomGame);
    if ($(".select").hasClass(randomGame) === true) {
      if ($("." + randomGame).is(':checked')) {
        hide(randomGame);
        break;
      }
    }
    i++
  }
})

function hide(randomGameNum) {
  for (var i = 1; i < $(".select").length + 1; i++) {
    if(i != randomGameNum){
      $("#game" + i).hide();
    }
  }
}

var refBtn = $(".refresh");
refBtn.click(Refresh);
function Refresh() {
  for (var i = 1; i < $(".select").length + 1; i++) {
    $("#game" + i).show();
  } 
}