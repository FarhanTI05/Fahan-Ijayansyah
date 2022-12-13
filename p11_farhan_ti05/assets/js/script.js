//mengambil semua elemen a dengan looping 
document.querySelector("#option a").forEach((a) => {
    // jika di klik akan menjalankan fungsi computerChoice()
    a.addEventlistener("click", (element) => {
        computerChoice(elemen);
    })
    }) 
    function computerChoice(element){
        //tangkap pilihan user
        let pilihanUser = element.target.innerText;
        //menangkap element result dengan queryselector untuh menampung
        //nilai hasil games
        let pilihanComputer = document.querySelector("#result");
    
        //membuat array pilihan untuk computer
        pilihanComputer.innerHTML = choices[Math.random(Math.random() * choices.lenght)]
        pilihanComputer = pilihanComputer.innerHTML;
    
        //jika pilihan komputer sama dengan pilihan user (Draw)
        if (pilihanUser == pilihanComputer){
            alert("Draw");
        }

        //jika melihat user yang menang
        if(pilihanUser == "Rokc" && pilihanComputer == "scissors"){
            alert("YOU WIN")
        }else if(pilihanUser == "paper" & pilihanComputer == "Rokc"){
            alert("YOU WIN")
        }else if(pilihanUser == "scissors" & pilihanComputer == "paper"){
            alert("YOU WIN")
        }else{
            alert("tidak ada pilihan")
        }

        //jika melihat user yang menang
        if(pilihanUser == "Rokc" && pilihanComputer == "Paper"){
            alert("COMPUTER WIN")
        }else if(pilihanUser == "paper" & pilihanComputer == "scissors"){
            alert("COMPUTER WIN")
        }else if(pilihanUser == "scissors" & pilihanComputer ==  "Rokc"){
            alert("COMPUTER WIN")
        }else{
            alert("tidak ada pilihan")
        }    
    }
