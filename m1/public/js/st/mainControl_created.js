//  psggConverterLib.dll converted from mainControl.xlsx. 
var mainControl = function() {};
mainControl.prototype = new stateman();
mainControl.prototype.start = function() {
        this.goto(this.S_START);
};
mainControl.prototype.is_end = function() {
        return this.checkstate(this.S_END);
};
// == yesno set ==
mainControl.yesno=false;
mainControl.prototype.br_yes = function(st) {
        if (!this.hasnext(st)) {
                if (this.yesno) {
                        this.setnext(st);
                }
        }
};
mainControl.prototype.br_no = function(st) {
        if (!this.hasnext(st)) {
                if (!this.yesno) {
                        this.setnext(st);
                }
        }
};
//

/*
    S_START
*/
mainControl.prototype.S_START = function(first) {
    if (first)
    {
    }
    if (!this.hasnext()) {
        this.setnext(this.S_0001);
    }
    if (this.hasnext()) {
        this.gonext();
    }
};
/*
    S_END
*/
mainControl.prototype.S_END = function(first) {
    if (first)
    {
    }
    if (this.hasnext()) {
        this.gonext();
    }
};
/*
    S_0001
    new state
*/
mainControl.prototype.S_0001 = function(first) {
    if (first)
    {
        this.l = Date.now();
        console.log("S_0001 " + this.l );
    }
    this.yesno = (this.l % 2 == 0);
    this.br_yes(this.S_0002)
    this.br_no(this.S_0003)
    if (!this.hasnext()) {
        this.setnext(this.S_END);
    }
    if (this.hasnext()) {
        this.gonext();
    }
};
/*
    S_0002
    new state
*/
mainControl.prototype.S_0002 = function(first) {
    if (first)
    {
        console.log("yes");
    }
    if (this.hasnext()) {
        this.gonext();
    }
};
/*
    S_0003
    new state
*/
mainControl.prototype.S_0003 = function(first) {
    if (first)
    {
        console.log("no");
    }
    if (this.hasnext()) {
        this.gonext();
    }
};


