import React from 'react'

function Address({data}) {
    return (
        <>
            <p className="address">
                {data?.name}
                <br />
                {data?.address.street} <br />
                {data?.address.suburb} <br />
                {data?.address.city} {data?.address.postcode} <br />
                {data?.address.country}
                <br />
                <span>{data?.phone}</span>
            </p>
        </>
    )
}

export default Address

/*
function Address() {
    return (
        <>
            <p className="address">
                <span>{name}</span>
                <br />
                <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
            </p>
        </>
    )
}
*/