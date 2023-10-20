import React from 'react'
import '../styles/loading.css'

const Loading = () => {
  return (
    // <div class="grid h-full place-content-center">
    //   <div className='flex mx-auto gap-1'>
    //     <div class="bar bar1"></div>
    //     <div class="bar bar2"></div>
    //     <div class="bar bar3"></div>
    //     <div class="bar bar4"></div>
    //     <div class="bar bar5"></div>
    //     <div class="bar bar6"></div>
    //     <div class="bar bar7"></div>
    //     <div class="bar bar8"></div>
    //   </div>
    // </div>
    <div class='grid h-full place-content-center'>
      <div class='loading-circle'>
        <div class='inner-circle'></div>
      </div>
    </div>
  )
}

export default Loading