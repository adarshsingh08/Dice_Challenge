
    var n=Math.floor(6*Math.random())+1;
    var n1=Math.floor(6*Math.random())+1;
    var random1="dice"+n+".png";
    var random2="dice"+n1+".png";
    random1="images/"+random1;
    random2="images/"+random2;
    document.querySelector(".img1").setAttribute("src",random1);
    document.querySelector(".img2").setAttribute("src",random2);
    if(n>n1){
        document.querySelector("h1").innerHTML="🚩Player 1 won!"
    }
    else if(n<n1){
        document.querySelector("h1").innerHTML="Player 2 won🚩!"
    }
    else{
        document.querySelector("h1").innerHTML="its a Tie!!!"
    }
    document.querySelector("h2").innerHTML=n1;