import './App.css'
import GridItem from './components/GridItem'
import AreaChart from './components/AreaChart'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
          <GridItem title="Area Chart">
            <AreaChart />
          </GridItem>
          <GridItem title="Bar Chart">
            <BarChart />
          </GridItem>
          <GridItem title="Line Chart">
            <LineChart />
          </GridItem>
        </div>
      </div>
    </>
  )
}

export default App
