var dat = [36.67, 36.67, 36.67, 36.67, 36.67, 36.67, 36.67];
var data1 = {
    labels: ['1st', '2nd in', '3rd in', '4th in','5th in','6th in','7th in'],
    datasets: [{
        label: '',
        data: dat,
        backgroundColor: 'rgb(35, 26, 26)',
        borderColor: 'rgb(35, 26, 26)',
        borderWidth: 1
    }]
};
var config1 = {
    type: 'line',
    data: data1,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
              labels: {
                  color: 'rgb(35, 26, 26)' // Font color for legend
              }
          },
          title: {
              display: true,
              text: 'Temparature( ℃)',
              color: 'rgb(35, 26, 26)' // Font color for title
            
          }
      },
      scales: {
          x: {
              ticks: {
                  color: 'rgb(35, 26, 26)'// Font color for x-axis labels
              }
          },
          y: {
              ticks: {
                  color:'rgb(35, 26, 26)' // Font color for y-axis labels
              }
          }
      }
  }

        
};
var ctx1 = document.getElementById('myChart').getContext('2d');
var mychart1;
if (mychart1) {
    mychart1.destroy(); // Destroy the existing chart instance
}
  mychart1 = new Chart(ctx1, config1);

function hf(){
  var inp = document.getElementById("input").value;
  var vr = Number(inp);
    
  dat.shift();
 dat.push(vr);
 mychart1.data.datasets[0].data = dat; // Update data
 mychart1.update(); 
  console.log(dat);
    
    console.log(inp);
    
    

    
  if( inp<=500 && inp>=-273.15 && inp!=""){
    document.getElementById("hi").innerHTML = inp+"℃";
    

    var s = (Number(inp)+273.15)/(773.15*2);
    console.log(s);
    document.getElementById("hh").style.transform = `rotate(${s}turn)`;

  }
  else{
    document.getElementById("hi").innerHTML = "error";
  }
}