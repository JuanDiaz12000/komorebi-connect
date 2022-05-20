import './Style/graphContainer.scss'
import LineChart from './lineChart';
import testDataLineChart from './lineChartTest.json'
import BarChart from './barChart';
import dataTestBar from './barChartTest.json'
import PieChart from './pieChart';
import dataTestPie from './pieChartTest.json'
import ProgressBar from './ProgressBar';

function GraphContainer(props){
    if (props.typeGraph == 'first'){
        return(
            <div className="container">
              <div className='titleContainer'> 
              <h3>Tags</h3>
              </div>
                <BarChart data={dataTestBar}/>
            </div>
        );
    }

    else if (props.typeGraph == 'second')
    {
        return(
            <div className="container">
              <div className='titleContainer'> 
                <h3>Top Agents</h3>
              </div>   
              <div className='graphMain'>
                <ProgressBar bgcolor="#facaed" agentName='Anny' progress='30'  height={30} />
                <ProgressBar bgcolor="#facda5" agentName='Daniel' progress='70'  height={30} />
                <ProgressBar bgcolor="#e0bef7" agentName='Paola' progress='40'  height={30} />          
              </div>           
            </div>
        );
    }
    else if (props.typeGraph == 'third')
    {
        return(
            <div className="container">
              <div className='titleContainer'> 
                <h3>Category Distribution</h3>
              </div> 
                <PieChart data={dataTestPie}/>               
            </div>
        );
    }
    else if (props.typeGraph == 'bottom'){
      return(
        <div className="containerBottom">
          <div className='titleContainer'> 
            <h3>Received Calls</h3>
          </div>
            <LineChart data={testDataLineChart}/>             
        </div>
    );
    }
}

export default GraphContainer;