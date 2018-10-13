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
//  psggConverterLib.dll converted from TestControl.xlsx. 
    /*
        E_0002
    */
    TestControl.node_xx = null;
    /*
        E_0003
    */
    TestControl.timer = 0;
    /*
        E_0004
    */
    TestControl.counter = 0;
    /*
        S_0001
    */
    TestControl.prototype.S_0001 = function(first) {
        if (first)
        {
            this.node_xx = document.getElementById('xx');
        }
        if (!this.hasnext()) {
            this.setnext(this.S_0002);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_0002
    */
    TestControl.prototype.S_0002 = function(first) {
        if (first)
        {
            this.node_xx.innerHTML = ' HOGE HOGE GAA!';
        }
        if (!this.hasnext()) {
            this.setnext(this.S_0007);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_0005
    */
    TestControl.prototype.S_0005 = function(first) {
        if (first)
        {
            const c =  document.createElement('div');
            c.id='container';
            c.innerHTML=`
                <img src="http://syn-g-gen.com/img/sgg.png" width="100px"> </img>
            `;
            document.body.appendChild(c);
        }
        if (!this.hasnext()) {
            this.setnext(this.S_0006);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_0006
        new state
    */
    TestControl.prototype.S_0006 = function(first) {
        if (first)
        {
            this.timer = Date.now() + 2000;
        }
        if (Date.now() < this.timer) { return; }
        if (!this.hasnext()) {
            this.setnext(this.S_0008);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_0007
    */
    TestControl.prototype.S_0007 = function(first) {
        if (first)
        {
            this.counter = 0;
        }
        if (!this.hasnext()) {
            this.setnext(this.S_0005);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_0008
    */
    TestControl.prototype.S_0008 = function(first) {
        if (first)
        {
            this.counter = this.counter + 1;
        }
        if (this.counter < 5) { this.setnext( this.S_0005 ); }
        else { this.setnext( this.S_0009 ); }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_0009
    */
    TestControl.prototype.S_0009 = function(first) {
        if (first)
        {
            const c =  document.createElement('div');
            c.id='container';
            c.innerHTML=`
                <img src="http://syn-g-gen.com/img/sgg.png"> </img>
            `;
            document.body.appendChild(c);
        }
        if (!this.hasnext()) {
            this.setnext(this.S_END);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_END
    */
    TestControl.prototype.S_END = function(first) {
        if (this.hasnext()) {
            this.gonext();
        }
    };
    /*
        S_START
    */
    TestControl.prototype.S_START = function(first) {
        if (!this.hasnext()) {
            this.setnext(this.S_0001);
        }
        if (this.hasnext()) {
            this.gonext();
        }
    };


// [SYN-G-GEN OUTPUT END]

// == write your code ==

