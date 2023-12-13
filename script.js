var image;
function getimage()  //Input the iamge
{
var can=document.getElementById("canvas1");
var input_img=document.getElementById("img");
image=new SimpleImage(input_img);
image.drawTo(can);
}

function doGray() //to check and do the grayscale operation
{
   if (image==null||!image.complete()) {
     alert("Image not loaded");
   }
    filterGray();	                      	
}

function filterGray() 
{
  for(var pixel of image.values())
    {
var avg=(pixel. getRed()+pixel. getGreen()+pixel. getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    var can=document.getElementById("canvas1");
   image.drawTo(can);
}

function doRed()//to check and do the red operation
{
   if (image==null||!image.complete()) {
     alert("Image not loaded");
   }
    filterRed();	                      	
}

function filterRed()
{
for(var pixel of image.values())
    {
var avg=(pixel. getRed()+pixel. getGreen()+pixel. getBlue())/3;
      if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);  
      }
}
   var canva=document.getElementById("canvas1");
   image.drawTo(canva);
}

function getfilter()
{
 var w=image.getHeight();
  for(var pixel of image.values())
    {
      Y=pixel.getY();
 var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;        
       if(Y<w/7)
        {
     if(avg<128)
       {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
         else{
           pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
         }}
          
      else if(Y<2*w/7){
        if(avg<128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
           pixel.setBlue(0);
        }
         else{
           pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
           pixel.setBlue(2*avg-255);
         }}
          
      else if(Y<3*w/7){
        if(avg<128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
           pixel.setBlue(0);
        }
         else{
           pixel.setRed(255);
          pixel.setGreen(255);
           pixel.setBlue(2*avg-255);
         }}
          
      else if(Y<4*w/7){
      if(avg<128)
       {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
        else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        }}
          
        else if(Y<5*w/7){
          if(avg<128)
          {
        pixel.setRed(0);
        pixel.setGreen(0);    
        pixel.setBlue(2*avg);
          }
          else{
         pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);    
        pixel.setBlue(255);
          }}
          
        else if(Y<6*w/7)
          {
            if(avg<128)
              {
      pixel.setRed(0.8*avg);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
          }
        else
          {
      pixel.setRed(1.2*avg-51);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(255);
          }
       }
        
          
         else {
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
    }
    }
    }
    
var canva=document.getElementById("canvas1");
image.drawTo(canva);
}

function nothing()//back to original image
{
var can=document.getElementById("canvas1");
var input_img=document.getElementById("img");
image=new SimpleImage(input_img);
image.drawTo(can);
}