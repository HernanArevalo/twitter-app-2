
import { useForm } from '../../../hooks'
import './RightComponent.css'


export const RightComponent = () => {

  const { formState, onInputChange, onResetForm, search } = useForm({
    search: '',
  })


  return (
    <>
        <div className="right-container">
            <div>

                <div className="search-container">
                  <box-icon name='search' color="rgb(136, 153, 166)"></box-icon>
                  <input type="text" 
                         name="search" 
                         value={ search }
                         onChange={ onInputChange }
                         placeholder='Buscar En Twitter'/>


                  { true && 
                  <div style={{display: search.trim() == "" && "none" }} className="cross-search-cont">
                    <box-icon name='x' color="rgb(22, 33, 44)"></box-icon> 
                  </div>
                  }

                </div>

            </div>

        </div>
    </>
  )
}
