
var voter;
function preload(){

}

function setup() {
  database=firebase.database();

  createCanvas(1000,400);
  form = new Form();
  form.display();
  voter = new Voter();
  voter.getCount();
  

 

}

function draw() {
  background(46,139,87);
}

