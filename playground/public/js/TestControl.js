// == manager ==
var TestControl = function() {
    this.curfunc   = null;
    this.nextfunc  = null;
    this.nowait    = false;    
};
TestControl.prototype.update = function() {
    while(true)
    {
        this.nowait = false;

        var first = false;
        if (this.nextfunc!=null) {
            this.curfunc  = this.nextfunc;
            this.nextfunc = null;
            first = true;
        }
        if (this.curfunc!=null) {
            this.curfunc(first);
        }

        if (!this.nowait) break;
    }
};
TestControl.prototype.checkstate = function(st) {
    return this.curfunc === st;
};
TestControl.prototype.goto = function(st) {
    this.nextfunc = st;
};
TestControl.prototype.hasnext = function() {
    return this.nextfunc!=null;
}
TestControl.prototype.setnowait = function() {
    this.nowait = true;
}
TestControl.prototype.start = function() {
    this.goto(this.S_START);
};
TestControl.prototype.is_end = function() {
    return this.checkstate(this.S_END);
};
TestControl.prototype.run = function() {
    var LOOPMAX = 100000;
    this.start();
    for(var loop = 0; loop <= LOOPMAX; loop++)
    {
        if (loop>=LOOPMAX) alert("Unexpected!");
        this.update();
        if (this.is_end()) break;
    }
};

// == yesno set ==
TestControl.yesno=false;
TestControl.prototype.br_yes = function(st) {
    if (!this.hasnext(st)) {
        if (this.yesno) {
            this.setnext(st);
        }
    }
};
TestControl.prototype.br_no = function(st) {
    if (!this.hasnext(st)) {
        if (!this.yesno) {
            this.setnext(st);
        }
    }
};

// [STATEGO OUTPUT START] indent(0) $/./$
//  psggConverterLib.dll converted from TestControl.xlsx. 
/*
    S_0001
*/
TestControl.prototype.S_0001 = function(first) {
    if (first)
    {
        this.node_xx = document.getElementById('xx');
    }
    if (!this.hasnext()) {
        this.goto(this.S_0002);
    }
    if (this.hasnext()) {
        this.setnowait();
    }
};
/*
    S_0002
*/
TestControl.prototype.S_0002 = function(first) {
    if (first)
    {
        this.node_xx.innerHTML = 'HOGE HOGE GAA';
    }
    if (!this.hasnext()) {
        this.goto(this.S_0003);
    }
};
/*
    S_0003
*/
TestControl.prototype.S_0003 = function(first) {
    if (first)
    {
        this.counter = 0;
    }
    if (!this.hasnext()) {
        this.goto(this.S_0004);
    }
};
/*
    S_0004
    ADD SMALL IMAGE
*/
TestControl.prototype.S_0004 = function(first) {
    if (first)
    {
        const c = document.createElement('span');
        c.id = 'container';
        c.innerHTML = '<img src = "http://statego.programanic.com/img/sgg.png" width="100px"></img>';
        document.body.appendChild(c);
    }
    if (!this.hasnext()) {
        this.goto(this.S_0005);
    }
    if (this.hasnext()) {
        this.setnowait();
    }
};
/*
    S_0005
    wait 2 sec
*/
TestControl.prototype.S_0005 = function(first) {
    if (first)
    {
        this.timer = Date.now() + 2000;
    }
    if (Date.now() < this.timer) { return; }
    if (!this.hasnext()) {
        this.goto(this.S_0006);
    }
};
/*
    S_0006
*/
TestControl.prototype.S_0006 = function(first) {
    if (first)
    {
        this.counter++;
    }
    if (this.counter < 5) { this.goto( this.S_0004 ); }
    else { this.goto( this.S_0008 ); }
    if (this.hasnext()) {
        this.setnowait();
    }
};
/*
    S_0008
    ADD IMAGE
*/
TestControl.prototype.S_0008 = function(first) {
    if (first)
    {
        const c = document.createElement('div');
        c.id = 'container';
        c.innerHTML = '<img src = "http://statego.programanic.com/img/sgg.png"></imsg>';
        document.body.appendChild(c);
    }
    if (!this.hasnext()) {
        this.goto(this.S_END);
    }
};
/*
    S_END
*/
TestControl.prototype.S_END = function(first) {
};
/*
    S_START
*/
TestControl.prototype.S_START = function(first) {
    if (!this.hasnext()) {
        this.goto(this.S_0001);
    }
};


// [STATEGO OUTPUT END]

// == write your code ==

