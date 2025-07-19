function Closetab(idtab){
    document.getElementById(idtab).style.display = "none";
}
function openTabSelection(idtab, idbutton){
    var button1 = '1s-c-h';
    var button2 = '2s-c-h';
    var button3 = '3s-c-h';
    var button4 = '4s-c-h';
    document.getElementById(idbutton).style.backgroundColor = "#ff93a7";
    document.getElementById(idbutton).style.color = "white";

    if(button1 != idbutton){
        document.getElementById(button1).style.backgroundColor = "unset";
        document.getElementById(button1).style.color = "black";
    }
    if(button2 != idbutton){
        document.getElementById(button2).style.backgroundColor = "unset";
        document.getElementById(button2).style.color = "black";
    }
    if(button3 != idbutton){
        document.getElementById(button3).style.backgroundColor = "unset";
        document.getElementById(button3).style.color = "black";
    }
    if(button4 != idbutton){
        document.getElementById(button4).style.backgroundColor = "unset";
        document.getElementById(button4).style.color = "black";
    }

    var idhotel = 'selection-hotel';
    var idair = 'selection-air';
    var idbos = 'selection-bos';
    var idhousemodern = 'selection-house-modern';
    document.getElementById(idtab).style.display = "flex";
    if(idhotel != idtab){
        document.getElementById(idhotel).style.display = "none";
    }
    if(idair != idtab){
        document.getElementById(idair).style.display = "none";
    }
    if(idbos != idtab){
        document.getElementById(idbos).style.display = "none";
    }
    if(idhousemodern != idtab){
        document.getElementById(idhousemodern).style.display = "none";
    }
}
