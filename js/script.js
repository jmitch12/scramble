var pizza=$('#pizza');
var berry=$('#berry');
var carrot=$('#carrot');
var cookie=$('#cookie');
var sushi=$('#sushi');
var corn=$('#corn');
var start=$('#start');
var trash=$('#trash');
var trash1=$('#trash1');
var trash2=$('#trash2');

$(start).click(function(){
	$(this).hide();
    $(pizza).show();
    $(cookie).show();
});

$(pizza).click(function(){
    $(this).hide();
    $(berry).show();
});

$(cookie).click(function(){
    $(this).hide();
    $(sushi).show();
});
$(berry).click(function(){
    $(this).hide();
    $(carrot).show();
});
$(sushi).click(function(){
    $(this).hide();
    $(corn).show();
});
$(carrot).click(function(){
    $(this).hide();
    $(pizza).show();
});
$(corn).click(function(){
    $(this).hide();
    $(cookie).show();
});

$(trash).click(function(){
    $(pizza).hide();
    $(cookie).hide();
    $(trash1).show();
    $(sushi).delay(400).fadeIn();
    $(berry).delay(400).fadeIn();
    $(corn).hide();
    $(carrot).hide();

});
