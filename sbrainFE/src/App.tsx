import Button from "./components/Button"
import PlusIcon from "./icons/plusicon"
import ShareIcon from "./icons/ShareIcon"
import { BrainCard } from "./components/BrainCard"
const App = () => {
  return (
    <div>
      <Button startIcon={<PlusIcon size="md"/>} size='md' variant="primary" text="Add Content"  onClick={()=>{}}/>
      <Button startIcon={<ShareIcon size='md'/>} size='lg' variant="secondary" text="Share"  onClick={()=>{}}/>
      <BrainCard title='Important post' link="https://twitter.com/sachinyadav699/status/1968273831350677715" type="twitter"/>
      <BrainCard title='song' link="https://www.youtube.com/watch?v=60ItHLz5WEA&list=RD60ItHLz5WEA&start_radio=1" type="youtube"/>
    </div>
  )
}

export default App