import Button from "./components/Button"
import PlusIcon from "./icons/plusicon"
const App = () => {
  return (
    <div>
      <Button startIcon={<PlusIcon/>} size='md' variant="primary" text="Share"  onClick={()=>{}}/>
      <Button size='lg' variant="secondary" text="Add Content"  onClick={()=>{}}/>
    </div>
  )
}

export default App