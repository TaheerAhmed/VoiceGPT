
'use client'
import useSWR from 'swr'
import Select from 'react-select'



const fetchModel=()=>fetch('/api/getModels').then(res=>res.json())

const ModelSelection = () => {

const {data:models,isLoading}=useSWR('models',fetchModel)


    const { data: model, mutate:setModel } = useSWR('model', {fallbackData:'text-davinci-003'})

  const customStyles = {
    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      backgroundColor: '#202123',
      borderColor: state.isFocused ? 'white' : 'gray',
      '&:hover': {
        borderColor: 'white',
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      backgroundColor:'white'
    }),
    input: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: state.isSelected ?  'white' :'#202123',
      color: state.isSelected ? '#202123':'white' ,
      
      '&:hover': {
        backgroundColor: 'white',
        color:' #202123'
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
  };


  return (
    <div >
     
     <Select 
        className='mt-2 text-white bg-[#202123]'
    defaultValue={model}
     options={models?.modelOptions}
     isSearchable
     isLoading={isLoading}
     menuPosition='fixed'
     placeholder={"Default("+model+")"}
        styles={customStyles}

    onChange={(e)=>setModel(e.value)}
     /> 
    </div>
  )
}

export default ModelSelection
