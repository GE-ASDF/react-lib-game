import { useState } from "react";
import Game from "./Components/Game";
import NewGamesForm from "./Components/NewGamesForm";
import useGameCollection from "./hooks/useGameCollection";
import TextInput from "./Components/TextInput";

export default function App(){
  const {filter, setFilter, games, addGame, removeGame} = useGameCollection();
  
  return (
    <div id="app">
        <h1>Biblioteca de jogos</h1>
        <NewGamesForm addGame={addGame} />
        <TextInput value={filter} id="pesquisa" label="Pesquise um jogo:" type="text" setValue={setFilter} />
        <div className="games">
          {
          filter.trim().toLowerCase() ?
            games.map((game)=>{
              if(game.title.trim().toLowerCase().includes(filter.trim().toLowerCase())){
                return (
                  (<Game
                    key={game.id}
                    title={game.title}
                    cover={game.cover}
                    onRemove={()=>{ removeGame(game.id) }}
                    />)
                    )
                }
            }): games.map((game)=>{
                return (
                  (<Game
                    key={game.id}
                    title={game.title}
                    cover={game.cover}
                    onRemove={()=>{ removeGame(game.id) }}
                    />)
                    )
                })
          }
          {/* {games.length > 0 ?
            games.map((game) =>
              filter.trim().toLowerCase() && game.title.trim().toLowerCase().includes(filter.trim().toLowerCase()) ?
            (
              <Game
                key={game.id}
                title={game.title}
                cover={game.cover}
                onRemove={()=>{ removeGame(game.id) }}
              />
            ):(<Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={()=>{ removeGame(game.id) }}
            />)
          ):(
            <h2>Não há jogos na coleção</h2>
          )
          } */}
        </div>
    </div>
  )
}