class Form{
    constructor(){

    }
    display(){

    var title = createElement('h2')
    title.html("Give your vote Here");
    title.position(500, 70);
    
    var input = createInput("Name");
    var input1 = createInput("vote");
    var button = createButton('submit');
    
    input.position(500, 160);
    input1.position(500, 200);
    button.position(500, 300);

    button.mousePressed(function(){
        voter.count++;
        voter.updateCount(voter.count);
      

      var name = input.value();
      console.log(name);
      
      var vote = input1.value();
      console.log(vote);
      
      voter.updateName(name,vote);
      input.hide();
      input1.hide();
      button.hide();
      var t = createElement('h2')
    t.html("VOTE SUBMITTED");
    t.position(500, 250);

      
    });

  }
}

