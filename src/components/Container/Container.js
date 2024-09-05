import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/helpers/Server'
import { toast } from 'react-toastify'
import RecepieCard from '../../shared/RecipeCard/RecepieCard'


export default function Container({...props}) {
    const {search} = props
    const[recipes,setRecipes] = useState()

    useEffect(() =>{
        axiosClient.get(`recipes?search=${search}`).then((resp) => {
            if(resp.data.status == "success"){
                setRecipes(resp.data.data.recipes)
            }else{
                toast.error(`something wents wrong..!`)
            }
        }).catch(error => toast.error(`${error}`))

    },[search])

    return (
        <div className='p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {recipes && recipes.map((recipe,index) => (
                <RecepieCard key={index} recipe={recipe}/>
            ))}
        </div>
    )
}
