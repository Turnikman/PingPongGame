// движение оппонента

function aiMove() {
    var y;
    // делаем скорость оппонента зависимой от скорости шарика
    switch (ball.vY) {
        case 2:
            vY = 2;
            break;
        case 3:
            vY = 3;
            break;
        case 4:
            vY = 4;
            break;
        case 5:
            vY = 5;
            break;
        case 6:
            vY = 5;
            break;
        case 7:
            vY = 6;
            break;
        case 8:
            vY = 6;
            break;
        case 9:
            vY = 6;
            break;
        case 10:
            vY = 7;
            break;
        case 11:
            vY = 7;
            break;
        case 12:
            vY = 7;
            break;
        case 13:
            vY = 7;
            break;
        case 0:
            vY = 0;
            break;
    }

    if (ball.y < ai.y + ai.height / 2) {
        y = ai.y - vY;
    }
    if (ball.y > ai.y + ai.height / 2) {
        y = ai.y + vY;
    }
    if (10 < y && y < game.height - ai.height - 10) {
        ai.y = y;
    }
}