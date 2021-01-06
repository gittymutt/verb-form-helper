import { Be } from './be-form';

describe('Be', () => {
  let be: Be;

  beforeEach(()=>{
    be = new Be();
  });

  it('should create an instance', () => {
    expect(new Be()).toBeTruthy();
  });     

  it('should output been', ()=>{
    let inputs = [
      { 'tense': Be.pastPart }
     
    ];
    inputs.forEach ( (input)=> {
      expect(be.get(input)).toBe("been");
    });
  });


  

  it('should output was', ()=>{
    let inputs = [
      {'subject': Be.I, 'tense': Be.past, 'type': Be.ques},
      {'subject': Be.I, 'tense': Be.past, 'type': Be.affirm},
    ];
    inputs.forEach ( (input)=> {
      expect(be.get(input)).toBe(" was");
    });
  });


  it('should output was not', ()=>{
    let inputs = [
      {'subject': Be.I, 'tense': Be.past, 'type': Be.neg},
    ];
    inputs.forEach ( (input)=> {
      expect(be.get(input)).toBe(" was not");
    });
  });

  

  it('should output wasn\'t', ()=>{
    let inputs = [
      {'subject': Be.I, 'tense': Be.past, 'type': Be.neg, 'isContracted': true},
    ];
    
    

    
    inputs.forEach ( (input)=> {
     
      expect(be.get(input)).toBe(" wasn\'t");
                  

      
      
    });
  });


  /*
  it('should output am ', ()=>{
    let inputs = [{'subject': Be.I, 'tense': Be.pres, 'type': Be.ques}];
    inputs.forEach ( (input)=> {
      expect(be.get(input.subject,
                    input.tense,
                    input.type)).toBe("am");
    });
  });
*/

/*
    it('should output is ', ()=>{
      let inputs = [
        {'subject': Be.sing, 'tense': Be.pres, 'type': Be.ques},
        {'subject': Be.sing, 'tense': Be.pres, 'type': Be.affirm},
        //{'subject': Be.I, 'tense': Be.pres, 'type': Be.ques},
        //{'subject': Be.I, 'tense': Be.pres, 'type': Be.ques},
      
      ];
      inputs.forEach ( (input)=> {
        expect(be.get(input.subject,
                      input.tense,
                      input.type)).toBe("is");
      });

    
  });
  */
});
