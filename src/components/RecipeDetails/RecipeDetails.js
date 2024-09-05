import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../../utils/helpers/Server'
import { toast } from 'react-toastify'
import H1 from "../../shared/Typography/H1"
import H5 from '../../shared/Typography/H5'
import P from '../../shared/Typography/P'
import TimerSvg from '../../shared/Svg/TimerSvg'
import MultiUserSvg from '../../shared/Svg/MultiUserSvg'

export default function RecipeDetails() {
  const {id} = useParams()
  const[recipeDetails,setRecipeDetails] = useState()
  
  useEffect(() => {
    id && axiosClient.get(`recipes/${id}`).then((resp) => {
      if(resp.data.status == "success"){
          setRecipeDetails(resp.data.data.recipe)
      }else{
          toast.error(`something wents wrong..!`)
      }
    }).catch(error => toast.error(`${error}`))
  },[id])
  
  return (
    <div className='w-screen h-screen p-24'>
      { recipeDetails &&
      <Fragment>
        <div className='w-full h-auto flex flex-row gap-4'>
          <div className='w-full h-auto'>
            <img className="rounded-lg h-auto object-cover w-full" src={recipeDetails.image_url} alt={recipeDetails.title} />
          </div>

          <div className='flex flex-col gap-2 w-full h-auto text-left'>
            <H1>{recipeDetails.title}</H1>
            <H5>{recipeDetails.publisher}</H5>
            <div className='flex flex-row gap-6'>
              <P className={"flex flex-row gap-2"}><TimerSvg/> {recipeDetails.cooking_time} min.</P>
              <P className={"flex flex-row gap-2"}><MultiUserSvg/> {recipeDetails.servings} people.</P>
            </div>
          </div>
        </div>
        <ul className='list-decimal text-left py-12'>
          {recipeDetails.ingredients.map(ingredient => (
            <li className='mx-6'>
              {ingredient.quantity} X {ingredient.unit}{ingredient.description}
            </li>
          ))}
        </ul>
      </Fragment>
      }
    </div>
  )
}
