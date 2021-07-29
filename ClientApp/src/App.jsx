import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './index.css'

import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsFillPlayFill, BsShuffle, BsThreeDots } from 'react-icons/bs'

import kanye from './images/kanye.jpg'

export function Tracks() {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-red-500 text-2xl m-2">
          <IoIosArrowBack />
        </span>
        <div className="flex">
          <div className="bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center m-2">
            <span className="text-red-500">
              <AiOutlineArrowDown />
            </span>
          </div>
          <div className="bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center m-2">
            <span className="text-red-500">
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={kanye} alt="album art" className="h-64 w-64 rounded-md" />
      </div>
      <div className="text-title text-white flex justify-center mt-4">
        My Beautiful Dark Twisted Fantasy
      </div>
      <div className="flex justify-center text-red-500">Kanye West</div>
      <div className="flex justify-center text-gray-400 text-xs">
        HIP-HOP/RAP · 2010
      </div>
      <div className="flex justify-evenly">
        <div className="flex items-center">
          <span className="text-red-500">
            <BsFillPlayFill />
          </span>
          <div className="text-red-500">Play</div>
        </div>
        <div className="flex items-center">
          <span className="text-red-500">
            <BsShuffle />
          </span>
          <div className="text-red-500">Shuffle</div>
        </div>
      </div>
    </>
  )
}

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Tracks />
        </Route>
      </Switch>
    </>
  )
}
