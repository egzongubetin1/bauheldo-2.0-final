import {useState} from 'react';

interface Props {
   question: string,
   answer : string,
}


const Questions = (props : Props) => {
    let icon = <i><img src='../../../assets2/arrow-up-question.svg'/></i>
    const [show, useShow] = useState<boolean>(false)

    if(show === true){
        icon = <i><img className='icon-question' src='../../../assets2/arrow-up-question.svg'/></i>
    }

    if(show === false){
        icon = <i><img className='icon-question' src='../../../assets2/right-angel.svg'/></i>
    }



  return (
    <div className='questions'>
        <div className='questions-container container'>
                <div className='questions-header'>
                {/* <h1>{props.title}</h1> */}
                </div>
                <div className='questions-top'>
                    <div onClick={() => useShow(!show)} className='questions-container'>
                        <div className='top-header_questions'>
                    {icon}
                    <span >{props.question}</span>
                    </div>
                    {show && <div className='questions-paragraph'>
                        <p>{props.answer}</p>
                    </div>}
                </div>
                </div>
            </div>
        </div>
  )
}

export default Questions