


export class Be {
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
            if (subject === Be.I) {
                this.verbText = ' was';
                if (type !== Be.neg) return this.verbText;
                this.verbText += ' not';
                return isContracted ? ' wasn\'t' : this.verbText
            }
        }  
        // simple present is all that's left
        if (subject === Be.I) {
            this.verbText = ' am';           
            if (type === Be.ques) {return this.verbText.trim();}
            if (type === Be.affirm) {
                return (this.isContracted ? '\'m' : this.verbText);
            }

            // pres negative 
            this.verbText += ' not';
            if (this.isContracted) {
                return '\'m not';
            } else {
                return this.verbText;
            }
        }
         
        return 'didnt find anything :(' + 
        subject.toString() +
        tense.toString() +
        type.toString();   
       
     
        
    }
    

    
}

export interface NamedParameters  {
    subject?: number;
    tense?: number;
    type?: number;
    isContracted?: boolean;
 }