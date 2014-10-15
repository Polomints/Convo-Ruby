/**
 * @author jmccarthy
 */
  var ImageArr1 = new Array("Pict1.jpg","Pict2.jpg","Pict3.jpg","Pict4.jpg","Pict5.jpg");
  
  function RotateImages(whichHolder,Start)
  {
  	var a = "ImageArr1";
  	var b = document.getElementById('Rotating1');
  	if(Start>=5)
  		Start=0;
  	b.src = "Images/Books/" + ImageArr1[Start];
  	window.setTimeout("RotateImages("+whichHolder+","+(Start+1)+")",5000);
  }
  
  

