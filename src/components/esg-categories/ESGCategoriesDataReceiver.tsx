'use client'

import { useEffect } from "react"
import { ESGCategory, fetchESGCategories } from "./esgCategoriesSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/store"

export default function ESGCategoriesDataReceiver(props: {data: ESGCategory[]}) {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchESGCategories(props.data))
    }, [props.data, dispatch])
    
    return null
}
