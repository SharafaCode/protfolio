import React from 'react'

const TimeDate = () => {


    

    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const month = months[date.getMonth()]
    const dates = date.getDate();
    const years = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();



  return (
    <div>
        <div>
            <div className=' flex gap-3 justify-center items-center text-xs font-Abril tracking-widest font-font_medium'>
                <p>
                    {month}
                </p>
                <p>
                    /{dates < 10 ? '0 ' + dates : dates}
                </p>
                <p>
                    /{years}
                </p>
                <p>
                    /{hour < 10 ? '0' + hour : hour }
                </p>
                <p>

                    /{minute < 10? '0' + minute : minute }
                </p>

            </div>
        </div>
    </div>
  )
}

export default TimeDate