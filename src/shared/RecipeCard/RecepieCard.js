import React from 'react'
import H5 from '../Typography/H5'
import ReadMoreSvg from '../Svg/ReadMoreSvg'
import P from '../Typography/P'

export default function RecepieCard({...props}) {
    const {recipe} = props
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/recipe-details/${recipe.id}`}>
                <img className="rounded-t-lg h-36 object-cover w-full" src={recipe.image_url} alt={recipe.title} />
            </a>
            <div className="flex flex-col gap-2 p-2">
                <a href={`/recipe-details/${recipe.id}`}>
                    <H5>{recipe.title}</H5>
                </a>
                <P>{recipe.publisher}</P>
                <a href={`/recipe-details/${recipe.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <ReadMoreSvg/>
                </a>
            </div>
        </div>

    )
}
