import { Button } from '../../components';

interface Props {
  title : string,
  placeholder: string,
  input: string,
}


const SearchLocation = (props : Props) => {

  function onClickFindLocation() {
    return
  }


  return (
    <div className="searchLocation-container">
      <div className="searchLocation-input_holder">
        <div className='seachLocation-content'>
      <div className='searchLocation-input_holder-search'>
      <p className="searchLocation-title">{props.title}</p>
      <input className={props.input} placeholder={props.placeholder}/>
      </div>
      </div>
      <div className="searchLocation-btn">
      <Button  variant='btn-nav' size="input-btn_medium" children="Find" onClick={onClickFindLocation}></Button>
      </div>
      </div>
    </div>
  )
}

export default SearchLocation