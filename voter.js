class Voter{
    constructor(){
        this.count =null;
    }
    updateName(name,vote){
        var c = this.count;
        var r = database.ref('/'+c).set({Name:name,Vote : vote});
    }
    getCount(){
        var playerCountRef = database.ref('Count');
        playerCountRef.on("value",function(data){
          this.count = data.val();
        })
      }
      updateCount(c){
        var playerCountRef = database.ref('Count').update({Count:c});
        
        
      }
      
}