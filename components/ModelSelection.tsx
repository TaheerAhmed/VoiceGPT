
'use client'
import useSWR from 'swr'
import Select from 'react-select'



const fetchModel=()=>fetch('/api/getModels').then(res=>res.json())

const ModelSelection = () => {

const {data:models,isLoading}=useSWR('models',fetchModel)


    const { data: model, mutate:setModel } = useSWR('model', {fallbackData:'text-davinci-003'})



  return (
    <div>
     <Select 
     className='mt-2 text-black'
    defaultValue={model}
     options={models?.modelOptions}
     isSearchable
     isLoading={isLoading}
     menuPosition='fixed'
     placeholder={model}

     /> 
    </div>
  )
}

export default ModelSelection
