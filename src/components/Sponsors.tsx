import React, { useState, Fragment, useEffect } from 'react'
import Axios from 'axios'

interface Props {

}

interface SponsorResponse {
    patreonUrl: string,
    patrons: SponsorModel[]
}

interface SponsorModel {
    name: string
    url?: string
    tier: number
    color: string
    glow: boolean
}

const Sponsors = (props: Props): JSX.Element => {

    const [sponsors, setSponsors] = useState<SponsorModel[]>([])

    useEffect(() => {
        fetchSponsors()
    })

    const fetchSponsors = async () => {
        const response = await Axios.get<SponsorResponse>("https://api.xee.dev/v1/sponsors")

        setSponsors(response.data.patrons)
    }

    const getBadgeStyle = (background: string) => {
        const size = 12

        return {
            width: `${size}px`,
            height: `${size}px`,
            display: "inline-block",
            borderRadius: `${size}px`,
            marginRight: "2px",
            background: background
        }
    }

    const Sponsor = (props: SponsorModel): JSX.Element => {
        return (
            <span id={props.name}>
                <div style={getBadgeStyle(props.color)}/>
                {props.name}
            </span>
        )
    }

    return (
        <Fragment>
            {sponsors.map(x => Sponsor(x))}
        </Fragment>
    )
}

export default Sponsors