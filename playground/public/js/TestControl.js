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

// [SYN-G-GEN OUTPUT START] indent(0) $/./$
//  psggConverterLib.dll converted from TestControl.xlsx. 
/*
    S_0001
    new state
*/
TestControl.prototype.S_0001 = function(first) {
    if (first)
    {
        alert("!");
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


// [SYN-G-GEN OUTPUT END]

// == write your code ==

