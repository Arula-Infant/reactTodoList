import React from 'react'
import { useLocation } from "react-router-dom";

const View = () => {
    const { state } = useLocation();
  return (
    <>
       <section className=" h-[90vh] flex justify-center">
        <figure className="w-[400px] shadow-xl rounded-2xl p-1">
          <div className="">
            <img className="rounded-t-2xl" src={state.images[0].url} />
          </div>
          <figcaption>
            <table className="border w-full">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{state.name}</td>
                </tr>
              </tbody>
            </table>
          </figcaption>
        </figure>
      </section> 
    </>
  )
}

export default View
