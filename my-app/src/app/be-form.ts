


export class Be {
    I: number = 0
    sing: number = 1
    pl: number = 2

    constructor () {

    }

    get (pronoun: number) {
        switch (pronoun) {
            case this.I:
                return "am"
                break
            case this.sing:
                return "is"
                break
            case this.pl:
                return "are"
                break
            default:
                return "is"

        }
        
    }
}
