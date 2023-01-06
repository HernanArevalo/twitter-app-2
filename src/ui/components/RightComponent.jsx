
import './RightComponent.css'


export const RightComponent = () => {


  return (
    <>
        <div className="right-container">
            <div>

                <div className="search-container">
                  <box-icon name='search' color="rgb(136, 153, 166)"></box-icon>
                  <input type="text" placeholder='Buscar En Twitter'/>


                  { true && 
                  <div className="cross-search-cont">
                    <box-icon name='x' color="rgb(22, 33, 44)"></box-icon> 
                  </div>
                  }

                </div>

            </div>

        </div>
    </>
  )
}
