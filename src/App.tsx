
import { Suspense } from 'react';
import Banner from './components/banner'
import Nav from './components/nav';
import Players from './components/players/players';
import type { Player } from './types/playerType';


const playersFetch = async():Promise<Player[]>=>{
  const res = await fetch("/data.json")
  const data = await res.json();
  return data;
}

function App() {
  const playersPromise = playersFetch();
  return (
    <>
     <Nav></Nav>
     <Banner></Banner>

     <Suspense fallback = {<h2>Loading.....</h2>} >
     <Players playersPromise = {playersPromise}></Players>
     </Suspense>
    </>
  )
}

export default App
