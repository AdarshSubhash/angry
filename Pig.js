class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,20,20);
     this.pig1=loadImage("sprites/Suvedh.JPG");
   this.pig3=loadImage("sprites/Abhishek.JPG");
   this.pig2=loadImage("sprites/Avinash_0111.jpg");
   this.pig4=loadImage("sprites/Avinash_0111.jpg");
   // this.image = loadImage("sprites/Abhishek.JPG");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
    // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
score(){
  if(this.Visiblity<0&&this.Visiblity>-100){
    score=score+1;
  }
}


};