import React,{useState} from 'react'
import "./con2.css"
import Chart from 'react-apexcharts'
import Adhd from "../../images/nobg_img/adhd.png"
import Alzi from "../../images/nobg_img/alzheimer.png"
import deme from "../../images/nobg_img/dementia.png"
import park from "../../images/nobg_img/parkinsons-disease.png"
import tbi from "../../images/nobg_img/TBI.png"
import elon from "../../images/nobg_img/Group25.svg"


function Con2() {
const [state, setstate] = useState( {
          
  series: [{
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
    data: [53, 32, 33, 52, 13, 44, 32]
  },],
  options: {
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['white']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: [21, 22, 23, 24, 25, 26, 27],
    },
  },


})

const [state2, setState2] = useState({
          
  series: [76, 67, 61, 90],
  options: {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['ADHD', 'ALZHEIMERS', 'DEMENTIA', 'EPILEPSY'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
            show: false
        }
      }
    }]
  },


})
  
  return(
    <div className='con2_container'>

      <div className="repre">

        <div className="counter">
          <Chart options={state2.options} series={state2.series} type="radialBar" height={390} />
        </div>

        <div className="graph">
          <div className='row'>
            <div className='column'>
            <Chart 
              options={state.options} 
              series={state.series} 
              type="bar" 
              height={350} />
            </div>
          </div>
        </div>

    

        <div className="">

        </div>

      </div>
      {/* patients catogaries */}
      <div className="cat">
        <div className='patient_cat'>
          <h3>ADHD</h3>
          <img src={Adhd} alt="" />
        </div>


        <div className='patient_cat'>
          <h3>ALZHEIMERS</h3>
          <img src={Alzi} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>DEMENTIA</h3>
          <img src={deme} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>PARKINSON’s</h3>
          <img src={park} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>TBI</h3>
          <img src={tbi} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>TBI</h3>
          <img src={tbi} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>EPILEPSY</h3>
          <img src={tbi} alt="" />
        </div>
      </div>

      <div className="">
        <div className="recent_patients">
          <img src={elon} alt="" srcset="" />
        </div>
        <div className="recent_patients">
          <img src={elon} alt="" srcset="" />
        </div>
        <div className="recent_patients">
          <img src={elon} alt="" srcset="" />
        </div>
        <div className="recent_patients">
          <img src={elon} alt="" srcset="" />
        </div>
      </div>

    </div>
  )
}

export default Con2;