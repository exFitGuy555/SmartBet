//creating player data Class
class PLAYER {
    constructor(_pts, _ast, _reb, _stl, _attempt, _made, _min, _season) {
        this.pts = _pts
        this.ast = _ast
        this.reb = _reb
        this.stl = _stl
        this.attempt = _attempt
        this.made = _made
        this.min = _min
        this.season = _season
    }
}

// Class for LiveScore - home page
class Live {
    constructor(_parent, _home, _Aname, _H1q, _A1q, _H2q, _A2q, _H3q, _A3q, _Hfq, _Afq) {
        this.parent = _parent
        this.home = _home
        this.Aname = _Aname
        this.H1q = _H1q
        this.A1q = _A1q
        this.H2q = _H2q
        this.A2q = _A2q
        this.H3q = _H3q
        this.A3q = _A3q
        this.Hfq = _Hfq
        this.Afq = _Afq
    }

    renderLive() {
        let newDiv = document.createElement('tbody');
        newDiv.id = 'empty'
        this.parent = document.getElementById('parent')
        this.parent.append(newDiv)
        console.log(newDiv)
        newDiv.innerHTML =

            `       
                <tr style="display:none">
                <th scope="col">teams</th>
                <th scope="col">1stQ</th>
                <th scope="col">2ndQ</th>
                <th scope="col">3rdQ</th>
                <th scope="col">FINAL</th>
                 </tr>
           
                        <td >${this.home}<br>
                            ${this.Aname}</td>
                        <td>${this.H1q}<br>
                            ${this.A1q}</td>
                        <td>${this.H2q}<br>
                            ${this.A2q}</td>
                        <td>${this.H3q}<br>
                            ${this.A3q}</td>
                        <td>${this.Hfq}<br>
                            ${this.Afq}</td>

                    `





    }
}


//LiveScore class - , getting the id - home page
class LiveID {
    constructor(_name, _id) {
        this.name = _name
        this.id = _id
    }

    renderId() {
        let newOption = document.createElement('option')
        newOption.id = 'get-option'
        this.parent = document.getElementById('parentIdLive')
        this.parent.append(newOption)

        newOption.innerHTML =
            `  <option selected="">${this.name}
            <span class="id" style="display:none">${this.id}</span></option>`


    }


}

//TeamA class - Odd page
class TeamInfo { 
    constructor(_id, _name){
        this.id = _id
        this.name = _name
    }

    renderTeamName() {  //class="id" style="display:none">
        let newNameOption = document.createElement('option')
        newNameOption.id = 'get-name-option'
        this.parent = document.querySelector('.select-odd')
        this.parent.append(newNameOption)
        newNameOption.innerHTML = 

            `  <option class="bomb" selected="">${this.id}
            <span class="span">${this.name}</span></option>`

    }
   
    
}

//TeamB class - Odd page
class TeamInfoB { 
    constructor(_id, _name){
        this.id = _id
        this.name = _name
    }

    renderTeamNameB() {  //class="id" style="display:none">
        let newNameOption = document.createElement('option')
        newNameOption.id = 'get-name-optionB'
        this.parent = document.querySelector('.select-oddB')
        this.parent.append(newNameOption)
        newNameOption.innerHTML = 

            `  <option selected="">${this.id}
            <span>${this.name}</span></option>`

    }
   
    
}


//optinal class for OverUnder
class OverUnderA {
    constructor(_all){
        this.all = _all
    }
}

//optinal class for WInsLoses
class WinsLose {
    constructor(_wins){
        this.wins = _wins
    }
}