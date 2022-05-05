class Board {
    constructor(){
        this.board = ['','','','','','','','','']
        this.peice = 'X'
    }

    playPeice(index){

       if(this.board[index] == ''){
           this.board[index] = this.peice
       } else {
           return
       }

       if(this.checkForWin()){
           document.querySelector('h3').innerHTML = `${this.peice} Wins!`
           document.querySelectorAll('.cell').forEach(x => x.removeEventListener('click', insert))
           return
       }
       
       this.peice == 'X' ? this.peice = 'O' : this.peice = 'X'
       document.querySelector('h3').innerHTML = `${game.peice}' turn!`
    }

    checkForWin(){
        if(this.diagnol() || this.row() || this.column()){
            return true
        }
    }

    diagnol(){
        if(
            this.board[0] + this.board[4] + this.board[8] == 'XXX' ||
            this.board[0] + this.board[4] + this.board[8] == 'OOO' ||
            this.board[2] + this.board[4] + this.board[6] == 'XXX' ||
            this.board[2] + this.board[4] + this.board[6] == 'OOO' 
        ) { return true }

        return false
    }

    row(){
        if(
            this.board[0] + this.board[1] + this.board[2] == 'XXX' ||
            this.board[0] + this.board[1] + this.board[2] == 'OOO' ||
            this.board[3] + this.board[4] + this.board[5] == 'XXX' ||
            this.board[3] + this.board[4] + this.board[5] == 'OOO' ||
            this.board[6] + this.board[7] + this.board[8] == 'XXX' ||
            this.board[6] + this.board[7] + this.board[8] == 'OOO' 
        ) { return true }
        return false
    }

    column(){
        if(
            this.board[0] + this.board[3] + this.board[6] == 'XXX' ||
            this.board[0] + this.board[3] + this.board[6] == 'OOO' ||
            this.board[1] + this.board[4] + this.board[7] == 'XXX' ||
            this.board[1] + this.board[4] + this.board[7] == 'OOO' ||
            this.board[2] + this.board[5] + this.board[8] == 'XXX' ||
            this.board[2] + this.board[5] + this.board[8] == 'OOO' 
        ) { return true }
        return false
    }
}

let game = new Board()

document.querySelectorAll('.cell').forEach(x => x.addEventListener('click', insert))
document.querySelector('button').addEventListener('click', resetBoard)
document.querySelector('h3').innerHTML = `${game.peice} goes first!`

function render(){
    for(let i = 0; i < game.board.length; i++){
        document.querySelector(`.cell_${i}`).innerText = game.board[i]
    }
}

function resetBoard(){
    game.board = ['','','','','','','','','']
    game.peice == 'X' ? this.peice = 'O' : this.peice = 'X'
    document.querySelector('h3').innerHTML = `${game.peice} goes first!`
    document.querySelectorAll('.cell').forEach(x => x.addEventListener('click', insert))
    render()
}

function insert() {
    let cellIndex = +event.target.getAttribute('class')[5]
    game.playPeice(cellIndex)
    render()
    if(game.board.every(cell => cell) && !game.checkForWin()){
        document.querySelector('h3').innerHTML = 'Tie!'
   }
}