import * as React from "react"

import { Label } from './label'

interface TagProps{
    text: string
}

export function Tag({text}: TagProps){
    return <Label className="bg-primary px-2 py-1 rounded-full">{text}</Label>
}