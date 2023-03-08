document.querySelector('button').addEventListener('click',function(){
    document.querySelector('.mask').classList.add('hide');
    var player = document.getElementById('player');
    player.load();
    player.play();
})