function calculateTol(){
  var vehicleType=document.getElementById('vehicleType').value;
  var distance=document.getElementById('distance').value;
  var resultElement=document.getElementbyId('result');
  if(isNaN(distance) || distance <0)
  {
    resultElement.innerHTML='<p> please enter valid data.</p>';
    return;
    var tollAmount;
    if(vehicleType === 'car'){
      tollAmount=0.5 * distance;
    }else if(vehicleType === 'bus'){
      tollAmount=1 * distance;
    }else if(vehicleType ==='truck'){
      tollAmount=1.5 * distance;
    }else{
      resultElement.innerHTML = '<p> invalid valid vehicle type entered</p>';
      return;
    }
  }
}
