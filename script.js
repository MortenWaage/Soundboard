var audio;
var dyr = [ "audio1", "audio2", "audio3",
            "audio4", "audio5", "audio6",
            "audio7", "audio8", "audio9",]


function playSound(_id)
{
    if (audio != null)
        audio.pause();

    audio = document.getElementById(dyr[parseInt(_id)-1]);
    audio.play();
}