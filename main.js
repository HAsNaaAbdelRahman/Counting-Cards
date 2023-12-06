function choice(ch) {
    var ch ;
    var counter = 0 ;
    switch(ch) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            counter++;
            break ;
        case 10:
        case 'J':
        case 'K':
        case 'Q':
        case 'A':
            counter--;
            break;

    }

    var holdCount = "Hold" ;

    if(counter > 0) {
        holdCount = "Bet";
    }

    return counter + " " + holdCount;


}

