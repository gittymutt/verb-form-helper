export class Be {
    affNc: string = "is";
    affC: string = "'s";
    negNc: string = "is not";
    negC1: string = "isn't";
    negC2: string = "'s not";
    affPNc: string = "was";
    negPNc: string = "was not";
    negPC1: string = "wasn't";
    
    set(
        
        isSingular: boolean = false,
        isI: boolean = false ) {

        if (isI) {
            this.affC = "'m";
            this.affNc = "am";
            this.negC1 = "'m not";
            this.negC2 = "";
            this.affPNc = "was";
            this.negPNc = "was not";
            this.negPC1 = "wasn't";
            return;
        }

        if (!isSingular) {
            this.affC = "'re";
            this.affNc = "are";
            this.negC1 = "'re not";
            this.negC2 = "aren't";
            this.affPNc = "were";
            this.negPNc = "were not";
            this.negPC1 = "weren't";
            return;
        } 

        this.affC = "'s";
        this.affNc = "is";
        this.negC1 = "'s not";
        this.negC2 = "isn't";
        this.affPNc = "was";
        this.negPNc = "was not";
        this.negPC1 = "wasn't";
        return;
    }
    
}







 /* 

 static I: number = 0;
    static sing: number = 1;
    static pl: number = 2;
    static pres: number = 3;
    static past: number = 4;
    static pastPart: number = 5;
    static affirm: number = 6;
    static neg: number = 7;
    static ques: number = 8;
    
    isContracted: boolean = false;
    subject: number;
    verbText: string;

    constructor () {
        this.verbText = '';
    }

    

    get ({
        subject = Be.pl,
        tense = Be.pres,
        type = Be.affirm,
        isContracted = false,
        }: NamedParameters): string {
            
        if (tense === Be.pastPart) { return "been"; }
        if (tense === Be.past) {
            this.verbText = 'were';
            if (subject === Be.I || subject === Be.sing) {
                this.verbText = 'was';
            }
            if (type === Be.ques) return this.verbText;
            this.verbText = ' ' + this.verbText;
            if (type !== Be.neg) return this.verbText;
            // The rest should be negative.
            if (!isContracted) {
                return this.verbText + ' not';
            } else {
                return this.verbText + 'n\'t';
            }

        }
        
        


        // Simple present is all that's left.
        if (subject === Be.I) {
            if (type === Be.ques) return 'am';
            if (type === Be.affirm) {
                return (this.isContracted ? '\'m' : ' am');
            }
            if (this.isContracted) {
                return '\'m not';
            } else {
                return ' am not';
            }
        }
        
        // Simple presents that are not am are left.
        if (tense === Be.past) {
            this.verbText = 'are';
            if (subject === Be.sing) {
                this.verbText = 'is';
            }
            if (type === Be.ques) return this.verbText;
            this.verbText = ' ' + this.verbText;
            if (type !== Be.neg) return this.verbText;
            // The rest should be negative.
            if (!isContracted) {
                return this.verbText + ' not';
            } else {
                return this.verbText + 'n\'t';
            }

        }



        return 'didnt find anything :(' + 
        subject.toString() +
        tense.toString() +
        type.toString();   
       
     
        
    }

    export interface NamedParameters  {
    subject?: number;
    tense?: number;
    type?: number;
    isContracted?: boolean;
 }
    */