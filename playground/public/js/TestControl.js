// == manager ==
var TestControl = function() {
    this.curfunc   = null;
    this.nextfunc  = null;
    this.nowait    = false;
    
    this.callstack = [];
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
TestControl.prototype.gosubstate = function(sb,nt) {
    this.callstack.push(nt);
    this.goto(sb);
};
TestControl.prototype.returnstate = function() {
    this.goto(this.callstack.pop());
};

// [STATEGO OUTPUT START] indent(0) $/./$
//  psggConverterLib.dll converted from TestControl.xlsx.    psgg-file:TestControl.psgg
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
    S_0007
*/
TestControl.prototype.S_0007 = function(first) {
    if (first)
    {
        alert("Running in A Subroutine.");
    }
    if (!this.hasnext()) {
        this.goto(this.S_RETURN1);
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
    S_0009
*/
TestControl.prototype.S_0009 = function(first) {
    if (first)
    {
        alert("Count = ." + this.count );
    }
    if (!this.hasnext()) {
        this.goto(this.S_RETURN2);
    }
};
/*
    S_END
*/
TestControl.prototype.S_END = function(first) {
};
/*
    S_GOSUB1
    New Go Souroutine
*/
TestControl.prototype.S_GOSUB1 = function(first) {
    this.gosubstate(this.S_SUBSTART1,this.S_LOOP1);
    this.setnowait();
};
/*
    S_LOOP1
*/
TestControl.prototype.S_LOOP1 = function(first) {
    this.count = 0;
    this.goto(this.S_LOOP1_LoopCheckAndGosub____);
    this.setnowait();
};
TestControl.prototype.S_LOOP1_LoopCheckAndGosub____ = function(first) {
    if (this.count < 10) this.gosubstate(this.S_SUBSTART2,this.S_LOOP1_LoopNext____);
    else               this.goto(this.S_0001);
    this.setnowait();
};
TestControl.prototype.S_LOOP1_LoopNext____ = function(first) {
    this.count ++;
    this.goto(this.S_LOOP1_LoopCheckAndGosub____);
    this.setnowait();
};
/*
    S_RETURN1
    New Subroutine Return
*/
TestControl.prototype.S_RETURN1 = function(first) {
    this.returnstate();
    this.setnowait();
};
/*
    S_RETURN2
    New Subroutine Return
*/
TestControl.prototype.S_RETURN2 = function(first) {
    this.returnstate();
    this.setnowait();
};
/*
    S_START
*/
TestControl.prototype.S_START = function(first) {
    this.goto(this.S_GOSUB1);
    this.setnowait();
};
/*
    S_SUBSTART1
    New Subroutine Start
*/
TestControl.prototype.S_SUBSTART1 = function(first) {
    this.goto(this.S_0007);
    this.setnowait();
};
/*
    S_SUBSTART2
    New Subroutine Start
*/
TestControl.prototype.S_SUBSTART2 = function(first) {
    this.goto(this.S_0009);
    this.setnowait();
};


// [STATEGO OUTPUT END]

// == write your code ==

