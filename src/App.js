import create from 'zustand';
import './App.css';


const useStore = create((set) => ({
  filter: '',
  times: [],
  setFilter: (filter) => set((state) => ({
    ...state,
    filter
  })),
  setTimes: (filter) => set((state) => ({
    ...state,
    times
  }))
}))

const FilterInput = () => {
  const filter = useState((state) => state.filter);
  const setFilter = useState((state) => state.setFilter);
  return (
    <input value={filter} onChange={(env) => setFilter(env.target.value)}
  )
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
