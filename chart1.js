var dat1 = [40, 40, 40, 40, 40, 40, 40];

var da2 = {
    labels: ['1st', ' 2nd in', '3rd in', '4th in','5th in','6th in','7th in'],
    datasets: [{
        label: '',
        data: dat1,
        backgroundColor: 'rgb(35, 26, 26)',
        borderColor: 'rgb(35, 26, 26)',
        borderWidth: 1
    }]
};
var config2 = {
    type: 'line',
    data: da2,
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
              text: 'Humidity',
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
var ctx2 = document.getElementById('myChart1').getContext('2d');
        var mychart2 ;
        if (mychart2) {
            mychart2.destroy(); // Destroy the existing chart instance
        }
        mychart2 = new Chart(ctx2, config2);
 
     var dat2 = [1, 1, 1, 1, 1, 1, 1];

        var da3 = {
            labels: ['1st', ' 2nd in', '3rd in', '4th in','5th in','6th in','7th in'],
            datasets: [{
                label: '',
                data: dat2,
                backgroundColor: 'rgb(35, 26, 26)',
                borderColor: 'rgb(35, 26, 26)',
                borderWidth: 1
            }]
        };
        var config3 = {
            type: 'line',
            data: da3,
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
                      text: 'Pressure',
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
                   var aa = document.getElementById("123");
                   
                   var ctx3 = aa.getContext('2d');
                    // Your drawing code here
                
    
                
                   
                   var mychart3 ;
                  if (mychart3) {
                    mychart3.destroy(); // Destroy the existing chart instance
                   }
                  mychart3 = new Chart(ctx3, config3);
         
        


function hf2(){
    var inp = document.getElementById("input2").value;
    console.log(inp);
    var vr = Number(inp);
    
  dat1.shift();
 dat1.push(vr);
 mychart2.data.datasets[0].data = dat1; // Update data
 mychart2.update(); 
  console.log(dat1);
    
  if( inp<=100 && inp>=0 && inp!=""){
    document.getElementById("hi2").innerHTML = inp+"%";
    var s = inp/200;
    document.getElementById("hh2").style.transform = `rotate(${s}turn)`;
  
  }
  else{
    document.getElementById("hi2").innerHTML = "error";
  }
  }




  function hf3(){
    var inp = document.getElementById("input3").value;
    var vr = Number(inp);
    dat2.shift();
 dat2.push(vr);
 mychart3.data.datasets[0].data = dat2; // Update data
 mychart3.update(); 
  console.log(dat2);
    console.log(inp);
    
  if( inp<=20 && inp>=0 && inp!=""){
    document.getElementById("hi3").innerHTML = inp+"atm";
    var s = inp/40;
    document.getElementById("hh3").style.transform = `rotate(${s}turn)`;
  
  }
  else{
    document.getElementById("hi3").innerHTML = "error";
  }
  }
  