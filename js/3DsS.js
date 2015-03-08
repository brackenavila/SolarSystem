$olar=$('.sS'),$i=9,$br='moz'
Planets=['Sun','Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']
deg=[0,235.8,255.8,205.8,200.8,175.8,143.8,15,-15,-25]
$pow=[8,3,3,7,2,6,5,4,4,2]//in fact is $pow[i]+9 but I've wanted to minify code
$mass=[1.409,6.083,9.2843,1.08321,1.6318,1.43128,8.2713,6.833,6.254,7.15]
$L=[4.3,2,2,2,2,2,2,2,2,2],$T=[2.5,4,4,4,4,4,4,4,4,4]
if(br=(/(ms|webkit)/i).exec(navigator.userAgent))$br=br[0].toLowerCase()
$Al='-'+$br+'-linear-gradient'
while($i !=-1){
  $m=$mass[$i]*Math.pow(1.8,($pow[$i]))
  $('<div class=sS style=-'+$br+'-transform:rotate('+(deg[$i]-25)+'deg)><img id=I'+$i+' style=height:'+$m+'px;left:'+($L[$i]*10)+'%;top:'+($T[$i]*10)+'%;width:'+$m+'px title='+Planets[$i]+' src=imgs/'+($i--)+'.jpg></div>').appendTo('body')}
$('<style>.sS{\n\
    border:1px groove cyan;\n\
    border-radius:60%;\n\
    left:-26px;\n\
    height:'+(w=window).outerHeight/1.92+'px;\n\
    position:fixed;\n\
    top:180px;\n\
    width:'+w.outerWidth/.9674+'px}</style>').appendTo('head')
$('#I0').css({boxShadow:'0 0 30px 10px darkred',position:'fixed','-webkit-animation':'Sun 5s infinite'})
$('img').on('dragend',function(){alert(1)})