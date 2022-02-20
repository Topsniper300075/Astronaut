import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Astronaut';
  data:{color:string,item:string}[]= [];
  

  boxclicked(boxnum:number){
    if (boxnum != 40){
      this.data[boxnum].item="nukehim"
    }
  
  }

  movea(){
    var aindex = 0;
    while (this.data[aindex].item != 'astronaut at home'){

      aindex +=1;
    }

    var availablemoves = [aindex-10, aindex-9, aindex-8, aindex-1, aindex+1, aindex+8, aindex+9, aindex+10];
    
  }



  ngOnInit(){

    this.data = [];
    
    var i = 0;
    while (i != 81) {
      var boxdata = {color:"",item:""};

      if (i == 40) {
        boxdata.item = 'astronaut at home';
      }
  



      if (i % 2 == 0) {
        boxdata.color = 'rgba(255,255,255,0.25)';
      }
      else {
        boxdata.color = 'rgba(0,0,0,0)';
        } 
        
       

        


       
      this.data.push(boxdata);
      i +=1;
    }
    
  }
}


