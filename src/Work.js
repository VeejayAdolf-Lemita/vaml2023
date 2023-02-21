import React from 'react'
import Zumumu from './assets/zumumu.png'
import Pudding from './assets/pudding.png'
import Lukslofts from './assets/lukslofts.png'
import Digibutler from './assets/digibutler.png'
import ShareCafe from './assets/share-events.png'
import FeedbackUI from './assets/Feedback UI.png'


const Work = () => {
  return (
    <div className='pb-32'>
      <h2 className="text-center text-3xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">WORK</h2>
      <p className="text-sm py-5 text-center leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-l">
      Collection of projects, from websites to webapps and everything tech. Includes experiments and self-discoveries.
      </p>

      <div className='flex flex-wrap flex-grow-0 w-full gap-3'>
        <div className="max-w-sm  bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
          <a href="https://zumumu.com/?language=en" target="_blank">
            <img className="p-2 rounded-lg w-full" src={Zumumu} alt=""/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ZUMUMU</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Website for promoting products about order management system for hotel and restaurant businesses.</p>
                <a href='https://zumumu.com/?language=en' className='text-center' target="_blank">
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Visit Website
                  </button>
                </a>
            </div>
          </a>
        </div>
        <div className="max-w-sm  bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
          <a href="https://lukslofts.com/" target="_blank">
            <img className="p-2 rounded-lg w-full" src={Lukslofts} alt=""/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LUKSLOFTS</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A marketing wesbsite for a luxurious hotel in Philippines</p>
                <a href='https://lukslofts.com/' className='text-center' target="_blank">
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Visit Website
                  </button>
                </a>
            </div>
          </a>
        </div>
        <div className="max-w-sm  bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
          <a href="https://pudding.ws/" target="_blank">
            <img className="p-2 rounded-lg w-full" src={Pudding} alt=""/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PUDDING</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pudding provides dependable solutions to safeguard industries and their assets.</p>
                <a href='https://pudding.ws/' className='text-center' target="_blank">
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Visit Website
                  </button>
                </a>
            </div>
          </a>
        </div>
        <div className="max-w-sm  bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
          <a href="https://www.digibutler.net/" target="_blank">
            <img className="p-2 rounded-lg w-full" src={Digibutler} alt=""/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DIGIBUTLER</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A digital guest engagement system for a local hotel in Philippines</p>
                <a href='https://www.digibutler.net/' className='text-center' target="_blank">
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Visit Website
                  </button>
                </a>
            </div>
          </a>
        </div>
        <div className="max-w-sm  bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
          <a href="#" >
            <img className="p-2 rounded-lg w-full" src={ShareCafe} alt=""/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Share Cafe Events</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A website application to showcase Event Halls and for users to reserve their events.</p>
                <a href='#' className='text-center'>
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Under Development
                  </button>
                </a>
            </div>
          </a>
        </div>
        <div className="max-w-sm  bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
          <a href="https://github.com/VeejayAdolf-Lemita/feeback-app" target="_blank">
            <img className="p-2 rounded-lg w-full" src={FeedbackUI} alt=""/>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FEEDBACK UI</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Application for feedback (Practicing REACT)</p>
                <a href='https://github.com/VeejayAdolf-Lemita/feeback-app' className='text-center' target="_blank">
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Github Repo
                  </button>
                </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work
