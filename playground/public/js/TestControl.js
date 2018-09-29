// == manager ==
var TestControl = function() {
    this.curfunc   = null;
    this.nextfunc  = null;
    this.candfunc  = null;
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
    return this.candfunc === st;
};
TestControl.prototype.goto = function(st) {
    this.nextfunc = st;
};
TestControl.prototype.setnext = function(st) {
    this.candfunc = st;
}
TestControl.prototype.gonext = function() {
    this.nextfunc = this.candfunc;
    this.candfunc = null;
}
TestControl.prototype.hasnext = function() {
    return this.candfunc!=null;
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

// [SYN-G-GEN OUTPUT START] $/./$
TestControl.prototype.S_STATE = function(first) { this.goto(S_END); }
TestControl.prototype.S_END   = function(first) { }
// [SYN-G-GEN OUTPUT END]

// == write your code ==

